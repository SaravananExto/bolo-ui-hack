export function saveTheme(name: string) {
  try {
    localStorage.setItem('theme', name);
  } catch {
    // Ignore errors (e.g., localStorage not available)
  }
}

export function getSavedTheme(): string | null {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

export function applyCssVariables(
  vars: Record<string, string>,
  scope: HTMLElement | Document = document,
) {
  Object.entries(vars).forEach(([k, v]) => {
    (scope as HTMLElement).style.setProperty(k, v);
  });
}
