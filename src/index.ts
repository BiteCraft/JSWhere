import type { RuntimeEnvironment } from "./types";
import { detectors } from "./detectors";

export function detectEnvironment(): RuntimeEnvironment {
  for (const detector of detectors) {
    const env = detector();
    if (env) return env;
  }
  return "unknown";
}
