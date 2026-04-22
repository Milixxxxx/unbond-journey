import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Legacy-Slug /willkommen → leitet permanent auf /einleitung um.
 * Bestehende externe Links (z. B. aus Mailings) bleiben funktional.
 */
export const Route = createFileRoute("/willkommen")({
  beforeLoad: () => {
    throw redirect({ to: "/einleitung", replace: true });
  },
});
