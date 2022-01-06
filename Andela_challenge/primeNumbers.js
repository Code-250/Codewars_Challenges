let numbers = [],
  primes = [],
  maxNumber = [3, 2, 4, 5, 6, 11, 21, 17, 65, 45, 81, 65, 32, 12, 31, 61];

for (let i = 0; i < maxNumber.length; i++) {
  numbers.push(maxNumber[i]);
}

while (numbers.length) {
  primes.push(numbers.shift());
  numbers = numbers.filter(function (i) {
    return i % primes[primes.length - 1] != 0;
  });
}

console.log(primes);
