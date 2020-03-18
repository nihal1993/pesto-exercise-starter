function aperture(n, arr) {
  let store = [], index = [];
  if (n > arr.length) { return store; }
  for (let i = 0; i < arr.length; i++) {
    index.push(arr[i]);
    if (index.length === n) {
      store.push(index);
      index = [];
      i = i - (n - 1);
    }

  }
  return store;
}

export { aperture };
