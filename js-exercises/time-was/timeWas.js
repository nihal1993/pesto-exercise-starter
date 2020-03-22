function timeWas(millisec) {
  let current = Date.now();
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  if(millisec-current===0){
    return "just now";
  }

  function isMultiple(divident, divisor) {
    return (-1 * Math.floor(divident - current) % divisor == 0);
  }


  if (isMultiple(millisec, YEARS))
    return `${-1 * Math.floor(millisec - current) / YEARS} years ago`;
  else if (isMultiple(millisec, MONTHS))
    return `${-1 * Math.floor(millisec - current) / MONTHS} months ago`;
  else if (isMultiple(millisec, WEEKS))
    return `${-1 * Math.floor(millisec - current) / WEEKS} weeks ago`;
  else if (isMultiple(millisec, DAYS))
    return `${-1 * Math.floor(millisec - current) / DAYS} days ago`;
  else if (isMultiple(millisec, HOURS))
    return `${-1 * Math.floor(millisec - current) / HOURS} hours ago`;
  else if (isMultiple(millisec, MINUTES))
    return `${-1 * Math.floor(millisec - current) / MINUTES} minutes ago`;
  else if (isMultiple(millisec, SECONDS))
    return `${-1 * Math.floor(millisec - current) / SECONDS} seconds ago`;
  else
    return "just now";
}

export { timeWas };
