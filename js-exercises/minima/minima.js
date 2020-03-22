function minima(n, arr) {
  let sortedarray = arr.sort((a, b) => a - b);
  sortedarray.length = n;
  return sortedarray;
}
export { minima };
