import { nl } from "src/utils/native-lodash.ts";
import * as tokens from "src/stylesheets/mdpal-design-tokens-v1.ts";

export const keyColors = [
  {
    name: "Primary",
    bgColor: "bg-md-ref-pal-primary",
    textColor: "text-md-sys-light-on-primary",
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary"),
  },
  {
    name: "Secondary",
    bgColor: "bg-md-ref-pal-secondary",
    textColor: "text-md-sys-light-on-secondary",
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary"),
  },
  {
    name: "Error",
    bgColor: "bg-md-sys-light-error",
    textColor: "text-md-sys-light-on-error",
    colorHash: nl.get(tokens, "colors.md.sys.light.error"),
  },
  {
    name: "Neutral",
    bgColor: "bg-md-ref-pal-neutral",
    textColor: "text-md-sys-light-on-surface-variant",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral"),
  },
  {
    name: "N. Variant",
    bgColor: "bg-md-ref-pal-neutral-variant",
    textColor: "text-md-sys-light-on-surface",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant"),
  },
];
