/// <reference types="node" />

// Para process.env (Node.js)
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    EXPO_VERSION?: string;
  }
}

// Para import.meta.env (Vite, ES Modules)
interface ImportMeta {
  env: {
    [key: string]: string | undefined;
  };
}

// Para navigator (React Native/Expo)
interface Navigator {
  product: string;
}

// Para global (Expo)
interface Window {
  expo?: any;
}

interface Global {
  Expo?: any;
}
  