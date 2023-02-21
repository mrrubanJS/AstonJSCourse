function recursiveCopying(obj) {
  switch (Array.isArray(obj)) {
    case true:
      let copyArr = [...obj];

      copyArr = copyArr.map((elem) => {
        if (typeof elem == 'object') {
          return recursiveCopying(elem);
        } else {
          return elem;
        }
      });

      return copyArr;

    case false:
      let copyObj = { ...obj };
      for (let key in copyObj) {
        if (typeof copyObj[key] == 'object') {
          copyObj[key] = recursiveCopying(copyObj[key]);
        } else {
          return copyObj;
        }
      }

      return copyObj;
  }
}

function deepCopyObject(object) {
  let copyObj = {};
  for (let key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      copyObj[key] = recursiveCopying(object[key]);
    } else {
      copyObj[key] = object[key];
    }
  }
  return copyObj;
}