export function markdownDateStringToDate(date: string) {
  const [day, month, year] = date.split("-");
  
  return new Date([year, month, day].join("-") + "T00:00:00.000Z");
}