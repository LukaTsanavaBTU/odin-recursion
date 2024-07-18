function fibs(n) {
  if (n === 1) {
    return [n - 1];
  } else if (n === 2) {
    return [n - 2, n - 1];
  }
  let currNumber = fibs(n - 1)[n - 2] + fibs(n - 2)[n - 3];
  return fibs(n - 1).concat(currNumber);
}
