import { nl } from "src/utils/native-lodash.ts";
import { StringIndex } from "src/typings";

export const neutralShadesFrom = (tokens: StringIndex) => [
  {
    name: "Scrim",
    bgColor: nl.get(tokens, "colors.md.sys.light.scrim"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.sys.light.scrim"),
    shadeName: "N-1000",
  },
  {
    name: "Shadow",
    bgColor: nl.get(tokens, "colors.md.sys.light.shadow"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.sys.light.shadow"),
    shadeName: "N-1000",
  },
  {
    name: "",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral400"),
    shadeName: "N-400",
  },
  {
    name: "",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral300"),
    shadeName: "N-300",
  },
  {
    name: "",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral200"),
    shadeName: "N-200",
  },
  {
    name: "Surface Dim",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-dim"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-dim"),
    shadeName: "N-130",
  },
  {
    name: "Surf. Cntr. Highest",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-highest"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-highest"),
    shadeName: "N-100",
  },
  {
    name: "Surf. Cntr. High",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-high"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-high"),
    shadeName: "N-80",
  },
  {
    name: "Surf. Cntr.",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container"),
    shadeName: "N-60",
  },
  {
    name: "Surf. Cntr. Low",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-low"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-low"),
    shadeName: "N-40",
  },
  {
    name: "Surf. Cntr. Lowest",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral20"),
    shadeName: "N-20",
  },
  {
    name: "Surface",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    shadeName: "N-10",
  },
];
