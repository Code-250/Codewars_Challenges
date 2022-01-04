function permutations(string) {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  }
  if (string.length && string.length < 2) {
    return [string];
  }

  let permutedArray = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char) != i) {
      continue;
    }
    let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permutations(remainder)) {
      permutedArray.push(char + permutation);
    }
  }

  return permutedArray;
}
