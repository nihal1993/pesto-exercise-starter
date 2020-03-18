
const arrayCubeRootToJson = arr => {
  let store = new Object();
  let str;

  if (Object.keys(arr).length === 0 || arr.filter(Boolean).length === 0) {
    throw "";
  }

  arr.forEach((num) => {
   
    if (num !== Infinity && isNaN(parseInt(num))) {
      throw "";

    } else {
      str = num.toString();
      if (!isNaN(parseInt(num))) {
        num = parseInt(num);
      }
      store[str] = Math.cbrt(num);
    }
  })

  return store;


};
//console.log(arrayCubeRootToJson([1, 2.12, 4.44, 'abc']));
export { arrayCubeRootToJson };
