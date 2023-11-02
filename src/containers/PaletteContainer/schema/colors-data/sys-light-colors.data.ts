import { nl } from "src/utils/native-lodash.ts";
import { StringIndex } from "src/typings";

export const sysLightColorsFrom = (tokens: StringIndex) => [
  [
    [
      {
        name: "Primary",
        bgColor: nl.get(tokens, "colors.md.sys.light.primary"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-primary"),
        colorHash: nl.get(tokens, "colors.md.sys.light.primary"),
        shadeName: "P-600",
      },
      {
        name: "On Primary",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-primary"),
        textColor: nl.get(tokens, "colors.md.sys.light.primary"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-primary"),
        shadeName: "P-10",
      },
    ],
    [
      {
        name: "Primary Container",
        bgColor: nl.get(tokens, "colors.md.sys.light.primary-container"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-primary-container"),
        colorHash: nl.get(tokens, "colors.md.sys.light.primary-container"),
        shadeName: "P-100",
      },
      {
        name: "On Primary Container",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-primary-container"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-primary"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-primary-container"),
        shadeName: "P-900",
      },
    ],
  ],
  [
    [
      {
        name: "Secondary",
        bgColor: nl.get(tokens, "colors.md.sys.light.secondary"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-secondary"),
        colorHash: nl.get(tokens, "colors.md.sys.light.secondary"),
        shadeName: "S-600",
      },
      {
        name: "On Secondary",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-secondary"),
        textColor: nl.get(tokens, "colors.md.sys.light.secondary"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-secondary"),
        shadeName: "S-10",
      },
    ],
    [
      {
        name: "Secondary Container",
        bgColor: nl.get(tokens, "colors.md.sys.light.secondary-container"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-secondary-container"),
        colorHash: nl.get(tokens, "colors.md.sys.light.secondary-container"),
        shadeName: "S-100",
      },
      {
        name: "On Secondary Container",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-secondary-container"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-secondary"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-secondary-container"),
        shadeName: "S-900",
      },
    ],
  ],
  [
    [
      {
        name: "Error",
        bgColor: nl.get(tokens, "colors.md.sys.light.error"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-error"),
        colorHash: nl.get(tokens, "colors.md.sys.light.error"),
        shadeName: "Error-600",
      },
      {
        name: "On Error",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-error"),
        textColor: nl.get(tokens, "colors.md.sys.light.error"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-error"),
        shadeName: "Error-10",
      },
    ],
    [
      {
        name: "Error Container",
        bgColor: nl.get(tokens, "colors.md.sys.light.error-container"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-error-container"),
        colorHash: nl.get(tokens, "colors.md.sys.light.error-container"),
        shadeName: "Error-100",
      },
      {
        name: "On Error Container",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-error-container"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-error"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-error-container"),
        shadeName: "P-900",
      },
    ],
  ],
  [
    [
      {
        name: "Background",
        bgColor: nl.get(tokens, "colors.md.sys.light.background"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-background"),
        colorHash: nl.get(tokens, "colors.md.sys.light.background"),
        shadeName: "N-10",
      },
      {
        name: "On Background",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-background"),
        textColor: nl.get(tokens, "colors.md.sys.light.background"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-background"),
        shadeName: "N-900",
      },
    ],
    [
      {
        name: "Surface",
        bgColor: nl.get(tokens, "colors.md.sys.light.surface"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-surface"),
        colorHash: nl.get(tokens, "colors.md.sys.light.surface"),
        shadeName: "N-10",
      },
      {
        name: "On Surface",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-surface"),
        textColor: nl.get(tokens, "colors.md.sys.light.surface"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-surface"),
        shadeName: "N-900",
      },
    ],
  ],
  [
    [
      {
        name: "Outline",
        bgColor: nl.get(tokens, "colors.md.sys.light.outline"),
        textColor: nl.get(tokens, "colors.md.sys.light.background"),
        colorHash: nl.get(tokens, "colors.md.sys.light.outline"),
        shadeName: "NV-500",
      },
      {
        name: "Outline Variant",
        bgColor: nl.get(tokens, "colors.md.sys.light.outline-variant"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-surface"),
        colorHash: nl.get(tokens, "colors.md.sys.light.outline-variant"),
        shadeName: "NV-200",
      },
    ],
    [
      {
        name: "Surface Variant",
        bgColor: nl.get(tokens, "colors.md.sys.light.surface-variant"),
        textColor: nl.get(tokens, "colors.md.sys.light.on-surface-variant"),
        colorHash: nl.get(tokens, "colors.md.sys.light.surface-variant"),
        shadeName: "NV-100",
      },
      {
        name: "On Surface Variant",
        bgColor: nl.get(tokens, "colors.md.sys.light.on-surface-variant"),
        textColor: nl.get(tokens, "colors.md.sys.light.surface"),
        colorHash: nl.get(tokens, "colors.md.sys.light.on-surface-variant"),
        shadeName: "NV-700",
      },
    ],
  ],
];
