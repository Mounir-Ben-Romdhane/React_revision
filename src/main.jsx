import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Import your main App component
import "./index.css"; // Assuming you have some global styles
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store ,{persistor} from "./redux/store.jsx";
import NavigationBar from "./CompetitionWorld/NavigationBar.jsx";



const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <NavigationBar />
          <App />
        </BrowserRouter>
        </PersistGate>
        </Provider>
  </React.StrictMode>
);
