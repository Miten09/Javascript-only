// let MarksWeight = 78;
// let MarksHeight = 1.69;

// let JohnsWeight = 92;
// let JohnsHeight = 1.95;

// let MarksBMI = MarksWeight / MarksHeight ** 2;
// console.log(MarksBMI);
// let JohnsBMI = JohnsWeight / JohnsHeight ** 2;
// console.log(JohnsBMI);

// let MarksHigherBMI = MarksBMI > JohnsBMI;

// console.log(MarksHigherBMI);

// let DolphinsAverage = (96 + 108 + 89) / 3;
// console.log(DolphinsAverage);
// let koalasAverage = (88 + 91 + 110) / 3;
// console.log(koalasAverage);

// if (DolphinsAverage > koalasAverage) {
//   console.log(
//     `Dolphins Average score ${DolphinsAverage} is greater than koalas Average score ${koalasAverage}`
//   );
// } else if (koalasAverage > DolphinsAverage) {
//   console.log(
//     ` koalas Average score ${koalasAverage} is greater than Dolphins Average score ${DolphinsAverage}`
//   );
// } else if (koalasAverage === koalasAverage) {
//   console.log(
//     ` koalas Average score ${koalasAverage} is equal to Dolphins Average score ${DolphinsAverage} so Both Wins the trophy`
//   );
// }

let DolphinsAverage = (96 + 88 + 89) / 3;
console.log(DolphinsAverage);
let koalasAverage = (88 + 88 + 110) / 3;
console.log(koalasAverage);

if (
  DolphinsAverage &&
  koalasAverage >= 100 &&
  DolphinsAverage > koalasAverage
) {
  console.log(
    `${koalasAverage} value & ${DolphinsAverage} is greater than 100 so Dolphin is winner`
  );
} else if (
  DolphinsAverage &&
  koalasAverage >= 100 &&
  DolphinsAverage < koalasAverage
) {
  console.log(
    `${koalasAverage} value & ${DolphinsAverage} is greater than 100 so Koalas is winner`
  );
} else {
  console.log("score is note more than 100");
}
