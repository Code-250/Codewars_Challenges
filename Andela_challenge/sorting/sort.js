function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
function sorting(inputArray) {
  let value = 0;
  let arrayValue = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === String) {
      return "your array should contain only numbers";
    } else {
      for (let j = i; j < inputArray.length; j++) {
        if (inputArray[j] > inputArray[i]) {
          value = inputArray[j];
          inputArray[j] = inputArray[i];
          inputArray[i] = value;
        }
      }
    }
  }
  for (k = 0; k < inputArray.length; k++) {
    const Prime = checkPrime(inputArray[k]);
    // console.log(inputArray);
    if (!Prime) {
      arrayValue.push(inputArray[k]);
    }
  }
  return arrayValue;
}

console.log(sorting([1, 2, 8, 4, 5, 6]));
