import { useEffect, useState } from "react";

export default function Textarea({ binds, onUpdateFileContent }) {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    setFileContent(
      [...new Set(binds.map((bind) => bind.command[0].type))]
        .map((type) =>
          binds
            .filter((bind) => bind.command[0].type === type)
            .reduce(
              (fileContent, bind) =>
                (fileContent += `bind "${bind.key.value}" "${bind.command
                  .map((command) => command.value)
                  .join("; ")}" // ${bind.command
                  .map((command) => command.description)
                  .join("; ")}\n`),
              `// ${type}\n`
            )
        )
        .join("\n")
    );
  }, [binds]);

  useEffect(() => {
    onUpdateFileContent(fileContent);
  }, [fileContent]);

  return (
    <textarea
      name="fileContent"
      rows="24"
      readOnly
      value={fileContent}
      className="form-control bg-dark text-light code"
    ></textarea>
  );
}
