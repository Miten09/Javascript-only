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

const calcage = function (birthyear) {
  return 2037 - birthyear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcage(years[0]),
  calcage(years[1]),
  calcage(years[years.length - 1]),
];
console.log(ages);
