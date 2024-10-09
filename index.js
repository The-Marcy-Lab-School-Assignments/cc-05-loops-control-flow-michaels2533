const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    i % 6 === 0 && i % 9 === 0 ? console.log(i) : null;
  }
};

const greaterNum = (num1, num2) => {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return null;
  }
  if (num1 === num2) {
    return "Both integers are equal";
  } else if (num1 > num2) {
    return num1;
  } else {
    return null;
  }
};

const sumOfFourAndSix = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    i % 4 === 0 && i % 6 === 0 ? (sum += i) : null;
  }
  return sum;
};

// const oddAndEvenToN = (num) => {
//     for(let i = 0; i < )
// };

//Problems
console.log("------Problems 1 ------");
multiplesOfSixAndNine();
console.log("------Problems 2 ------");
console.log(greaterNum(10, 7)); //returns 10
console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
console.log(greaterNum("21", 21)); //returns null
console.log(greaterNum("21", "21")); //returns null
console.log("------Problems 3 ------");
console.log(sumOfFourAndSix()); //returns 41832
console.log("------Problems 4 ------");
console.log("------Problems 5 ------");
console.log("------Problems 6 ------");
