// All cuneiform characters
export const ALL_CUNEIFORM = [
  "𒀀",
  "𒁀",
  "𒆍",
  "𒁕",
  "𒂊",
  "𒉺",
  "𒄀",
  "𒄩",
  "𒄿",
  "𒅀",
  "𒆠",
  "𒇷",
  "𒈠",
  "𒈾",
  "𒀭",
  "𒆪",
  "𒊑",
  "𒊓",
  "𒋫",
  "𒌋",
  "𒉿",
  "𒄑",
  "𒍣",
  "𒋼",
  "𒄭",
  "𒆝",
  "𒊭",
  "𒑐",
  "𒁲",
  "𒋾",
  "𒍝",
  "𒀉",
  "𒐀",
  "𒐕",
  "𒐖",
  "𒐗",
  "𒐘",
  "𒐙",
  "𒐚",
  "𒐛",
  "𒐜",
  "𒐝",
  "𒑰",
  "𒑱",
  "𒑲",
  "𒑳",
  "𒑴",
  "𒒀",
  "𒒁",
  "𒒂",
  "𒒃",
  "𒒄",
  "𒒅",
  "𒒆",
  "𒒇",
  "𒒈",
  "𒒉",
  "𒒊",
  "𒒋",
  "𒒌",
  "𒒍",
  "𒒎",
  "𒒏",
  "𒒐",
];

// Latin alphabet to cuneiform mapping
export const LATIN_TO_CUNEIFORM: Record<string, string> = {
  // Lowercase
  a: "𒀀",
  b: "𒁀",
  c: "𒆍",
  d: "𒁕",
  e: "𒂊",
  f: "𒉺",
  g: "𒄀",
  h: "𒄩",
  i: "𒄿",
  j: "𒅀",
  k: "𒆠",
  l: "𒇷",
  m: "𒈠",
  n: "𒈾",
  o: "𒀭",
  p: "𒉺",
  q: "𒆪",
  r: "𒊑",
  s: "𒊓",
  t: "𒋫",
  u: "𒌋",
  v: "𒉿",
  w: "𒉿",
  x: "𒄑",
  y: "𒅀",
  z: "𒍣",
};

// Arabic alphabet to cuneiform mapping
export const ARABIC_TO_CUNEIFORM: Record<string, string> = {
  // Arabic letters
  ا: "𒀀", // alif
  أ: "𒀀", // alif with hamza above
  إ: "𒀀", // alif with hamza below
  آ: "𒀀", // alif with madda
  ب: "𒁀", // ba
  ت: "𒋫", // ta
  ث: "𒋼", // tha
  ج: "𒅀", // jeem
  ح: "𒄩", // ha
  خ: "𒄭", // kha
  د: "𒁕", // dal
  ذ: "𒆝", // thal
  ر: "𒊑", // ra
  ز: "𒍣", // zay
  س: "𒊓", // seen
  ش: "𒊭", // sheen
  ص: "𒑐", // sad
  ض: "𒁲", // dad
  ط: "𒋾", // ta
  ظ: "𒍝", // za
  ع: "𒂊", // ain
  غ: "𒄀", // ghain
  ف: "𒉺", // fa
  ق: "𒆪", // qaf
  ك: "𒆠", // kaf
  ل: "𒇷", // lam
  م: "𒈠", // meem
  ن: "𒈾", // noon
  ه: "𒄩", // ha
  ة: "𒋫", // ta marbuta
  و: "𒌋", // waw
  ؤ: "𒌋", // waw with hamza
  ي: "𒄿", // ya
  ى: "𒄿", // alif maksura
  ئ: "𒄿", // ya with hamza
  ء: "𒀉", // hamza
};

// Numbers to cuneiform mapping
export const NUMBERS_TO_CUNEIFORM: Record<string, string> = {
  "0": "𒐀",
  "1": "𒐕",
  "2": "𒐖",
  "3": "𒐗",
  "4": "𒐘",
  "5": "𒐙",
  "6": "𒐚",
  "7": "𒐛",
  "8": "𒐜",
  "9": "𒐝",
};

// Common punctuation and symbols
export const SYMBOLS_TO_CUNEIFORM: Record<string, string> = {
  " ": " ", // space remains space
  ".": "𒑰",
  ",": "𒑱",
  "!": "𒑲",
  "?": "𒑳",
  ":": "𒑴",
  "*": "𒒀",
  "+": "𒒁",
  "=": "𒒂",
  "<": "𒒃",
  ">": "𒒄",
  '"': "𒒅",
  "'": "𒒆",
  "`": "𒒇",
  "~": "𒒈",
  "|": "𒒉",
  _: "𒒊",
  "^": "𒒋",
  "%": "𒒌",
  $: "𒒍",
  "€": "𒒎",
  "£": "𒒏",
  "¥": "𒒐",
};

// Combined mapping for all characters
export const ALL_TO_CUNEIFORM: Record<string, string> = {
  ...LATIN_TO_CUNEIFORM,
  ...ARABIC_TO_CUNEIFORM,
  ...NUMBERS_TO_CUNEIFORM,
  ...SYMBOLS_TO_CUNEIFORM,
};

// Reverse mappings
export const CUNEIFORM_TO_LATIN: Record<string, string> = Object.fromEntries(
  Object.entries(LATIN_TO_CUNEIFORM).map(([key, value]) => [value, key])
);

export const CUNEIFORM_TO_ARABIC: Record<string, string> = Object.fromEntries(
  Object.entries(ARABIC_TO_CUNEIFORM)
    .filter(([, value]) => value !== "") // Filter out empty diacritics
    .map(([key, value]) => [value, key])
);
