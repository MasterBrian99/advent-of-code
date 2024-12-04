import { readFileSync } from "node:fs";
function part1() {
  const content = readFileSync("inputs/part1_input2.txt", "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  console.log(content);

  const rows = content.length;
  const cols = content[0].length;
  let total = 0;

  for (let i = 0; i < content.length; i++) {
    const element = content[i];
    total += count(element, "XMAS");
  }

  for (let i = 0; i < cols; i++) {
    let vertical = "";
    for (let row = 0; row < rows; row++) {
      vertical += content[row][i];
    }
    total += count(vertical, "XMAS");
  }
  // Diagonal (top-left to bottom-right)
  for (const diagonal of getD(content, rows, cols, true)) {
    total += count(diagonal, "XMAS");
  }

  // Diagonal (top-right to bottom-left)
  for (const diagonal of getD(content, rows, cols, false)) {
    total += count(diagonal, "XMAS");
  }
  console.log(total);
}

function count(str: string, char: string) {
  let count = 0;
  const patternReversed = char.split("").reverse().join("");

  for (let i = 0; i <= str.length - char.length; i++) {
    if (str.substring(i, i + char.length) === char) {
      count++;
    }
    if (str.substring(i, i + char.length) === patternReversed) {
      count++;
    }
  }
  return count;
}

function getD(
  data: string[],
  rows: number,
  cols: number,
  forward: boolean = true
) {
  const diagonals: string[] = [];

  // Start from the first row
  for (let col = 0; col < cols; col++) {
    let diagonal = "";
    let r = 0,
      c = col;

    while (r < rows && c >= 0 && c < cols) {
      diagonal += data[r][c];
      r++;
      c = forward ? c + 1 : c - 1;
    }

    if (diagonal.length >= 4) {
      diagonals.push(diagonal);
    }
  }

  // Start from the first/last column
  for (let row = 1; row < rows; row++) {
    let diagonal = "";
    let r = row,
      c = forward ? 0 : cols - 1;

    while (r < rows && c >= 0 && c < cols) {
      diagonal += data[r][c];
      r++;
      c = forward ? c + 1 : c - 1;
    }

    if (diagonal.length >= 4) {
      diagonals.push(diagonal);
    }
  }

  return diagonals;
}
export default part1;
