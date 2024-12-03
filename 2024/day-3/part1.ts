import { readFileSync } from "node:fs";
function part1() {
  const content = readFileSync("part1_input2.txt", "utf-8").match(
    RegExp(RegExp("mul\\(\\d{1,3},\\d{1,3}\\)", "g"))
  );
  // console.log(content);

  let res = 0;
  if (content) {
    for (let i = 0; i < content.length; i++) {
      const element = content[i];

      const dd = element.replaceAll("mul(", "").replaceAll(")", "").split(",");
      if (dd[0] && dd[1]) {
        if (!Number.isNaN(dd[0]) && !Number.isNaN(dd[1])) {
          const a = parseInt(dd[0]);
          const b = parseInt(dd[1]);
          res += a * b;
        }
        // console.log(a * b);
      }
    }
    console.log(res);
  }
}

part1();
