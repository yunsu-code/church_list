import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "@components/common/Header";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/index";

export let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Reset />
        <Header />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
