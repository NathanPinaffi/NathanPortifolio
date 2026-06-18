import { QueryClient } from "@tanstack/react-query";
import { createRouter as createStartRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

export function getRouter() {
  return createStartRouter({
    routeTree,
    context: {
      queryClient,
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
}