import React from "react";
import { theme } from "../../../themes/index";
import { Typography } from "@mui/material";

function TypographyComponent(props) {
  let styles = {};
  switch (props.variant) {
    case "h1":
      styles = {
        fontSize: theme.typography.h1.fontSize,
        fontWeight: theme.typography.h1.fontWeight,
        lineHeight: theme.typography.h1.lineHeight,
        color: theme.palette.textColor.main,
        letterSpacing: "-0.015rem",
      };
      break;
    case "h2":
      styles = {
        fontSize: theme.typography.h2.fontSize,
        fontWeight: theme.typography.h2.fontWeight,
        lineHeight: theme.typography.h2.lineHeight,
        color: theme.palette.textColor.highEmphasis,
      };
      break;
    case "h3":
      styles = {
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        lineHeight: theme.typography.h3.lineHeight,
        color: theme.palette.textColor.lowEmphasis,
      };
      break;

    case "body1":
      styles = {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
        lineHeight: theme.typography.body1.lineHeight,
        color: theme.palette.textColor.lowEmphasis,
      };
      break;
    case "body2":
      styles = {
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
        lineHeight: theme.typography.body2.lineHeight,
        color: theme.palette.textColor.main,
      };
      break;

    case "body3":
      styles = {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
        lineHeight: theme.typography.body1.lineHeight,
        color: theme.palette.textColor.highEmphasis,
      };
      break;

    case "body4":
      styles = {
        fontSize: theme.typography.body4.fontSize,
        fontWeight: theme.typography.body4.fontWeight,
        lineHeight: theme.typography.body4.lineHeight,
        color: theme.palette.textColor.lowEmphasis,
      };
      break;
    case "caption":
      styles = {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
        lineHeight: theme.typography.caption.lineHeight,
        color: theme.palette.textColor.main,
      };
      break;
    case "button":
      styles = {
        fontSize: theme.typography.button.fontSize,
        fontWeight: theme.typography.button.fontWeight,
        lineHeight: theme.typography.button.lineHeight,
        color: theme.palette.textColor.main,
      };
      break;
    default:
      styles = {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
        lineHeight: theme.typography.body1.lineHeight,
        color: theme.palette.textColor.highEmphasis,
      };
  }

  return <Typography style={styles}>{props.children}</Typography>;
}

export default TypographyComponent;
