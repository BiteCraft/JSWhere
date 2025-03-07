import { detectExpo } from "./expo";
import { detectReactNative } from "./react-native";
import { detectVite } from "./vite";
// import { detectNextJS } from "./nextjs";
// import { detectNestJS } from "./nestjs";
// import { detectBrowser } from "./browser";
// import { detectNode } from "./node";

export const detectors = [
  detectExpo,
  detectReactNative,
  detectVite,
//   detectNextJS,
//   detectNestJS,
//   detectBrowser,
//   detectNode
];