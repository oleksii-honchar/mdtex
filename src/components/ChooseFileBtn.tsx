import { ChangeEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { TbUpload } from "react-icons/tb";

import { LoggerService } from "@ciklum/logan";

import { FileContext } from "src/contexts/FileContext.tsx";

const logger = new LoggerService();
logger.setTitle("ChooseFileBtn");

export function ChooseFileBtn() {
  const { setFile } = useContext(FileContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (!file) {
      toast.error("No file selected");
      return;
    }
    logger.debug("File:", file);
    setFile(file);
  };

  return (
    <>
      <div
        key="choose-file"
        className={`
          h-10 w-10
          text-md-sys-light-on-surface bg-md-sys-light-surface
          flex flex-row items-center justify-center
          text-sm font-medium
          rounded-full cursor-pointer transition-all
          shadow hover:shadow-md
        `}
      >
        <label htmlFor="fileInput" className={`underline decoration-1 cursor-pointer`}>
          <TbUpload />
        </label>
        <input id="fileInput" type="file" accept=".json" style={{ display: "none" }} onChange={handleFileChange} />
      </div>
    </>
  );
}
