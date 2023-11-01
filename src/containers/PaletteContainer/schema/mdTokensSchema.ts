import joi from "joi";
import { StringIndex } from "src/typings";

function getRefPalDefs(colorName: string): StringIndex {
  const colorShadeCodes = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 20, 10];
  const data: StringIndex = {};
  colorShadeCodes.forEach((code) => (data[`${colorName}${code}`] = joi.string().required()));
  return data;
}

const sysBaseSchema = joi.object({
  primary: joi.string().required(),
  "on-primary": joi.string().required(),
  "primary-container": joi.string().required(),
  "on-primary-container": joi.string().required(),
  "primary-fixed": joi.string().required(),
  "on-primary-fixed": joi.string().required(),
  "primary-fixed-dim": joi.string().required(),
  "on-primary-fixed-variant": joi.string().required(),
  secondary: joi.string().required(),
  "on-secondary": joi.string().required(),
  "secondary-container": joi.string().required(),
  "on-secondary-container": joi.string().required(),
  "secondary-fixed": joi.string().required(),
  "on-secondary-fixed": joi.string().required(),
  "secondary-fixed-dim": joi.string().required(),
  "on-secondary-fixed-variant": joi.string().required(),
  tertiary: joi.string().required(),
  "on-tertiary": joi.string().required(),
  "tertiary-container": joi.string().required(),
  "on-tertiary-container": joi.string().required(),
  "tertiary-fixed": joi.string().required(),
  "on-tertiary-fixed": joi.string().required(),
  "tertiary-fixed-dim": joi.string().required(),
  "on-tertiary-fixed-variant": joi.string().required(),
  error: joi.string().required(),
  "on-error": joi.string().required(),
  "error-container": joi.string().required(),
  "on-error-container": joi.string().required(),
  outline: joi.string().required(),
  background: joi.string().required(),
  "on-background": joi.string().required(),
  surface: joi.string().required(),
  "on-surface": joi.string().required(),
  "surface-variant": joi.string().required(),
  "on-surface-variant": joi.string().required(),
  "inverse-surface": joi.string().required(),
  "inverse-on-surface": joi.string().required(),
  "inverse-primary": joi.string().required(),
  shadow: joi.string().required(),
  "surface-tint": joi.string().required(),
  "outline-variant": joi.string().required(),
  scrim: joi.string().required(),
  "surface-container-highest": joi.string().required(),
  "surface-container-high": joi.string().required(),
  "surface-container": joi.string().required(),
  "surface-container-low": joi.string().required(),
  "surface-container-lowest": joi.string().required(),
  "surface-bright": joi.string().required(),
  "surface-dim": joi.string().required(),
});

// Figma "Material Theme Builder" plugin export output schema
export const mdTokensSchema = joi.object({
  colors: joi.object({
    md: joi.object({
      sys: joi.object({
        light: sysBaseSchema,
        dark: sysBaseSchema,
      }),
      ref: joi.object({
        pal: joi.object({
          "primary": joi.string().required(),
          "secondary": joi.string().required(),
          "neutral": joi.string().required(),
          "neutral-variant": joi.string().required(),
          ...getRefPalDefs("primary"),
          ...getRefPalDefs("secondary"),
          ...getRefPalDefs("tertiary"),
          ...getRefPalDefs("error"),
          ...getRefPalDefs("neutral"),
          ...getRefPalDefs("neutral-variant"),
        }),
      }),
    }),
  }),
});
