import { useState } from "react";
import { HelpModalDialog } from "./HelpModalDialog";

export function HelpBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        key="help"
        onClick={() => {
          setIsOpen(true);
        }}
        className={`
          h-10 w-10
          text-md-sys-light-on-surface bg-md-sys-light-surface
          flex flex-row items-center justify-center
          text-sm font-medium
          rounded-full cursor-pointer transition-all
          shadow hover:shadow-md
        `}
      >
        ?
      </div>
      <HelpModalDialog setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
