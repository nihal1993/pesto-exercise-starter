
function objectInvert(...args) {
  let result = new Object();
  for (let key of Object.keys(args[0])) {
  if(args[0][key] !== undefined)
    result[args[0][key]] = key;
  }
  return result;
}

export {
  objectInvert,
};

