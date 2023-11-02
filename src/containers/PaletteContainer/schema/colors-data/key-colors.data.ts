import { nl } from "src/utils/native-lodash.ts";
import { StringIndex } from "src/typings";

export const keyColorsFrom = (tokens: StringIndex) => [
  {
    name: "Primary",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-primary"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary"),
  },
  {
    name: "Secondary",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-secondary"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary"),
  },
  {
    name: "Error",
    bgColor: nl.get(tokens, "colors.md.sys.light.error"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-error"),
    colorHash: nl.get(tokens, "colors.md.sys.light.error"),
  },
  {
    name: "Neutral",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-surface-variant"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral"),
  },
  {
    name: "N. Variant",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-surface"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant"),
  },
];
