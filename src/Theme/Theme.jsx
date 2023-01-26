import {
  createTheme,
  ThemeProvider as Theme,
  CssBaseline,
} from "@mui/material";
import { useMemo } from "react";

export const ThemeProvider = ({ children }) => {
  const fontFamily = ["Source Sans Pro", "sans-serif"].join(",");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#000000",
          },
          secondary: {
            main: "#ffffff",
          },
          background: {
            default: "#ECEFF1",
          },
        },
        typography: {
          fontFamily,
          fontSize: 12,
          h1: {
            fontFamily,
            fontSize: 40,
          },
          h2: {
            fontFamily,
            fontSize: 32,
          },
          h3: {
            fontFamily,
            fontSize: 24,
          },
          h4: {
            fontFamily,
            fontSize: 20,
          },
          h5: {
            fontFamily,
            fontSize: 16,
          },
          h6: {
            fontFamily,
            fontSize: 12,
          },
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Theme theme={theme}>
      <CssBaseline />
      {children}
    </Theme>
  );
};
