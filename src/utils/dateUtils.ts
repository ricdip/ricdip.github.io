/**
 * Function that creates a Date object from a formatted date string
 * 
 * @param date Date string in dd-mm-YYYY format
 * @returns Date object created from date parameter
 */
export function markdownDateStringToDate(date: string): Date {
  const [day, month, year] = date.split("-");
  
  return new Date([year, month, day].join("-") + "T00:00:00.000Z");
}

/**
 * Function that returns a formatted date string according to a given locale
 * 
 * @param date Date string in dd-mm-YYYY format
 * @param locale Locale string
 * @returns Formatted date string
 */
export function formatMarkdownDateStringAccordingToLocale(date: string, locale: string): string {
  const dateOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
  const parsedDate = markdownDateStringToDate(date);

  return parsedDate.toLocaleDateString(locale.replace("_", "-"), dateOptions);
}