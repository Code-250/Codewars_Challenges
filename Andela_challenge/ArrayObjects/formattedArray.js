// function formatedArray() {}
const sentence = [
  "Richard Munyemana 20",
  "Jule bienvenue 32",
  "cyusa gedeon 12",
];

function formatedArray(sentence) {
  let listOfArrays = [];

  sentence.map((element) => {
    // console.log(element.split(" "));
    listOfArrays.push(element.split(" "));

    return listOfArrays;
  });
  // const obj = Object.assign({}, listOfArrays);
  const listValue = [];
  listOfArrays.forEach((list) => {
    for (let i = 0; i < list.length; i++) {
      listValue.push(list[i]);
    }
  });
  // const obj = Object.assign({}, listValue);

  const value = listOfArrays[0];
  console.log(value);
  return listOfArrays;
  // console.log(listOfObjects);
}
console.log(formatedArray(sentence));
// //
