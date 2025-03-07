```                                                 
     _ ____  __        ___                   
    | / ___| \ \      / / |__   ___ _ __ ___ 
 _  | \___ \  \ \ /\ / /| '_ \ / _ \ '__/ _ \
| |_| |___) |  \ V  V / | | | |  __/ | |  __/
 \___/|____/    \_/\_/  |_| |_|\___|_|  \___|
```

# JSWhere 🔍

> A lightweight and precise JavaScript library that detects the exact runtime environment of your application, including React Native, Expo, Vite, Next.js, NestJS, and more. 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)

## Table of Contents

• [Overview](#overview-)  
• [Features](#features-)  
• [Installation](#installation-)  
• [Usage](#usage-)  
• [Supported Environments](#supported-environments-)
• [Development](#development-) 
• [API Reference](#api-reference-)  
• [Contributing](#contributing-)  
• [License](#license-)  

## Overview 🎯

Runtime Environment Detector is a powerful utility that helps you identify the current JavaScript runtime environment your code is executing in. Whether you're running in Vite, React Native, Expo, or other environments, this library provides accurate detection.

## Features ✨

- 🔍 Accurate runtime environment detection
- 🎯 Type-safe implementation
- 🚀 Zero dependencies
- 💨 Lightweight and fast
- 🔌 Easy integration
- 📦 Tree-shakeable

## Installation 📦

```bash
# Using npm
npm install @bitecraft/jswhere

# Using Bun
bun install @bitecraft/jswhere

# Using pnpm
pnpm install @bitecraft/jswhere

# Using yarn
yarn add @bitecraft/jswhere
```

## Usage 🚀

```ts
import { detectEnvironment } from '@bitecraft/jswhere';

const environment = detectEnvironment();
console.log(`Current runtime environment: ${environment}`);
```

## Supported Environments ✅

Current implementation status:

- [x] Vite
- [x] React Native
- [x] Expo
- [ ] Next.js (Coming soon)
- [ ] NestJS (Coming soon)
- [ ] Browser (Coming soon)
- [ ] Node.js (Coming soon)
- [ ] Electron (Coming soon)
- [ ] Remix (Coming soon)
- [ ] Nuxt (Coming soon)
- [ ] SvelteKit (Coming soon)
- [ ] Deno (Coming soon)
- [ ] Bun (Coming soon)

## Development 🛠️

### Prerequisites

- Node.js >= 14.0.0
- TypeScript/Javascript knowledge

## Setting Up Development Environment

1. Clone the repository:

```bash
git clone https://github.com/BiteCraft/jswhere.git
cd jswhere
```

2. Install dependencies:

```bash
npm install
```

3. Start development

```bash
npm run dev
```

### Building the Project

```bash
npm run build
```

## API Reference 📚

### Main Function

```ts
function detectEnvironment(): RuntimeEnvironment
```

Returns one of the following types:

```ts
type RuntimeEnvironment =
  | "expo"
  | "react-native"
  | "vite"
  | "nextjs"
  | "nestjs"
  | "browser"
  | "node"
  | "electron"
  | "remix"
  | "nuxt"
  | "sveltekit"
  | "deno"
  | "bun"
  | "unknown";
```

## Contributing 🤝

This project is currently a work in progress, and we welcome contributions! If you'd like to help, here are some ways you can contribute:

1. Implement missing environment detectors
2. Improve existing detectors
3. Add tests
4. Improve documentation

To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewDetector`)
3. Commit your changes(`git commit -m 'feat: add new environment detector'`)
4. Push to the branch (`git push origin feature/NewDetector`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

____

Made with ❤️ using TypeScript
