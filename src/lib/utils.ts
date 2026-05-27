/**
 * @file Shared UI utilities.
 * @description
 * 📖 Provides the `cn()` helper expected by shadcn-style components. This local
 * version keeps the static Astro phase dependency-light while still supporting
 * strings, arrays, and conditional object maps for class composition.
 *
 * @functions
 * - cn → Combines conditional class values into a stable className string.
 * @exports cn
 */

type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassArray = ClassValue[];
type ClassValue = string | number | boolean | null | undefined | ClassDictionary | ClassArray;

function appendClassValue(value: ClassValue, classes: string[]): void {
  if (!value) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    classes.push(String(value));
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => appendClassValue(item, classes));
    return;
  }

  if (typeof value === "object") {
    Object.entries(value).forEach(([className, enabled]) => {
      if (enabled) {
        classes.push(className);
      }
    });
  }
}

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  inputs.forEach((input) => appendClassValue(input, classes));

  return classes.join(" ");
}
