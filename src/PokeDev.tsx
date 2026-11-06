import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "./components";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const PokeDev = () => {
  return (
    <Provider>
      <RouterProvider router={appRouter}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
};
