let arr = [3, 4, 5, 11, 23, 65, 2, 81, 22, 78];

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
let primeArray = [];
arr.forEach((element) => {
  const isPrime = checkPrime(element);
  if (isPrime) {
    return primeArray.push(element);
    // console.log(`${element} is a prime number`);
  } else {
    return false;
  }
});

console.log(primeArray);
