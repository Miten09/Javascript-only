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

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const avgDolphins = (a, b, c) => {
  const DolphiAverage = calcAverage(a, b, c);
  return DolphiAverage;
};
console.log(avgDolphins(85, 54, 41));

const avgKoalas = (a, b, c) => {
  const KoalasAverage = calcAverage(a, b, c);
  return KoalasAverage;
};
console.log(avgDolphins(23, 34, 27));

const checkWinner = (avgDolphins, avgKoalas) => {
  const avgOfDolphinsthree = avgDolphins * 3;
  console.log(avgOfDolphinsthree);
  const avgOfKoalasthree = avgKoalas * 3;
  console.log(avgOfKoalasthree);

  if (avgOfDolphinsthree > 2 * avgOfKoalasthree) {
    console.log(`dolphins score ${avgOfDolphinsthree} so dolphin is winner`);
  } else if (avgOfKoalasthree > 2 * avgOfDolphinsthree) {
    console.log(`koalas score ${avgOfKoalasthree} so koalas is winner`);
  } else {
    console.log("no one is winner");
  }
};

checkWinner(avgDolphins, avgKoalas);
