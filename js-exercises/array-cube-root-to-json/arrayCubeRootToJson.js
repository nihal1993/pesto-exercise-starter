
const arrayCubeRootToJson = arr => {
  let store = new Object();
  let str;

  if (Object.keys(arr).length === 0 || arr.filter(Boolean).length === 0) {
    throw "Parameter is not a number!";
  }
  for (let num of arr) {
    if (typeof (num) !== Number) {
      throw "Parameter is not a number!";
      console.log('hi');
    } else {
      str = num.toString();
      store[str] = Math.cbrt(num);
    }
  }

  return JSON.stringify(store);


};

export { arrayCubeRootToJson };
