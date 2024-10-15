import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { SignUp } from "./pages/sign-up/SignUp";
import App from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
