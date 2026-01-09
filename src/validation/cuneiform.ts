import { z } from "zod";

export const cuneiformSchema = z.string().transform((val) => {
  // Remove all characters except Arabic, English letters, and numbers
  // Arabic: \u0600-\u06FF (Arabic block)
  // English: a-zA-Z
  // Numbers: 0-9
  // Also includes Arabic digits: \u0660-\u0669
  return val.replace(/[^\u0600-\u06FF\u0660-\u0669a-zA-Z0-9\s]/g, "");
});

/**
 * Sanitizes cuneiform text by removing symbols and keeping only:
 * - Arabic characters
 * - English letters
 * - Numbers (both Arabic and English)
 * - Whitespace
 */
export const sanitizeCuneiformText = (text: string): string => {
  return text.replace(/[^\u0600-\u06FF\u0660-\u0669a-zA-Z0-9\s]/g, "");
};
