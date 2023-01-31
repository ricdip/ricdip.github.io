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