import { nl } from "src/utils/native-lodash.ts";
import { StringIndex } from "src/typings";

export const secondaryShadesFrom = (tokens: StringIndex) => [
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    shadeName: "S-900",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary800"),
    shadeName: "S-800",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary700"),
    shadeName: "S-700",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary600"),
    shadeName: "S-600",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary500"),
    shadeName: "S-500",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary400"),
    shadeName: "S-400",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary300"),
    shadeName: "S-300",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary200"),
    shadeName: "S-200",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary800"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary100"),
    shadeName: "S-100",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary50"),
    shadeName: "S-50",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary20"),
    shadeName: "S-20",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    shadeName: "S-10",
  },
];
