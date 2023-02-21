const errorMessage = 'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел';

function isNumber(num) {
  return typeof num === 'number' && !Number.isNaN(num);
}

function getUniqArray(arr) {
  if (arr.some((element) => !isNumber(element))) {
    throw Error(errorMessage);
  }

  const uniqArr = [];
  arr.forEach((element) => {
    if (!uniqArr.includes(element)) {
      uniqArr.push(element);
    }
  });

  return uniqArr;
}