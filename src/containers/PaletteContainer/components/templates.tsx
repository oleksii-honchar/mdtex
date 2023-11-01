import type { StringIndex } from "src/typings/index.d.ts";
import { classNames } from "src/utils/classNames.ts";

export function ColorHashText({ color, toShowOnHover }: StringIndex) {
  return (
    <div
      className={classNames(
        `
        absolute bottom-0 left-0 px-1
        select-all
        text-[10px]
        `,
        toShowOnHover ? "hidden group-hover:block" : "block",
      )}
    >
      {color}
    </div>
  );
}

export function ColorShadeName({ shadeName, toShowOnHover }: StringIndex) {
  return (
    <div
      className={classNames(
        `
        absolute bottom-0 right-0 px-1
        text-[10px]
        `,
        toShowOnHover ? "hidden group-hover:block" : "block",
      )}
    >
      {shadeName}
    </div>
  );
}

export function KeyColor({ name, textColor, bgColor, colorHash }: StringIndex) {
  return (
    <div
      className={`
      flex items-start justify-center w-full p-1
      ${textColor}
      ${bgColor}
      relative
      rounded-lg
      border-2 border-transparent
      hover:border-md-sys-light-outline
      hover:cursor-pointer
      transition-all
    `}
    >
      {name}
      <ColorHashText color={colorHash} />
    </div>
  );
}

export function PaletteColorPair({ colorPair }: StringIndex) {
  return (
    <div tmpl="PaletteColorPair" className="flex flex-col w-full">
      {colorPair.map((color, idx) => (
        <PaletteColor key={`col-pair-${idx}`} {...color} />
      ))}
    </div>
  );
}

export function PaletteColor({ name, textColor, bgColor, colorHash, shadeName }: StringIndex) {
  return (
    <div
      tmpl="PaletteColor"
      className={`
          flex items-start justify-start w-full p-1 h-14 
          last:h-12 last:text-[12px]
          ${textColor}
          ${bgColor}
          relative text-[14px]
          first:rounded-t-lg last:rounded-b-lg
          border-2 border-transparent
          hover:border-md-sys-light-outline
          hover:cursor-pointer
          transition-all
        `}
    >
      {name}
      <ColorHashText color={colorHash} />
      <ColorShadeName shadeName={shadeName} />
    </div>
  );
}

export function ColorShade({ name, textColor, bgColor, colorHash, shadeName }: StringIndex) {
  return (
    <div
      className={`
          flex items-center justify-start w-full h-8 p-1
          ${textColor}
          ${bgColor}
          relative text-[14px]
          group
          first:rounded-t-lg last:rounded-b-lg
          border-2 border-transparent
          hover:border-md-sys-light-outline
          hover:cursor-pointer
          transition-all
        `}
    >
      {name}
      <ColorHashText color={colorHash} toShowOnHover />
      <ColorShadeName shadeName={shadeName} toShowOnHover />
    </div>
  );
}

export function PaletteColorCol({ colorCol }: StringIndex) {
  return (
    <div className="flex flex-col w-full gap-2">
      {colorCol.map((colorPair, idx) => (
        <PaletteColorPair key={`col-pair-${idx}`} colorPair={colorPair} />
      ))}
    </div>
  );
}
