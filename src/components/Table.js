import React from "react";

export default function Table({ binds }) {
  return (
    <div className="">
      <div
        className="card bg-dark text-light p-3"
        style={{ borderColor: "#6c757d" }}
      >
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
        <div
          key={bind.key.value}
          className="card bg-dark text-light p-3 mt-1"
          style={{ borderColor: "#6c757d" }}
        >
          <div className="row">
            <div className="col-2">{bind.key.value}</div>
            <div className="col-3">
              {bind.command.map((command) => command.value).join("; ")}
            </div>
            <div className="col-7">
              {bind.command.map((command) => command.description).join("; ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
