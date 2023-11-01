import joi from "joi";
import type { StringIndex } from "src/typings/index.d.ts";
import { LoggerService } from "@ciklum/logan";
import { toast } from "react-toastify";

import { classNames } from "src/utils/classNames.ts";

import Palette from "./components/Palette.tsx";
import { useContext, useEffect, useState } from "react";
import { FileContext } from "src/contexts/FileContext.tsx";
import { mdTokensSchema } from "./schema/mdTokensSchema.ts";

const logger = new LoggerService();
logger.setTitle("PaletteContainer");

export default function PaletteContainer() {
  const { file } = useContext(FileContext);
  const [mdTokens, setMdTokens] = useState({});

  function processFileContent(content: string) {
    let mdTokensJson: StringIndex = {};
    try {
      mdTokensJson = JSON.parse(content);
      mdTokensJson = joi.attempt(mdTokensJson, mdTokensSchema);
      const msg = "File schema validation successful";
      logger.debug(msg);
      toast.success(msg);
      setMdTokens(mdTokensJson);
    } catch (err) {
      logger.error(err);
      toast.error(`File schema validation failed: ${(err as Error).message}`);
    }
  }

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      processFileContent(reader.result!.toString());
    };
    reader.readAsText(file);
  }, [file]);

  return (
    <div
      id="PaletteContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          px-2 flex flex-col flex-grow 
        `}
    >
      <Palette mdTokens={mdTokens} />
    </div>
  );
}
