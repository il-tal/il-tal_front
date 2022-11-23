import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createGlobalStyle } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
        <ReactQueryDevtools />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
