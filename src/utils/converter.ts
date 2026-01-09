import {
  ALL_TO_CUNEIFORM,
  CUNEIFORM_TO_LATIN,
  CUNEIFORM_TO_ARABIC,
} from "@/constants/cuneiform";

/**
 * Convert text to cuneiform
 * @param text - Input text in Latin or Arabic
 * @returns Cuneiform text
 */
export function toCuneiform(text: string): string {
  return text
    .split("")
    .map((char) => {
      // Handle uppercase by converting to lowercase first
      const lowerChar = char.toLowerCase();
      return ALL_TO_CUNEIFORM[lowerChar] || ALL_TO_CUNEIFORM[char] || char;
    })
    .join("");
}

/**
 * Convert cuneiform back to Latin text
 * @param cuneiform - Cuneiform text
 * @param options - Conversion options
 * @returns Latin text
 */
export function fromCuneiformToLatin(
  cuneiform: string,
  options?: { uppercase?: boolean }
): string {
  const result = cuneiform
    .split("")
    .map((char) => CUNEIFORM_TO_LATIN[char] || char)
    .join("");

  return options?.uppercase ? result.toUpperCase() : result;
}

/**
 * Convert cuneiform back to Arabic text
 * @param cuneiform - Cuneiform text
 * @returns Arabic text
 */
export function fromCuneiformToArabic(cuneiform: string): string {
  return cuneiform
    .split("")
    .map((char) => CUNEIFORM_TO_ARABIC[char] || char)
    .join("");
}

/**
 * Auto-detect and convert cuneiform to the most likely original language
 * @param cuneiform - Cuneiform text
 * @returns Converted text
 */
export function fromCuneiform(cuneiform: string): string {
  // Try both conversions and return the one with more recognizable characters
  const latin = fromCuneiformToLatin(cuneiform);
  const arabic = fromCuneiformToArabic(cuneiform);

  // Simple heuristic: if Arabic conversion has more Arabic chars, use it
  const arabicPattern = /[\u0600-\u06FF]/;
  const hasArabic = arabicPattern.test(arabic);

  return hasArabic ? arabic : latin;
}
