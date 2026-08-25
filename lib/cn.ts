type ClassValue = string | number | boolean | null | undefined | ClassValue[];

/**
 * Lightweight className merger — no external deps.
 * Filters falsy values and flattens nested arrays.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
      continue;
    }
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    }
  }

  return out.join(" ");
}
