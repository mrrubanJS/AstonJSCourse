function getNumberRadix(number, radix) {
  let num = +number;
  let rad = +radix;

  if (num !== num || num <= 0 || rad !== rad || rad < 2 || rad > 16) {
    throw Error("Функция getNumberRadix была вызвана с некорректными параметрами");
  }
  return num.toString(rad);
}