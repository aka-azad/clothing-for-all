import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthProvider from "./Components/Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={routes}
      ></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
