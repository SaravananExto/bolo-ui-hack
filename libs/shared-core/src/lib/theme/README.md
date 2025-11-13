# Theme System

To add a new theme:

1. Create a new ThemeConfig in `tokens/typography.ts` with a unique name and CSS variable map.
2. Add it to the THEMES map in `ThemeService`.

To use ThemeService in a component:

- Inject ThemeService and call `applyTheme(name)` to switch themes.
- Use `[attr.data-theme]="themeService.currentThemeName()"` on your root element for scoped theming.
- Reference CSS variables in your SCSS for typography and backgrounds.
