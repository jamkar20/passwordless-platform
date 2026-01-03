import type { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Dashboard, Devices, Login, Otp, Sessions } from "./pages";
import { Layout } from "./components/layout";

export const Router: FC = () =>
  useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/otp", element: <Otp /> },
    {
      path: "/app",
      element: <Layout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "devices", element: <Devices /> },
        { path: "sessions", element: <Sessions /> },
      ],
    },
  ]);
