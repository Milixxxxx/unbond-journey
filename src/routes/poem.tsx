import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * /poem → /einleitung (Marys Geschichte ist nun in die Einleitung integriert).
 */
export const Route = createFileRoute("/poem")({
  beforeLoad: () => {
    throw redirect({ to: "/einleitung", replace: true });
  },
});
