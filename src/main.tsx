import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import AppWithGlobalStyle from "./style.tsx";
("./style.ts");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithGlobalStyle darkTheme={true}>
      <RouterProvider router={router} />
    </AppWithGlobalStyle>
  </React.StrictMode>
);
