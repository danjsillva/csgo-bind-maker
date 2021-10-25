import classNames from "classnames";

export default function ModeSwitch({ tabIndex, onUpdateTabIndex }) {
  return (
    <div className="btn-group mb-3">
      <button
        className={classNames("btn", "btn-danger", {
          active: tabIndex === 0,
        })}
        onClick={(e) => onUpdateTabIndex(0)}
      >
        Modo texto
      </button>

      <button
        className={classNames("btn btn-danger", {
          active: tabIndex === 1,
        })}
        onClick={(e) => onUpdateTabIndex(1)}
      >
        Modo tabela
      </button>
    </div>
  );
}
