import { nl } from "src/utils/native-lodash.ts";
import * as tokens from "src/stylesheets/mdpal-design-tokens-v1.ts";

export const sysLightColors = [
  [
    [
      {
        name: "Primary",
        bgColor: "bg-md-sys-light-primary",
        textColor: "text-md-sys-light-on-primary",
        colorHash: nl.get(tokens, "colors.md.sys.light.primary"),
        shadeName: "P-600",
      },
      {
        name: "On Primary",
        bgColor: "bg-md-sys-light-on-primary",
        textColor: "text-md-sys-light-primary",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-primary"),
        shadeName: "P-10",
      },
    ],
    [
      {
        name: "Primary Container",
        bgColor: "bg-md-sys-light-primary-container",
        textColor: "text-md-sys-light-on-primary-container",
        colorHash: nl.get(tokens, "colors.md.sys.light.primary-container"),
        shadeName: "P-100",
      },
      {
        name: "On Primary Container",
        bgColor: "bg-md-sys-light-on-primary-container",
        textColor: "text-md-sys-light-on-primary",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-primary-container"),
        shadeName: "P-900",
      },
    ],
  ],
  [
    [
      {
        name: "Secondary",
        bgColor: "bg-md-sys-light-secondary",
        textColor: "text-md-sys-light-on-secondary",
        colorHash: nl.get(tokens, "colors.md.sys.light.secondary"),
        shadeName: "S-600",
      },
      {
        name: "On Secondary",
        bgColor: "bg-md-sys-light-on-secondary",
        textColor: "text-md-sys-light-secondary",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-secondary"),
        shadeName: "S-10",
      },
    ],
    [
      {
        name: "Secondary Container",
        bgColor: "bg-md-sys-light-secondary-container",
        textColor: "text-md-sys-light-on-secondary-container",
        colorHash: nl.get(tokens, "colors.md.sys.light.secondary-container"),
        shadeName: "S-100",
      },
      {
        name: "On Secondary Container",
        bgColor: "bg-md-sys-light-on-secondary-container",
        textColor: "text-md-sys-light-on-secondary",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-secondary-container"),
        shadeName: "S-900",
      },
    ],
  ],
  [
    [
      {
        name: "Error",
        bgColor: "bg-md-sys-light-error",
        textColor: "text-md-sys-light-on-error",
        colorHash: nl.get(tokens, "colors.md.sys.light.error"),
        shadeName: "Error-600",
      },
      {
        name: "On Error",
        bgColor: "bg-md-sys-light-on-error",
        textColor: "text-md-sys-light-error",
        colorHash: nl.get(tokens, "bg-md-sys-light-on-error"),
        shadeName: "Error-10",
      },
    ],
    [
      {
        name: "Error Container",
        bgColor: "bg-md-sys-light-error-container",
        textColor: "text-md-sys-light-on-error-container",
        colorHash: nl.get(tokens, "colors.md.sys.light.error-container"),
        shadeName: "Error-100",
      },
      {
        name: "On Error Container",
        bgColor: "bg-md-sys-light-on-error-container",
        textColor: "text-md-sys-light-on-error",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-error-container"),
        shadeName: "P-900",
      },
    ],
  ],
  [
    [
      {
        name: "Background",
        bgColor: "bg-md-sys-light-background",
        textColor: "text-md-sys-light-on-background",
        colorHash: nl.get(tokens, "colors.md.sys.light.background"),
        shadeName: "N-10",
      },
      {
        name: "On Background",
        bgColor: "bg-md-sys-light-on-background",
        textColor: "text-md-sys-light-background",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-background"),
        shadeName: "N-900",
      },
    ],
    [
      {
        name: "Surface",
        bgColor: "bg-md-sys-light-surface",
        textColor: "text-md-sys-light-on-surface",
        colorHash: nl.get(tokens, "colors.md.sys.light.surface"),
        shadeName: "N-10",
      },
      {
        name: "On Surface",
        bgColor: "bg-md-sys-light-on-surface",
        textColor: "text-md-sys-light-surface",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-surface"),
        shadeName: "N-900",
      },
    ],
  ],
  [
    [
      {
        name: "Outline",
        bgColor: "bg-md-sys-light-outline",
        textColor: "text-md-sys-light-background",
        colorHash: nl.get(tokens, "colors.md.sys.light.outline"),
        shadeName: "NV-500",
      },
      {
        name: "Outline Variant",
        bgColor: "bg-md-sys-light-outline-variant",
        textColor: "text-md-sys-light-on-surface",
        colorHash: nl.get(tokens, "colors.md.sys.light.outline-variant"),
        shadeName: "NV-200",
      },
    ],
    [
      {
        name: "Surface Variant",
        bgColor: "bg-md-sys-light-surface-variant",
        textColor: "text-md-sys-light-on-surface-variant",
        colorHash: nl.get(tokens, "colors.md.sys.light.surface-variant"),
        shadeName: "NV-100",
      },
      {
        name: "On Surface Variant",
        bgColor: "bg-md-sys-light-on-surface-variant",
        textColor: "text-md-sys-light-surface",
        colorHash: nl.get(tokens, "colors.md.sys.light.on-surface-variant"),
        shadeName: "NV-700",
      },
    ],
  ],
];
