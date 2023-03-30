export type ColorStyle = "primary" | "secondary";

type Color = {
  [key in ColorStyle]: string;
};

type Palette = {
  button: {
    background: Color;
    hover: Color;
  };
};

export const palette: Palette = {
  button: {
    background: {
      primary: "#EB4853",
      secondary: "#333333",
    },
    hover: {
      primary: "#a5323a",
      secondary: "#242424",
    },
  },
};
