import { readFileSync } from "node:fs";

function part2() {
  const content = readFileSync("part2_input2.txt", "utf-8").match(
    /mul\(\d+,\d+\)|don\'t\(\)|do\(\)/g
  );
  let res = 0;
  // console.log(content);
  let all = [];
  if (content) {
    for (let i = 0; i < content.length; i++) {
      const element = content[i];
      if (element.includes("don't")) {
        all.push({
          type: "not",
        });
        continue;
      }
      if (element.includes("mul")) {
        all.push({
          type: "mul",
          value: element
            .slice("mul(".length)
            .split(",")
            .map((x) => parseInt(x)),
        });
        continue;
      } else {
        all.push({
          type: "do",
        });
        continue;
      }
    }
    let enabled = true;
    for (let i = 0; i < all.length; i++) {
      const element = all[i];
      console.log(element);

      if (element.type == "mul" && enabled) {
        res += element.value![0] * element.value![1];
      } else if (element.type == "not") {
        enabled = false;
      } else if (element.type == "do") {
        enabled = true;
      }
    }
    console.log(res);
  }
  // if (content) {
  //   for (let i = 0; i < content.length; i++) {
  //     const element = content[i];
  //     console.log(element);
  //     if (element.includes("don't")) {
  //       return {
  //         type: "not",
  //       };
  //     }

  // const dd = element.replaceAll("mul(", "").replaceAll(")", "").split(",");
  // if (dd[0] && dd[1]) {
  //   if (!Number.isNaN(dd[0]) && !Number.isNaN(dd[1])) {
  //     const a = parseInt(dd[0]);
  //     const b = parseInt(dd[1]);
  //     res += a * b;
  //   }
  // console.log(a * b);
  // }
  // }
  // console.log(res);
  // }
}

part2();

// RegExp("mul\\(\\d{1,3},\\d{1,3}\\)|do\\(\\)|don\\'t\\(\\)", "g")
