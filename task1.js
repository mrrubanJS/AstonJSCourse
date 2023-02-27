function deleteElementFromArray(arr, elem) {
  const newArr = [];

  const elemIndex = arr.indexOf(elem);
  if (elemIndex >= 0) {
    arr.forEach((element, index) => {
      if (index !== elemIndex) {
        newArr.push(element);
      }
    });
  } else {
    return arr;
  }
  return newArr;
}