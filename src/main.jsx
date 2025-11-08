import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Download from "./components/download/Download.jsx";
import PromptGenerateBoard from "./components/generateBoard/PromptGenerateBoard.jsx";
import Page from "./components/Page.jsx";
import { ErrorPage } from "./components/Error.jsx";
import { GenerateProvider } from "./provider/GenerateProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PromptGenerateBoard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "download",
        element: <Download />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GenerateProvider>
      <RouterProvider router={router} />
    </GenerateProvider>
  </StrictMode>
);
