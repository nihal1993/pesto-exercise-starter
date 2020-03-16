const parseMs = ms => {
  let parseMsObj = {
    'days': parseInt(ms/(24*3600000)),
    'hours': parseInt(ms/3600000),
    'minutes': parseInt(ms/60000),
    'seconds': parseInt(ms/1000),
    'milliseconds': parseInt(ms),
    'microseconds': 0,
    'nanoseconds': 0

  };
  return parseMsObj;
};

export { parseMs };
