import type { RuntimeEnvironment } from "../types";

export function detectExpo(): RuntimeEnvironment | null {
  if (typeof process !== "undefined" && process.env.EXPO_VERSION) {
    return "expo";
  }

  if (typeof window !== "undefined" && (window as any).expo) {
    return "expo";
  }

  if (typeof navigator !== "undefined" && navigator.product === "ReactNative" && (global as any).Expo) {
    return "expo";
  }

  return null;
}