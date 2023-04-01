export type ColorStyle = "primary" | "secondary";

type Color = {
  [key in ColorStyle]: string;
};

type Palette = {
  button: {
    background: Color;
    hover: Color;
    disabled: Color;
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
    disabled: {
      primary: "#742329",
      secondary: "#242424",
    },
  },
};
