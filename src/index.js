import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Item from "./components/pokemon/item/item";
import ErrorPage from "./components/error-page/error-page";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as  itemLoader } from "./routers/item";
import { loader as  listLoader } from "./routers/list"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: listLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:pokemonId",
    element: <Item />,
    loader: itemLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
