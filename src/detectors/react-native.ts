import type { RuntimeEnvironment } from "../types";

export function detectReactNative(): RuntimeEnvironment | null {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return "react-native";
  }
  return null;
}