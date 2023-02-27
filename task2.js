function isPositiveInt(num) {
  return Number.isInteger(num) && num > 0;
}

const errorMessage = ' the index cannot be a negative number or a fractional number ';

function addElementsToArray(arr, index) {
  return function (...arg) {
    const newArr = [];
    if (!isPositiveInt(index) && index !== undefined) {
      throw new Error(errorMessage);
    }
    if (!index || index > arr.length) {
      newArr.push(...arr, ...arg);
    } else {
      newArr.push(...arr.slice(0, index), ...arg, ...arr.slice(index));
    }

    return newArr;
  };
}