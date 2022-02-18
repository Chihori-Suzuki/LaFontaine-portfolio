import Layout from "./components/Layout";

import { AuthProvider } from "./contexts/AuthContext";
import "./service/firebase";

import { I18nextProvider } from "react-i18next";
import i18n from "./contexts/i18n";
import { ThemeProvider } from "@material-ui/core";
import theme from "./assets/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
