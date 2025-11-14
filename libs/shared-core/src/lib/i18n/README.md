# 🈳 Bolo i18n System

## Overview

This folder provides a **signal-based, enterprise-ready internationalization (i18n) system** for Angular 20+ apps.  
It supports dynamic locale switching, localStorage persistence, translation pipes, and mock API integration for rapid development and testing.

---

## Key Features

- **Signal-driven translation service** for reactive UI updates
- **Locale persistence** via localStorage
- **Translation pipe** (`| translate`) for templates
- **Mock API** for local development and testing
- **Extensible locale structure** for easy addition of new languages
- **Safe, Map-based caching** for performance and security

---

## Folder Structure

```
libs/shared-core/src/lib/i18n/
├── locales/           # JSON translation files per language
├── mocks/             # Mock API for translations
├── pipes/             # TranslatePipe for templates
├── services/          # TranslationService (signal-based)
├── tokens/            # DI tokens for locale
├── utils/             # Helper functions (key formatting, fallback)
├── index.ts           # Barrel exports
└── README.md          # This file
```

---

## Usage

### 1. Add a New Locale

- Create a new JSON file in `locales/` (e.g., `fr.json` for French).
- Export it in `locales/index.ts`:
  ```typescript
  export { default as fr } from './fr.json';
  ```
- Add translations as flat key-value pairs:
  ```json
  {
    "hero.title": "Bienvenue à Bolo",
    "hero.button.en": "Anglais"
  }
  ```

### 2. Use the Translate Pipe in Templates

```html
<h1>{{ 'hero.title' | translate }}</h1>
```

### 3. Switch Locale at Runtime

```typescript
const translationService = inject(TranslationService);
await translationService.switchLocale('fr');
```

### 4. Persist Locale

- Locale is automatically persisted in `localStorage` and restored on reload.

### 5. Add Fallbacks

- Use the pipe’s fallback argument:
  ```html
  {{ 'missing.key' | translate:'Default Value' }}
  ```

---

## Extending

- Add new locales by updating `locales/` and `locales/index.ts`.
- Add new tokens or helpers in `tokens/` and `utils/` as needed.
- Integrate with real APIs by replacing `MockTranslationApiService`.

---

## Example Integration

```typescript
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services/translation.service';
```

---

## Contributing

- Keep locale keys consistent and flat for best performance.
- Use signals and Angular 20 best practices for reactive updates.
- Ensure new locales are exported in the barrel file.

---

##
