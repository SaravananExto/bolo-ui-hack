### **Modern Nx-Powered, Domain-Driven Angular 20 Frontend Platform**

This repository represents an enterprise-grade Angular 20 + Nx workspace engineered for **scalability**, **security**, **performance**, and **modular domain separation**.
The architecture enforces:

✔ Domain-driven folder boundaries
✔ Shared-core design system
✔ Centralized i18n + theming framework
✔ Component-driven UI library (libs/ui)
✔ Strong ESLint security posture (XSS, sanitization, import rules)
✔ Future-proof multi-tenant theming and localization support

---

# **📁 Project Structure Overview**

```
.
├── apps
│   ├── web
│   │   ├── public
│   │   └── src
│   │       ├── app
│   │       │   └── layout
│   │       └── assets
│   │           ├── icons
│   │           └── images
│   └── web-e2e
│       └── src
└── libs
    ├── common
    │   └── src
    ├── shared-core
    │   └── src/lib
    │       ├── i18n
    │       └── theme
    └── ui
        └── src/lib
            ├── components
            ├── elements
            └── primeng
```

---

# **🏛 Architecture Philosophy**

This workspace follows **three-layered domain separation**, aligned with _Enterprise Angular Architecture_:

| Layer           | Purpose                                                            | Allowed To Depend On      |
| --------------- | ------------------------------------------------------------------ | ------------------------- |
| **common**      | Environment-agnostic utilities, base classes, models, pure helpers | none                      |
| **shared-core** | App-wide reusable services, tokens, directives, i18n, theme engine | common                    |
| **ui**          | Reusable component library (smart/dumb components)                 | shared-core + common      |
| **apps/**       | Application orchestration, routing, bootstrapping                  | ui + shared-core + common |

This ensures:

- High cohesion
- Zero circular dependencies
- Predictable dependency graph
- Enforced module boundaries via ESLint

---

# **🧩 Layer-by-Layer Breakdown**

---

# **📦 1. `/apps` — Application Shells**

## **`apps/web`**

The main Angular 20 application. Responsibilities:

### **✔ App bootstrap & routing**

- Root router configuration
- Global layout shell
- Page-level modules

### **✔ Static Assets**

```
apps/web/src/assets/
  ├── icons/     → SVG/Icon sprite sheets
  └── images/    → Raster graphics
```

### **✔ public/**

Static files served without bundling (favicons, robots.txt, manifest).

---

## **`apps/web-e2e`**

Contains Cypress/Playwright end-to-end tests.

Responsible for:

- E2E integration tests
- Authentication flows
- Cross-component behavior validation
- Accessibility scans

---

# **📚 2. `/libs/common` — Foundation Layer**

The **most primitive & platform-agnostic layer**.

### **Used for:**

- Type models
- Validators
- Formatting helpers
- Constants
- Pure TS utilities

### **Key Principle**

❗**No Angular injection, no services, no DI, no component-level logic.**

This ensures:

- Reusability across any environment (Node, Angular, E2E)
- Stable foundation for all upper layers.

---

# **🧠 3. `/libs/shared-core` — Application Brain**

This is the **enterprise shared kernel** of the system.

Contains the _core runtime constructs_ of the application:

```
libs/shared-core/src/lib/
  ├── i18n/
  └── theme/
```

---

## **🌍 i18n (Localization Engine)**

```
i18n/
├── locales/    → JSON dictionaries
├── mocks/      → Test fixtures
├── pipes/      → translate pipe, locale-formatting
├── services/   → TranslateService, LocaleStore
├── tokens/     → LOCALE_TOKEN, DEFAULT_LOCALE
└── utils/      → safelyGet, i18n key resolver
```

### **Responsibilities**

- Language switching
- Scoped translations
- Locale persistence
- Text sanitization
- Internationalization helpers

---

## **🎨 theme (Dynamic Multi-Tenant Theme System)**

Enterprise-grade theming framework aligned with **design tokens architecture**.

```
theme/
├── services/   → ThemeService (switch, persist, observe)
├── tokens/     → THEME_CONFIG, ACTIVE_THEME
├── styles/     → _variables.scss, _mixins.scss, theme.scss
└── utils/      → theme.helper.ts (DOM handling, CSS vars)
```

### **Supports**

- Multi-brand themes: QUANTUM / GRAPHITE / EXOSTEEL / JADEUS / ONYX
- Dynamic runtime theme switching
- CSS custom properties
- Scoped component theming
- Theme persistence via localStorage

---

# **🎨 4. `/libs/ui` — Component Design System**

A complete **UI component library** available to all apps.

```
ui/src/lib/
  ├── components/
  ├── elements/
  └── primeng/
```

---

## **components/**

Fully standalone Angular components:

- chat-window
- chat-window-content
- chat-window-greeting
- chat-window-search
- hero-banner
- login
- not-found
- primary-sidebar
- secondary-sidebar
- reset-password

### **Responsibilities**

- Pure UI + business logic
- Theme-aware
- i18n-enabled
- Standalone Angular 20 components
- 100% reusable across applications

---

## **elements/**

Low-level atomic elements (e.g., buttons, inputs, labels).

---

## **primeng/**

PrimeNG wrapper components to maintain:

- Consistent theme bindings
- Unified design system
- Corporate-grade look & feel

---

# **🔐 Security-Driven ESLint Standards**

### **Plugins Used**

✔ `eslint-plugin-security`
✔ `eslint-plugin-no-unsanitized`
✔ `eslint-plugin-xss`
✔ `@angular-eslint/*`
✔ `eslint-plugin-import`
✔ `@nx/enforce-module-boundaries`

---

## **Key Security Rules**

### **XSS Protection**

- `no-unsanitized/method`
- `no-unsanitized/property`
- `xss/* rules`
- Strict contextual escaping for DOM manipulations

### **Angular Safety**

- No direct DOM manipulation
- No input renaming
- No empty lifecycle methods
- No native output names
- No lifecycle conflicts

### **Module Boundary Enforcement**

Prevents:

- Circular dependencies
- Feature-to-feature imports
- Cross-layer violations

---

# **📏 Coding Standards & Best Practices**

### **✔ Angular 20 Recommended Practices**

- Prefer standalone components
- Use Signals for reactive state
- DI via `inject()` instead of constructor
- Strict typing everywhere
- Avoid deep nesting & over-engineering

---

### **✔ Folder & File Naming**

- kebab-case for files
- camelCase for variables
- PascalCase for classes

---

### **✔ Component Architecture**

- Inputs must not be renamed
- Outputs must not use prefix `on`
- Use `ChangeDetectionStrategy.OnPush`
- Export UI primitives via `ui/index.ts`

---

### **✔ Security First**

- Sanitize all HTML
- Avoid dynamic code execution
- Prohibit unsafe DOM APIs
- Strict CSP-friendly coding

---

### **✔ Performance Optimization**

- Lazy load heavy routes
- Lazy import PrimeNG modules
- Use SCSS mixins & variables
- Preload critical assets

---

# **🔄 CI/CD & DevOps Alignment**

The project is structured to support:

- Nx affected-based builds
- Strict linting gates
- Automated dependency graph checks
- E2E gates for critical flows
- Production-ready build optimization

---

# **🌐 Theming + i18n Interconnectivity**

Both systems integrate like this:

```
theme.service → inject(ACTIVE_THEME) → updates CSS vars
i18n.service   → inject(LOCALE_TOKEN) → loads language pack
ui components  → subscribe to theme + locale signals
```

This ensures:

- Instance-level reactivity
- Multi-tenant readiness
- Real-time preview support (hero-banner)

---

# **🧭 Summary**

This repository is designed for **high-scale enterprise applications** needing:

✔ Multi-tenant theming
✔ Advanced i18n
✔ Modular UI library
✔ Secure coding practices
✔ Highly maintainable architecture
✔ Angular 20 + Nx best practices baked in

It provides a strong foundation for:

- Faster development cycles
- Secure deployments
- Predictable scaling
- Team collaboration
- Enterprise governance
