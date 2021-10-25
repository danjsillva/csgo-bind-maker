import { useEffect, useState } from "react";

import commandsList from "../utils/commands.json";
import keysList from "../utils/keys.json";

export default function Form({ onUpdateBinds }) {
  const [form, setForm] = useState({ key: "", command: "" });
  const [binds, setBinds] = useState([]);

  useEffect(() => {
    onUpdateBinds(binds);
  }, [binds]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (binds.some((bind) => bind.key.value === form.key)) {
      setBinds(
        binds.map((bind) => {
          if (bind.key.value === form.key) {
            bind = {
              ...bind,
              command: [
                ...new Set([
                  ...bind.command,
                  commandsList.find(
                    (command) => command.value === form.command
                  ),
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
          key: keysList.find((key) => key.value === form.key),
          command: [
            commandsList.find((command) => command.value === form.command),
          ],
        },
      ]);
    }

    setForm({ ...form, command: "" });
  };

  return (
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
                  <option key={key.value} value={key.value}>
                    {key.description}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>

        <div className="form-text">
          É possível combinar vários comandos em uma única tecla
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
                    <option key={command.value} value={command.value}>
                      {command.description}
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
  );
}
