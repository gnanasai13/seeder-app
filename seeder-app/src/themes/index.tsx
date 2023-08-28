
import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption: React.CSSProperties;
    button: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption: React.CSSProperties;
    button: React.CSSProperties;
  }

  interface Palette {
    structural: Palette["primary"];
    borders: Palette["primary"];
    icon: Palette["primary"];
    textColor: Palette["primary"];
    primaryColor: Palette["primary"];
  }

  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    borders?: PaletteOptions["primary"];
    icon?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
    primaryColor?: PaletteOptions["primary"];
    greyColor?: PaletteOptions["primary"];
  }

  interface Color {
    white?: string;
    purple?: string;
    grey?: string;
    lowEmphasis?: string;
    mediumEmphasis?: string;
    highEmphasis?: string;
    elevation0?: string;
    elevation1?: string;
    elevation2?: string;
    primary400?: string;
    primary500?: string;
    primary600?: string;
  }

  interface PaletteColor extends Color {}

  interface SimplePaletteColorOptions extends Color {}
}



export const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  typography: {
    fontFamily: [
      'Questrial',
      'sans-serif',
    ].join(','),
    h1: {
      fontStyle:"normal",
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "42px",

    },
    h2: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "29px",
    },  

    h3: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
    },

    body1: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "22px",
    },

    body2: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "17px",
    },

    body3: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "22px",
    },
    body4: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
    },

    caption: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "15px",
    },

    button: {
      fontFamily: "Gilroy",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
    },
  },

  palette: {
    primaryColor: {
      main: "#FFFFFF",
      white: "#E8E8E9",
      primary400: "#B4A9FF",
      primary500: "#6C5DD3",
      primary600: "#393552",
    },

    structural: {
      main: "#FFFFFF",
      elevation0: "#19181C",
      elevation1: "#201F24",
      elevation2: "#2D2D30",
    },

    textColor: {
      main: "#E9E8E9",
      lowEmphasis: "#A5A5A6",
      mediumEmphasis: "#C9C8CC",
      highEmphasis: "#E8E7F0",
    },

    greyColor: {
      main: "#FFFFFF",
      grey: "#262529",
    },

    borders: {
      main: "#FFFFFF",
      highEmphasis: "#413F4D",
      lowEmphasis: "#28272B",
    },

    icon: {
      main: "#FFFFFF",
      highEmphasis: "#D4D2DE",
      lowEmphasis: "#727080",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
      }
    }
  }
});
