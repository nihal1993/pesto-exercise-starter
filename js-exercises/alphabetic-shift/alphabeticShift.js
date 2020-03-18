const alphabeticShift = input => {
  let store = [];
  input.split('').forEach(element => {
      store.push(String.fromCharCode(element.charCodeAt(0)+1))
  });
  return store.join('');
};
export { alphabeticShift };
