import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    font: {
      main: "#FF81A6",
      secondary: "#fff",
      black: "#3F3E3E",
    },
    background: {
      main: "#FFCFDB",
    },
    button: {
      main: "#FF7193",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Ruthie", "Montserrat"].join(","),
  },
});

export default theme;
