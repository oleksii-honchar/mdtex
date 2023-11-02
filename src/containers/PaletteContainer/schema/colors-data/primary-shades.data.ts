import { nl } from "src/utils/native-lodash.ts";
import { StringIndex } from "src/typings";

export const primaryShadesFrom = (tokens: StringIndex) => [
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary900"),
    shadeName: "P-900",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary800"),
    shadeName: "P-800",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary700"),
    shadeName: "P-700",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary600"),
    shadeName: "P-600",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary500"),
    shadeName: "P-500",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary400"),
    shadeName: "P-400",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary300"),
    shadeName: "P-300",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary700"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary200"),
    shadeName: "P-200",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary800"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary100"),
    shadeName: "P-100",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary50"),
    shadeName: "P-50",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary20"),
    shadeName: "P-20",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary10"),
    shadeName: "P-10",
  },
];
