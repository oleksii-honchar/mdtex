import { nl } from "src/utils/native-lodash.ts";
import * as tokens from "src/stylesheets/mdpal-design-tokens-v1.ts";

export const neutralShades = [
  {
    name: "Scrim",
    bgColor: "bg-md-sys-light-scrim",
    textColor: "text-md-ref-pal-neutral10",
    colorHash: nl.get(tokens, "colors.md.sys.light.scrim"),
    shadeName: "N-1000",
  },
  {
    name: "Shadow",
    bgColor: "bg-md-sys-light-shadow",
    textColor: "text-md-ref-pal-neutral10",
    colorHash: nl.get(tokens, "colors.md.sys.light.shadow"),
    shadeName: "N-1000",
  },
  {
    name: "",
    bgColor: "bg-md-ref-pal-neutral400",
    textColor: "text-md-ref-pal-neutral10",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral400"),
    shadeName: "N-400",
  },
  {
    name: "",
    bgColor: "bg-md-ref-pal-neutral300",
    textColor: "text-md-ref-pal-neutral10",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral300"),
    shadeName: "N-300",
  },
  {
    name: "",
    bgColor: "bg-md-ref-pal-neutral200",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral200"),
    shadeName: "N-200",
  },
  {
    name: "Surface Dim",
    bgColor: "bg-md-sys-light-surface-dim",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-dim"),
    shadeName: "N-130",
  },
  {
    name: "Surf. Cntr. Highest",
    bgColor: "bg-md-sys-light-surface-container-highest",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-highest"),
    shadeName: "N-100",
  },
  {
    name: "Surf. Cntr. High",
    bgColor: "bg-md-sys-light-surface-container-high",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-high"),
    shadeName: "N-80",
  },
  {
    name: "Surf. Cntr.",
    bgColor: "bg-md-sys-light-surface-container",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container"),
    shadeName: "N-60",
  },
  {
    name: "Surf. Cntr. Low",
    bgColor: "bg-md-sys-light-surface-container-low",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-low"),
    shadeName: "N-40",
  },
  {
    name: "Surf. Cntr. Lowest",
    bgColor: "bg-md-ref-pal-neutral20",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral20"),
    shadeName: "N-20",
  },
  {
    name: "Surface",
    bgColor: "bg-md-ref-pal-neutral10",
    textColor: "text-md-ref-pal-neutral900",
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    shadeName: "N-10",
  },
];
