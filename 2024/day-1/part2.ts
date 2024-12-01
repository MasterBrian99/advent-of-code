import { readFileSync } from "node:fs";

function part1() {
  const content = readFileSync("part2_input1.txt", "utf-8");

  let arr1: number[] = [];
  let arr2: number[] = [];
  content.split(/\r?\n/).forEach((line) => {
    let li = line.split(/(\s+)/).filter((e) => e.trim().length > 0);
    if (li[0] && li[1]) {
      arr1.push(Number(li[0]));
      arr2.push(Number(li[1]));
    }
  });
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let res = 0;
  arr1.forEach((e, i) => {
    res += Math.abs(e - arr2[i]);
    // console.log(Math.abs(e - arr2[i]));
  });

  console.log(res);
}
export default part1;
