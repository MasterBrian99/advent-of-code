// const foo = Bun.file("sample.txt");
const foo = Bun.file("./input.txt");

// console.log(await foo.text());

const fileWord = await foo.text();
const wordList = fileWord.trim().split("\n");
// console.log(wordList);

export function getPartOne(list: string[]) {
  //   for (let i = 0; i < list.length; i++) {
  //     const element = list[i];

  //     for (let j = 0; j < element.length; j++) {
  //       const el = element[j];
  //       //   console.log(el);
  //       const first = el.split("").find((e) => !Number.isNaN(Number(e)));
  //       const last = el.split("").findLast((e) => !Number.isNaN(Number(e)));
  //       return Number(Number(first) + Number(last));
  //     }
  //   }

  const val = list.map((el) => {
    const first = el.split("").find((e) => !Number.isNaN(Number(e)));
    const last = el.split("").findLast((e) => !Number.isNaN(Number(e)));
    if (first && last) {
      return Number(first + last);
    }
  });
  // console.log(val);

  const total = sumArray(val.map((e) => Number(e)));
  // console.log(total);
  return total;
}
getPartOne(wordList);

// function getPartOne() {
//   const values = wordList.map((el) => {
//     let value = "";
//     let first = el.split("").find((x) => !Number.isNaN(Number(x)));
//     let last = el.split("").findLast((x) => !Number.isNaN(Number(x)));
//     return Number(first + last);
//   });
//   console.log(values);
// }

// getPartOne();

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
