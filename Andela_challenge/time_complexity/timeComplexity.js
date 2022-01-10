function timeComplexity(valueArray) {
  let result;
  let maxCount = 0;
  let arrayIndex = -1;
  for (let i = 0; i < valueArray.length; i++) {
    let count = 0;
    for (j = 0; j < valueArray.length; j++) {
      if (valueArray[j] == valueArray[i]) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        arrayIndex = i;
      }
      if (maxCount > valueArray.length / 2) {
        return valueArray[arrayIndex];
      }
    }
  }
}

console.log(timeComplexity([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
