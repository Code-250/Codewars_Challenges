// let setStudentAgeApi = (student, age) => {
//   console.log("1.   starting ...");
//   setTimeout(() => {
//     student.age = age;
//     console.log("2. API processing");
//   }, 500);
//   console.log("3. Done ...");
// };

let student = { name: "richard", age: 12 };
let age = -20;
// setStudentAgeApi(student, age);
function getTemperature() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (1000 - 1000 + 1) + 1000);
    const temp = Math.floor(Math.random() * (300 - 1 + 1) + 1);
    console.log(delay, temp);
    setTimeout(() => {
      if (temp > 200) {
        reject(`Reject: Too hot | Delay: ${delay} | Temperature: ${temp} deg`);
      } else if (temp < 100) {
        reject(`Reject: Too cold | Delay: ${delay} | Temperature: ${temp} deg`);
      } else {
        resolve(
          `Resolve: Just Right | Delay: ${delay} | Temperature: ${temp} deg`
        );
      }
    }, delay);
  });
}

getTemperature()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function studentApi(student, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Starting");
      if (age > 0) {
        resolve(student);
      } else {
        reject("error occured");
      }
    }, 5000);
  });
}
studentApi(student, age)
  .then((result) => {
    console.log(result);
    console.log("done");
  })
  .catch((error) => console.log(error));

// assignment
let family = [
  {
    fatherName: "Richard",
    motherName: "jossy",
    childrenName: 7,
  },
  {
    fatherName: "yves",
    motherName: "jossy",
    childrenName: -7,
  },
  {
    fatherName: "yves",
    motherName: "jossy",
    childrenName: 7,
  },
];
function assignment(family) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      family.map((el) => {
        if (el.fatherName == "yves") {
          console.log(el.fatherName, "yves");
          reject("yves is not an allowed dad in 2022");
        } else {
          resolve(family);
        }
      });
    }, 1000);
  });
}
assignment(family)
  .then((response) => {
    // response.map((av) => {
    //   if (av.childrenName < 0) {
    console.log(response);
    //   } else {
    //     av["average"] = av.childrenName + Math.floor(Math.random() * 3);
    //     console.log(response);
    //   }
    // });
  })
  .catch((err) => console.log(err));
