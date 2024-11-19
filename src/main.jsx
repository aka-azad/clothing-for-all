import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthProvider from "./Components/Provider/AuthProvider";
import ModalProvider from "./Components/Provider/ModalProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={routes}
        ></RouterProvider>
      </ModalProvider>
    </AuthProvider>
  </StrictMode>
);
