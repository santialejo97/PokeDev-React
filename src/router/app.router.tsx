import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { ListPoke } from "../project/pages/ListPoke";
import { FavoritePoke } from "@/project/pages/FavoritePoke";

const PokeLayout = lazy(() => import("../project/layout/PokeLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PokeLayout />,
    children: [
      {
        index: true,
        element: <ListPoke />,
      },
      {
        path: "favorites",
        element: <FavoritePoke />,
      },
    ],
  },
]);
