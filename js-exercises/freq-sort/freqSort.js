function frequencySort(...args) {
  if (args[0].length === 0)
    throw "";

  let store = {};
  args[0].forEach(function (e, i, a) {
    store[e] = store[e] || 0;
    store[e] += 1;
  });
  return Object.keys(store).sort(function (a, b) { return store[b] - store[a] });
}

export {
  frequencySort,
};
