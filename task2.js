const errorMessage = {
  invalidArr: 'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения',
  invalidFrom: 'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом',
  invalidTo: 'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом',
};
function isNumber(num) {
  return typeof num === 'number' && !Number.isNaN(num);
}

function getInterval(arr, from, to) {
  if (arr.some((elem) => !isNumber(elem))) {
    throw Error(errorMessage.invalidArr);
  }
  if (!isNumber(from)) {
    throw Error(errorMessage.invalidFrom);
  }
  if (!isNumber(to)) {
    throw Error(errorMessage.invalidTo);
  }

  let arrFromTo = [];
  if (from > to) {
    return (arrFromTo = arr.filter((elem) => to <= elem && elem <= from));
  }

  return (arrFromTo = arr.filter((elem) => from <= elem && elem <= to));
}