import React, { useEffect, useState } from "react";

import commandsList from "./commands.json";
import keysList from "./keys.json";

export default function App() {
  const [form, setForm] = useState({ key: "", command: "" });
  const [commands, setCommands] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(
      [...new Set(commands.map((item) => item.command[0].type))]
        .map((type) =>
          commands
            .filter((item) => item.command[0].type === type)
            .reduce(
              (result, item) =>
                (result += `bind "${item.key.key}" "${item.command
                  .map((command) => command.key)
                  .join("; ")}" // ${item.command
                  .map((command) => command.value)
                  .join("; ")}\n`),
              `// ${type}\n`
            )
        )
        .join("\n")
    );
  }, [commands]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (commands.some((item) => item.key.key === form.key)) {
      setCommands(
        commands.map((item) => {
          if (item.key.key === form.key) {
            item = {
              ...item,
              command: [
                ...new Set([
                  ...item.command,
                  commandsList.find((item) => item.key === form.command),
                ]),
              ],
            };
          }

          return item;
        })
      );
    } else {
      setCommands([
        ...commands,
        {
          key: keysList.find((item) => item.key === form.key),
          command: [commandsList.find((item) => item.key === form.command)],
        },
      ]);
    }

    setForm({ ...form, command: "" });
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

                {[...new Set(keysList.map((keysList) => keysList.type))].map(
                  (type) => (
                    <optgroup key={type} label={type}>
                      {keysList
                        .filter((key) => key.type === type)
                        .map((key) => (
                          <option key={key.key} value={key.key}>
                            {key.value}
                          </option>
                        ))}
                    </optgroup>
                  )
                )}
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

                {[
                  ...new Set(
                    commandsList.map((commandsList) => commandsList.type)
                  ),
                ].map((type) => (
                  <optgroup key={type} label={type}>
                    {commandsList
                      .filter((command) => command.type === type)
                      .map((command) => (
                        <option key={command.key} value={command.key}>
                          {command.value}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                disabled={!form.key || !form.command}
                className="btn btn-primary"
              >
                Adicionar
              </button>
            </div>
          </form>
        </aside>

        <article className="col-9">
          <textarea
            name="result"
            rows="20"
            readOnly
            value={result}
            className="form-control"
          ></textarea>

          <button
            onClick={(e) => navigator.clipboard.writeText(result)}
            disabled={!commands.length}
            className="btn btn-outline"
          >
            Copiar
          </button>
        </article>
      </section>
    </main>
  );
}
