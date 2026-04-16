# This is a development package

For the full-blown package, please follow:    
https://github.com/patrikx3/redis-ui  
https://www.npmjs.com/package/p3x-redis-ui   
https://corifeus.com/redis-ui  

[//]: #@corifeus-header

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui-material.svg)](https://www.npmjs.com/package/p3x-redis-ui-material)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime ratio (90 days)](https://network.corifeus.com/public/api/uptime-shield/31ad7a5c194347c33e5445dbaf8.svg)](https://network.corifeus.com/status/31ad7a5c194347c33e5445dbaf8)



---
# 💿 P3X Redis UI triple frontend — Angular + React/MUI + Vue/Vuetify with 54 languages, 7 themes, Socket.IO, desktop notifications, and full feature parity v2026.4.441


  
🌌 **Bugs are evident™ - MATRIX️**  
🚧 **This project is under active development!**  
📢 **We welcome your feedback and contributions.**  
    



### NodeJS LTS is supported

### 🛠️ Built on NodeJs version

```txt
v24.14.1
```




# 📦 Built on Angular

```text
21.2.8
```



# 📝 Description

                        
[//]: #@corifeus-header:end


The `p3x-redis-ui-material` package is the **triple frontend** for [p3x-redis-ui](https://github.com/patrikx3/redis-ui). It provides three fully independent, feature-parity GUIs that connect to `p3x-redis-ui-server` via Socket.IO:

### Angular Frontend (`/ng/`)
- **Angular** (latest LTS) with standalone components and Angular Signals
- **Angular Material** component library
- **Webpack** bundler with AOT compilation via `@ngtools/webpack`
- **CDK virtual scrolling** for tree view performance

### React Frontend (`/react/`)
- **React** (latest LTS) with functional components and hooks
- **MUI (Material UI)** component library matching Angular Material's look and feel
- **Vite** bundler — instant dev server startup and fast production builds
- **Zustand** lightweight state management replacing Angular services
- **@tanstack/react-virtual** for virtual scrolling

### Vue Frontend (`/vue/`)

- **Vue 3** with Composition API and `<script setup>`
- **Vuetify 3** component library matching Material Design
- **Vite** bundler — instant dev server startup and fast production builds
- **Pinia** state management replacing Angular services

### Shared Across All Three

- **54 languages** with auto browser/system locale detection and "Auto (system)" option
- **7 themes** — Light, Enterprise, Redis (light) + Dark, Dark Neu, Darko Bluo, Matrix (dark) — with auto system preference detection
- **Same Socket.IO protocol** — identical backend API
- **Same translation system** — single source of truth in `src/strings/`
- **CodeMirror** JSON editor with GitHub dark/light themes
- **uPlot** lightweight canvas charts for monitoring dashboards
- **Web Worker tree building** — key sorting off the main thread
- **Desktop notifications** — Electron native + Web Notification API
- **Playwright E2E tests** — run against all three frontends in parallel
- **Live switching** — toggle between Angular, React, and Vue in Settings

### ACL Management (Redis 6.0+)

The first Redis GUI with a **visual ACL (Access Control List) editor**. No other Redis desktop tool provides this — not even RedisInsight.

- **Auto-discovery** — ACL section appears in Settings only when connected to Redis 6.0+, auto-loads users
- **Visual user list** — hoverable rows showing username, current user badge, disabled warning icon
- **Chip-based permission editor** — commands, key patterns, and pub/sub channels as removable chips instead of raw text
  - Color-coded command chips: blue for allow (`+@all`), red for deny (`-@dangerous`)
  - Type and press Enter/Space/Comma to add chips
- **Structured form** — enable/disable toggle, no-password checkbox, password field, separate fields for commands, keys, and channels
- **Full CRUD** — create, edit, and delete ACL users with proper confirmation dialogs
- **Safe editing** — resets permissions before applying changes so removed chips actually take effect
- **Cluster-aware** — ACL SETUSER/DELUSER broadcast to all master nodes
- **Readonly mode** — edit/delete/create buttons hidden when connection is readonly
- **Guards** — cannot delete the `default` user or the currently connected user

### Project Structure

```
src/
├── ng/                     # Angular frontend
│   ├── pages/              # Lazy-loaded page components
│   ├── dialogs/            # Modal dialogs
│   ├── components/         # Reusable UI components
│   ├── services/           # Angular services (signals-based state)
│   └── layout/             # App shell, header, footer
├── react/                  # React frontend
│   ├── pages/              # Page components (console, database, monitoring, search, settings, info)
│   ├── dialogs/            # Modal dialogs
│   ├── components/         # Reusable UI components
│   ├── stores/             # Zustand stores (state management)
│   ├── layout/             # App shell, header, footer
│   ├── themes/             # MUI theme definitions
│   ├── vite.config.ts      # Vite configuration
│   └── index.html          # React entry HTML
├── vue/                    # Vue frontend
│   ├── pages/              # Page components
│   ├── dialogs/            # Modal dialogs
│   ├── components/         # Reusable UI components
│   ├── stores/             # Pinia stores (state management)
│   ├── layout/             # App shell, header, footer
│   ├── themes/             # Vuetify theme definitions
│   ├── vite.config.ts      # Vite configuration
│   └── index.html          # Vue entry HTML
├── core/                   # Shared utilities (detect-language, translation-loader)
├── strings/                # 54 language translation files
│   ├── en/strings.js       # English (primary)
│   ├── de/strings.js       # German
│   └── .../strings.js      # 52 more languages
├── scss/                   # Shared theme CSS variables (7 themes)
├── public/                 # Static assets (images, icons)
├── builder/                # Webpack config for Angular
│   └── webpack.config.js
└── tests/                  # Playwright E2E tests
    ├── redis-ui.spec.js    # Shared test spec (runs against both GUIs)
    └── run-e2e.sh          # Test runner script
```

## NPM Scripts

| Script | Description |
|--------|-------------|
| `yarn run dev` | Start Angular dev server (Webpack, port 8080) |
| `yarn run dev-react` | Start React dev server (Vite, port 8082) |
| `yarn run dev-vue` | Start Vue dev server (Vite) |
| `yarn run build` | Production build Angular → `dist/` |
| `yarn run build-react` | Production build React → `dist-react/` |
| `yarn run build-vue` | Production build Vue |
| `yarn run stats` | Angular bundle analysis with `webpack-bundle-analyzer` |
| `yarn run test:e2e` | Run Playwright E2E tests (Angular + React + Vue) |
| `yarn run test:e2e:gui` | Run E2E tests with Playwright UI |

## Development

For file names do not use camelCase, but use kebab-case. Folder should be named as kebab-case as well. As you can see, all code filenames are using it like that, please do not change that.
Please apply the `.editorconfig` settings in your IDE.

### Prerequisites

Requires a running `p3x-redis-ui-server` backend (default port 7843). Override with `P3XR_API_PORT`:

```bash
P3XR_API_PORT=7844 yarn run dev-react
```

### Angular development

```bash
yarn install
yarn run dev
```

- Dev server: http://localhost:8080/ng/
- Webpack proxies Socket.IO to backend on port 7843
- Hot module reload enabled
- CSP headers configured for development

### React development

```bash
yarn install
yarn run dev-react
```

- Dev server: http://localhost:8082/react/
- Vite proxies Socket.IO to backend on port 7843
- Instant HMR via Vite's native ESM
- CJS translation files auto-transformed to ESM via custom plugin

### Vue development

```bash
yarn install
yarn run dev-vue
```

- Vite proxies Socket.IO to backend on port 7843
- Instant HMR via Vite's native ESM

### Running all three simultaneously

```bash
# Terminal 1: Angular
yarn run dev

# Terminal 2: React  
yarn run dev-react

# Terminal 3: Vue
yarn run dev-vue

# Terminal 4: Backend
cd ../redis-ui-server && yarn run dev
```

## Key Dependencies

All dependencies track the latest LTS versions and are regularly upgraded.

### Angular (devDependencies — bundled at build time)
| Package | Purpose |
|---------|---------|
| `@angular/core` | Framework |
| `@angular/material` | UI component library |
| `@angular/cdk` | Virtual scrolling, drag-drop |
| `@ngtools/webpack` | AOT compilation |
| `webpack` | Bundler |
| `typescript` | Type system |

### React (dependencies — shipped in npm package)
| Package | Purpose |
|---------|---------|
| `react` | Framework |
| `@mui/material` | UI component library |
| `zustand` | State management |
| `@tanstack/react-virtual` | Virtual scrolling |
| `react-router-dom` | Client-side routing |
| `vite` | Bundler (devDependency) |

### Vue (dependencies — shipped in npm package)
| Package | Purpose |
|---------|---------|
| `vue` | Framework |
| `vuetify` | UI component library |
| `vue-router` | Client-side routing |
| `pinia` | State management |
| `@tanstack/vue-virtual` | Virtual scrolling |
| `vuedraggable` | Drag-and-drop |
| `vite` | Bundler (devDependency) |

### Shared
| Package | Purpose |
|---------|---------|
| `socket.io-client` | Real-time communication with backend |
| `codemirror` + `@codemirror/*` | JSON editor |
| `uplot` | Lightweight canvas charts (monitoring) |
| `jspdf` | PDF export |
| `jszip` | ZIP export (memory analysis) |
| `@dnd-kit/*` | Drag-and-drop (connection groups) |
| `lodash` | Utility functions (merge for i18n) |

## E2E Testing

Playwright tests run against all three frontends in parallel using a shared test spec:

```bash
# Run all tests (Angular + React + Vue)
yarn run test:e2e

# Run with Playwright UI
yarn run test:e2e:gui
```

Tests cover: connect, disconnect, key operations, search, settings, monitoring, and GUI switching.


[//]: #@corifeus-footer

---

## 🚀 Quick and Affordable Web Development Services

If you want to quickly and affordably develop your next digital project, visit [corifeus.eu](https://corifeus.eu) for expert solutions tailored to your needs.

---

## 🌐 Powerful Online Networking Tool  

Discover the powerful and free online networking tool at [network.corifeus.com](https://network.corifeus.com).  

**🆓 Free**  
Designed for professionals and enthusiasts, this tool provides essential features for network analysis, troubleshooting, and management.  
Additionally, it offers tools for:  
- 📡 Monitoring TCP, HTTP, and Ping to ensure optimal network performance and reliability.  
- 📊 Status page management to track uptime, performance, and incidents in real time with customizable dashboards.  

All these features are completely free to use.  

---

## ❤️ Support Our Open-Source Project  
If you appreciate our work, consider ⭐ starring this repository or 💰 making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.eu](https://corifeus.eu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-REDIS-UI-MATERIAL**](https://corifeus.com/redis-ui-material) Build v2026.4.441

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui-material.svg)](https://www.npmjs.com/package/p3x-redis-ui-material)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
