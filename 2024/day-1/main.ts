import { readFileSync } from "node:fs";

function part2() {
  const content = readFileSync("part2_input2.txt", "utf-8");

  let arr1: number[] = [];
  let arr2: number[] = [];
  content.split(/\r?\n/).forEach((line) => {
    let li = line.split(/(\s+)/).filter((e) => e.trim().length > 0);
    if (li[0] && li[1]) {
      arr1.push(Number(li[0]));
      arr2.push(Number(li[1]));
    }
  });

  const obj: Record<number, number> = {};
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const el1 = arr1[i];
      const el2 = arr2[j];
      if (el1 === el2) {
        obj[el1] = obj[el1] ? obj[el1] + 1 : 1;
      }
    }
  }
  let final_res = 0;
  console.log(obj);
  for (const key in obj) {
    // console.log(key, obj[key]);
    let res = Number(key) * obj[key];
    final_res += res;
  }
  console.log(final_res);
}

part2();
