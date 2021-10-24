import React, { useEffect, useState } from "react";
import classNames from "classnames";

import DevelopedBy from "./components/DevelopedBy";

import commandsList from "./utils/commands.json";
import keysList from "./utils/keys.json";

export default function App() {
  const [form, setForm] = useState({ key: "", command: "" });
  const [tabIndex, setTabIndex] = useState(0);
  const [copyButtonText, setCopyButtonText] = useState("Copiar");
  const [binds, setBinds] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(
      [...new Set(binds.map((bind) => bind.command[0].type))]
        .map((type) =>
          binds
            .filter((bind) => bind.command[0].type === type)
            .reduce(
              (result, bind) =>
                (result += `bind "${bind.key.key}" "${bind.command
                  .map((command) => command.key)
                  .join("; ")}" // ${bind.command
                  .map((command) => command.value)
                  .join("; ")}\n`),
              `// ${type}\n`
            )
        )
        .join("\n")
    );
  }, [binds]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (binds.some((bind) => bind.key.key === form.key)) {
      setBinds(
        binds.map((bind) => {
          if (bind.key.key === form.key) {
            bind = {
              ...bind,
              command: [
                ...new Set([
                  ...bind.command,
                  commandsList.find((bind) => bind.key === form.command),
                ]),
              ],
            };
          }

          return bind;
        })
      );
    } else {
      setBinds([
        ...binds,
        {
          key: keysList.find((key) => key.key === form.key),
          command: [
            commandsList.find((command) => command.key === form.command),
          ],
        },
      ]);
    }

    setForm({ ...form, command: "" });
  };

  const onClickCopyHandle = () => {
    navigator.clipboard.writeText(result);

    setCopyButtonText("Copiado com sucesso!");
  };

  const onMouseLeaveCopyHandle = () => {
    setTimeout(() => setCopyButtonText("Copiar"), 1000);
  };

  return (
    <main className="container">
      <section className="row mt-5">
        <aside className="col-3">
          <h1>CSGO Bind Maker</h1>

          <form onSubmit={onFormSubmit}>
            <div className="mt-4">
              <label className="form-label">Tecla ou botão</label>

              <select
                name="key"
                value={form.key}
                onChange={(e) => setForm({ ...form, key: e.target.value })}
                className="form-select"
              >
                <option value="" disabled>
                  Selecione
                </option>

                {[...new Set(keysList.map((key) => key.type))].map((type) => (
                  <optgroup key={type} label={type}>
                    {keysList
                      .filter((key) => key.type === type)
                      .map((key) => (
                        <option key={key.key} value={key.key}>
                          {key.value}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>

              <div className="form-text">
                É possível combinar vários comandos para um tecla
              </div>
            </div>

            <div className="mt-3">
              <label className="form-label">Comando</label>

              <select
                name="command"
                value={form.command}
                onChange={(e) => setForm({ ...form, command: e.target.value })}
                className="form-select"
              >
                <option value="" disabled>
                  Selecione
                </option>

                {[...new Set(commandsList.map((command) => command.type))].map(
                  (type) => (
                    <optgroup key={type} label={type}>
                      {commandsList
                        .filter((command) => command.type === type)
                        .map((command) => (
                          <option key={command.key} value={command.key}>
                            {command.value}
                          </option>
                        ))}
                    </optgroup>
                  )
                )}
              </select>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                disabled={!form.key || !form.command}
                className="btn btn-danger"
              >
                Adicionar
              </button>
            </div>
          </form>
        </aside>

        <article className="col-9">
          <div className="btn-group mb-3">
            <button
              className={classNames("btn", "btn-danger", {
                active: tabIndex === 0,
              })}
              onClick={(e) => setTabIndex(0)}
            >
              Modo texto
            </button>
            <button
              className={classNames("btn btn-danger", {
                active: tabIndex === 1,
              })}
              onClick={(e) => setTabIndex(1)}
            >
              Modo tabela
            </button>
          </div>

          {tabIndex === 0 ? (
            <textarea
              name="result"
              rows="24"
              readOnly
              value={result}
              className="form-control code"
            ></textarea>
          ) : (
            <div className="">
              <div className="card p-3">
                <div className="row">
                  <div className="col-2">
                    <dt>Tecla ou botão</dt>
                  </div>
                  <div className="col-3">
                    <dt>Comando</dt>
                  </div>
                  <div className="col-7">
                    <dt>Descrição</dt>
                  </div>
                </div>
              </div>

              {binds.map((bind) => (
                <div className="card p-3 mt-1">
                  <div className="row">
                    <div className="col-2">{bind.key.key}</div>
                    <div className="col-3">
                      {bind.command.map((command) => command.key).join("; ")}
                    </div>
                    <div className="col-7">
                      {bind.command.map((command) => command.value).join("; ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              onClick={onClickCopyHandle}
              onMouseLeave={onMouseLeaveCopyHandle}
              disabled={!binds.length}
              className="btn btn-light"
            >
              {copyButtonText}
            </button>

            <DevelopedBy />
          </div>
        </article>
      </section>
    </main>
  );
}
