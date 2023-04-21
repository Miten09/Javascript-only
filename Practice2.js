"use strict";

// const fruitPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apple, oranges) {
//   const applePieces = fruitPieces(apple);
//   const orangesPieces = fruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
//   return juice;
// }
// //const appleJuice = fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 2));

// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const avgDolphins = calcAverage(44, 23, 71);

// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   const avgOfDolphinsthree = 3 * avgDolphins;
//   console.log(avgOfDolphinsthree);
//   const avgOfKoalasthree = 3 * avgKoalas;
//   console.log(avgOfKoalasthree);

//   if (avgOfDolphinsthree >= 2 * avgOfKoalasthree) {
//     console.log(`dolphins score ${avgOfDolphinsthree} so dolphin is winner`);
//   } else if (avgOfKoalasthree >= 2 * avgOfDolphinsthree) {
//     console.log(`koalas score ${avgOfKoalasthree} so koalas is winner`);
//   } else {
//     console.log("no one is winner");
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

// const friends= [ 'Michael', 'steven', 'peter']

// console.log(friends[2])
// console.log(friends[friends.length-1])

// friends[2]='jay'

// console.log(friends)

// const calcage = function (birthyear) {
//   return 2037 - birthyear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = [
//   calcage(years[0]),
//   calcage(years[1]),
//   calcage(years[years.length - 1]),
// ];
// console.log(ages);

// function calcTip(bill) {
//   let tipValue = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
//   return tipValue;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven"],
// };

// console.log(jonas.firstName);
// console.log(jonas["age"]);

// jonas.location = "portugal";
// jonas["twitter"] = "@jonasschmedtmann";
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthyear: 1991,
//   job: "teacher",
//   age: 46,
//   friends: ["michael", "peter", "steven"],
//   hasDriverLicence: true,
//   calcAge: function () {
//     //console.log(this);
//     return 2037 - jonas.birthyear;
//   },
// };

// console.log(jonas.calcAge());

// console.log(this.firstName);

// if (jonas.hasDriverLicence) {
//   console.log(
//     `${jonas.firstName} is a ${jonas.age} years old ${jonas.job} & he has a drivers licence`
//   );
// } else {
//   console.log(
//     `${jonas.firstName} is a ${jonas.age} years old ${jonas.job} & he has not a drivers licence`
//   );
// }
const Marks = {
  firstName: "Mark",
  lastName: "miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  firstName: "john",
  lastName: "smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
// console.log(John.calcBMI());
console.log(
  `john BMI ${John.calcBMI()} has higher than marks BMI ${Marks.calcBMI()}`
);
console.log(John.bmi);
console.log(Marks.bmi);
