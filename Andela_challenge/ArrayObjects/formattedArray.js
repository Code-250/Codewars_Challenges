const formattedArray = (arr) => {
  let newObject = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    key = arr[i].split(",")[0].split(" ")[0];
    secondName = arr[i].split(",")[0].split(" ")[1];
    age = arr[i].split(",")[1];
    newObject[key] = {};
    newObject[key]["second-name"] = secondName;
    newObject[key]["age"] = age;
  }
  return newObject;
};
const arr = [
  "patrck Wayne, 30",
  "lil wyne, 32",
  "eric mimi, 21",
  "Dodos deck,21",
  "alian Dwine,22",
  "Patrick Wayne, 33",
  "Patrck Wayne,10",
  "Patrck Wayne,40",
];
console.log(formattedArray(arr));
