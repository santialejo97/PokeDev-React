import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "../theme-provider";

const queryClient = new QueryClient();

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ThemeProvider defaultTheme={"system"} storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};
