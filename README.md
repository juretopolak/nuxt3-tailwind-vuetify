## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npx nuxt dev
```

## Error

Updating Nuxt 3.0.0 to 3.1.2 is causing error in the project:

```bash
✘ [ERROR] No loader is configured for ".node" files: node_modules/fsevents/fsevents.node

    node_modules/fsevents/fsevents.js:13:23:
      13 │ const Native = require("./fsevents.node");
```