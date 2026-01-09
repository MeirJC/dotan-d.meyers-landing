/**
 * Reading Time Utility
 * Calculates estimated reading time for Hebrew content
 */

/** Average words per minute for Hebrew reading */
const WORDS_PER_MINUTE = 200;

/**
 * Calculate reading time from markdown/text content
 * @param content - The text content to analyze
 * @returns Object with reading time in minutes and word count
 */
export function getReadingTime(content: string): {
  minutes: number;
  words: number;
  text: string;
} {
  // Remove markdown syntax for accurate word count
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`[^`]*`/g, "") // Remove inline code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // Remove links, keep text
    .replace(/[#*_~>\-|]/g, "") // Remove markdown symbols
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();

  // Count words (works for Hebrew and English)
  const words = cleanContent.split(/\s+/).filter((word) => word.length > 0).length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    minutes,
    words,
    text: minutes === 1 ? "דקה אחת קריאה" : `${minutes} דקות קריאה`
  };
}

/**
 * Format reading time as ISO 8601 duration for structured data
 * @param minutes - Reading time in minutes
 * @returns ISO 8601 duration string (e.g., "PT5M")
 */
export function formatReadingTimeISO(minutes: number): string {
  return `PT${minutes}M`;
}
