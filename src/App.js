import { useState } from "react";

import Form from "./components/Form";
import ModeSwitch from "./components/ModeSwitch";
import Textarea from "./components/Textarea";
import Table from "./components/Table";
import Keyboard from "./components/Keyboard";
import DevelopedBy from "./components/DevelopedBy";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [binds, setBinds] = useState([]);
  const [fileContent, setFileContent] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copiar");

  const onClickCopyHandle = () => {
    navigator.clipboard.writeText(fileContent);

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

          <Form onUpdateBinds={(binds) => setBinds(binds)} />
        </aside>

        <article className="col-9">
          <ModeSwitch
            tabIndex={tabIndex}
            onUpdateTabIndex={(tabIndex) => setTabIndex(tabIndex)}
          />

          {tabIndex === 0 && (
            <Textarea
              binds={binds}
              onUpdateFileContent={(fileContent) => setFileContent(fileContent)}
            />
          )}

          {tabIndex === 1 && <Table binds={binds} />}

          {tabIndex === 2 && <Keyboard binds={binds} />}

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
