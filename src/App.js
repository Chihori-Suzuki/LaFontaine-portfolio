import Layout from "./comps/Layout";

import { AuthProvider } from "./contexts/AuthContext";
import "./service/firebase";

import { I18nextProvider } from "react-i18next";
import i18n from "./contexts/i18n";

function App() {
  return (

    <I18nextProvider i18n={i18n}>
    <AuthProvider>
      <Layout />
    </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
