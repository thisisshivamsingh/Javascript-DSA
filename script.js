////////// Sum of Resistance in Series Circuits //////////

// function seriesResistance(arr) {
//   let rt = 0;
//   let ohmVar = "";
//   for (const elem of arr) {
//     rt = rt + elem;
//   }
//   if (rt > 1) {
//     ohmVar = "ohms";
//   } else {
//     ohmVar = "ohm";
//   }
//   return `${rt} ${ohmVar}`;
// }

// console.log(seriesResistance([16, 3.5, 6]));

////////// How Much is True? //////////

// function countTrue(arr) {
//   let counter = 0;
//   for (const elem of arr) {
//     if (elem) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countTrue([2, 0, 5, 5, 6]));

////////// What's Hiding Amongst the Crowd? //////////

function detectWord(str) {
  const convtArr = str.split("");
  const convtCaseChangedArr = str.toUpperCase().split("");
  let newStr = "";
  for (const i in convtCaseChangedArr) {
    if (convtArr[i] !== convtCaseChangedArr[i]) {
      newStr += convtArr[i];
    }
  }
  return newStr;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
