import "./main.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Flowbite } from "flowbite-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { WagmiProvider } from "wagmi";

import FlowbiteTheme from "../flowbite.config";
import App from "./App";
import NotFound from "./NotFound";
import DarkThemeToggle from "./components/DarkThemeToggle";
import config from "./rpc";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Flowbite theme={{ ...FlowbiteTheme, dark: DarkThemeToggle.isDarkMode() }}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {/* @ts-ignore */}
          <ErrorBoundary FallbackComponent={NotFound}>
            <App />
          </ErrorBoundary>
        </QueryClientProvider>
      </WagmiProvider>
    </Flowbite>
  </React.StrictMode>,
);
