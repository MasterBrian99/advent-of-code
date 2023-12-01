import { getPartOne } from "../part1";

const foo = Bun.file("input.txt");

const fileWord = await foo.text();
const wordList = fileWord.trim().split("\n");

// const numList = new RegExp(
//   ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].join(
//     "|"
//   )
// );
// const numOjb={
//     one:1,
//     two:2,
//     three:3,
//     four
// }

let numList = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const numOjb: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
// const partTwo = ;

// function replaceWithNumbers(w: string) {
//   return numList.reduce((res, str) => {
//     const regex = new RegExp(str, "gi");
//     const replacement = numOjb[str].toString();
//     return res.replace(regex, replacement);
//   }, w);
// }

// function replaceWithNumbers(w: string) {
//   let replacedString = "";
//   const reverseWord = w.split("").reverse().join("");
//   replacedString = reverseWord;
//   let num2List = new RegExp(
//     [
//       "one".split("").reverse().join(""),
//       "two".split("").reverse().join(""),
//       "three".split("").reverse().join(""),
//       "four".split("").reverse().join(""),
//       "five".split("").reverse().join(""),
//       "six".split("").reverse().join(""),
//       "seven".split("").reverse().join(""),
//       "eight".split("").reverse().join(""),
//       "nine".split("").reverse().join(""),
//     ].join("|")
//   );
//   for (let a of w) {
//     replacedString = replacedString.replace(num2List, (match) =>
//       numOjb[match.split("").reverse().join("")].toString()
//     );
//   }
//   console.log(replacedString.split("").reverse().join(""));

//   return reverseWord;
// }

function replaceWithNumbers(listStr: string[]) {
  //   Object.keys(numOjb).forEach((key) => {
  //     if (listStr.includes(key))
  //       listStr = listStr.replaceAll(key, `${key}${numberMap[key]}${key}`);
  //   });
  return listStr
    .map((row) => {
      const numberMap: { [key: string]: number } = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
      };
      Object.keys(numberMap).forEach((key) => {
        if (row.includes(key))
          row = row.replaceAll(key, `${key}${numberMap[key]}${key}`);
      });
      const firstDigit = row.match(/\d/)![0];
      const lastDigit = row.match(/(\d)[a-z]*$/)![1];
      return parseInt(`${firstDigit}${lastDigit}`);
    })
    .reduce((acc, curr) => acc + curr, 0);
}
// function replaceWithNumbers(w: string) {
//   let replacedString = "";
//   const reverseWord = w;
//   replacedString = reverseWord;
//   let num2List = new RegExp(
//     [
//       "one",
//       "two",
//       "three",
//       "four",
//       "five",
//       "six",
//       "seven",
//       "eight",
//       "nine",
//     ].join("|")
//   );
//   for (let a of w) {
//     replacedString = replacedString.replace(num2List, (match) =>
//       numOjb[match].toString()
//     );
//   }
//   //   console.log(replacedString);

//   return replacedString;
// }
/*
function replaceWithNumbers(inputString: string) {
  let result = "";
  let currentToken = "";

  for (const char of inputString) {
    if (/[a-zA-Z]/.test(char)) {
      currentToken += char.toLowerCase();
    } else {
      if (currentToken.length > 0) {
        result += numOjb[currentToken].toString();
        currentToken = "";
      }
      result += char;
    }
  }

  if (currentToken.length > 0) {
    result += numOjb[currentToken].toString();
  }

  return result;
  //   let result = "";
  //   let currentWord = "";

  //   for (const char of w) {
  //     currentWord += char.toLowerCase();

  //     if (numList.includes(currentWord)) {
  //       result += numOjb[currentWord].toString();
  //       currentWord = "";
  //     }
  //   }

  //   return result;
  //   const regexPattern = new RegExp(numList.join("|"), "gi");

  //   const numericMatches = w.match(regexPattern);

  //   return numericMatches ? numericMatches.join("") : "";
}

*/
function abcd(wList: string[]) {
  const fixedList = [];

  console.log(replaceWithNumbers(wList));

  //   console.log(getPartOne(wList));

  //   const lla = [];

  //   for (let i = 0; i < wList.length; i++) {
  //     const element = wList[i];
  //     if (numList.test(element)) {
  //     }
  //   }

  //   const numList = [];
  //   for (let w of wList) {
  //     const n2List = [];
  //     for (let i = 0; i < w.split("").length; i++) {
  //       const element = w.split("")[i];
  //       if (!Number.isNaN(Number(element))) {
  //         n2List.push(element);
  //         i == w.split("").length;
  //         break;
  //       }
  //     }
  //     console.log(n2List);
  //   }
}

const resultString = abcd(wordList);

// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen

// 219
// 823
// abc123xyz
// x2ne34
// 4oneight234
// 7pqrst6teen
