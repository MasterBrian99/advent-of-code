import { readFileSync } from "node:fs";

function part2() {
  const content = readFileSync("input2.txt", "utf-8");

  let arr: number[][] = [];

  content.split(/\r?\n/).forEach((line) => {
    let li = line.split(/(\s+)/).filter((e) => e.trim().length > 0);
    arr.push(li.map((e) => parseInt(e)));
  });
  let asss = 0;
  arr.forEach((element) => {
    const aa = check(element);
    if (aa) {
      asss += 1;
    }
  });
  console.log(asss);
}

function check(array: number[]): number {
  let sum = 0;
  const diff = [];
  for (let i = 1; i < array.length; i++) {
    diff.push(array[i] - array[i - 1]);
  }
  if (diff.every((x) => x < 0 && x > -4) || diff.every((x) => x > 0 && x < 4)) {
    sum++;
  }
  for (let i = 0; i < array.length; i++) {
    const newline = array.slice(0, i).concat(array.slice(i + 1));
    const diff = [];
    for (let i = 1; i < newline.length; i++) {
      diff.push(newline[i] - newline[i - 1]);
    }
    if (
      diff.every((x) => x < 0 && x > -4) ||
      diff.every((x) => x > 0 && x < 4)
    ) {
      sum++;
      break;
    }
  }
  return sum;
}
part2();
