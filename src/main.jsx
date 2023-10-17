import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddCoffee from "./components/addCoffee.jsx";
import UpdateCoffee from "./components/updateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/user")
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
