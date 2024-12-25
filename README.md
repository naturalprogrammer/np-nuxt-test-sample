# Demo application with demo test failing on Windows

This is a demo application with a demo test. When I run `npm run test` on Windows, I get the following output:

```bash
 FAIL  tests/app.test.ts [ tests/app.test.ts ]
TypeError: The URL must be of scheme file
 ❯ node_modules/@nuxt/test-utils/dirs.js:4:17

 ❯ node_modules/@nuxt/test-utils/dist/e2e.mjs:4:31
```
As a temporary fix, I'd update `node_modules/@nuxt/test-utils/dirs.js` as below:

```js
import { fileURLToPath } from 'node:url'
import { dirname } from 'path'

// Fix for Windows path resolution
export const distDir = dirname(fileURLToPath(import.meta.url)) + '/dist'
```

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
