import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0ct0atalmviajiax.us.auth0.com"
      clientId="CjrAgYrARm2T9tLM0GmBUxaer6B5ENhg"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
