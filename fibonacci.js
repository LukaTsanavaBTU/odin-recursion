function fibsRec(n) {
  if (n === 1) {
    return [n - 1];
  } else if (n === 2) {
    return [n - 2, n - 1];
  }
  let currNumber = fibsRec(n - 1)[n - 2] + fibsRec(n - 2)[n - 3];
  return fibsRec(n - 1).concat(currNumber);
}

function fibs(n) {
  let starter = [0, 1];
  if (n < 3) {
    return starter.slice(0, n);
  }
  for (let i = 2; i < n; i++) {
    let newNum = starter[i - 2] + starter[i - 1];
    starter = starter.concat([newNum]);
  }
  return starter;
}
