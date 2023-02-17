function sum(a, b) {
  let firstArg = +a;
  let secondArg = +b;
  if (firstArg !== firstArg || secondArg !== secondArg) {
    return;
  }
  let unroundedSum = firstArg + secondArg;
  return Math.round(unroundedSum * 1000) / 1000;
}