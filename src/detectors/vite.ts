import type { RuntimeEnvironment } from "../types";

export function detectVite(): RuntimeEnvironment | null {
  // Verifica se estamos em um ambiente Node.js com Vite
  if (typeof process !== "undefined" && process.env.VITE) {
    return "vite";
  }

  // Verifica se estamos em um ambiente de navegador com Vite
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.MODE) {
    return "vite";
  }

  // Verifica se estamos em um ambiente de desenvolvimento Vite
  if (typeof window !== "undefined" && (window as any).__vite_plugin_react_preamble_installed__) {
    return "vite";
  }

  return null;
}