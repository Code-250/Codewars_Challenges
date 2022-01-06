const inPlaceArray = (arrayValue) => {
  // loop to the half of the array length

  for (let i = 0; i < Math.floor(arrayValue.length / 2); i++) {
    // switch array elements from the end and the beginning

    [arrayValue[i], arrayValue[arrayValue.length - 1 - i]] = [
      arrayValue[arrayValue.length - 1 - i],
      arrayValue[i],
    ];
  }
  return arrayValue;
};
const arrayValue = [1, 2, 3, 4, 5, 6, 7];
console.log(inPlaceArray(arrayValue));
