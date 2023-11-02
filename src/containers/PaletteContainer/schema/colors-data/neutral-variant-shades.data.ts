import { nl } from "src/utils/native-lodash.ts";
import { StringIndex } from "src/typings";

export const neutralVShadesFrom = (tokens: StringIndex) => [
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    shadeName: "NV-900",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant800"),
    shadeName: "NV-800",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant700"),
    shadeName: "NV-700",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant600"),
    shadeName: "NV-600",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant500"),
    shadeName: "NV-500",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant400"),
    shadeName: "NV-400",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant300"),
    shadeName: "NV-300",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant200"),
    shadeName: "NV-200",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant100"),
    shadeName: "NV-100",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant50"),
    shadeName: "NV-50",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant20"),
    shadeName: "NV-20",
  },
  {
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    shadeName: "NV-10",
  },
];
