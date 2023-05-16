{
  // set copyright year range in footer
  const currentDate = new Date(Date.now());
  const currentYear = currentDate.getUTCFullYear();

  const copyrightStartYearRange = 2022;

  const copyrightYearRange = `${copyrightStartYearRange} - ${currentYear}`;

  document.getElementById("footer-copyright-date-range").innerHTML = copyrightYearRange;
}