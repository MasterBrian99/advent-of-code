import { readFileSync } from "node:fs";
function part2() {
  const content = readFileSync("inputs/part2_input1.txt", "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const width = content[0].length;
  const height = content.length;
  let count = 0;
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (checkXmas(r, c, height, width, content[r])) {
        count++;
      }
    }
  }
  console.log(count);
}
function checkXmas(
  r: number,
  c: number,
  height: number,
  width: number,
  content: string
) {
  // Define patterns for XMAS detection
  const patterns: [string[], string[]][] = [
    [
      ["M", "A", "S"],
      ["M", "A", "S"],
    ], // Both forward
    [
      ["S", "A", "M"],
      ["M", "A", "S"],
    ], // First backward, second forward
    [
      ["M", "A", "S"],
      ["S", "A", "M"],
    ], // First forward, second backward
    [
      ["S", "A", "M"],
      ["S", "A", "M"],
    ], // Both backward
  ];

  // Ensure the XMAS pattern fits within bounds
  if (r + 2 >= height || c + 2 >= width) {
    return false;
  }

  // Check all patterns
  for (const [leftDiagonal, rightDiagonal] of patterns) {
    if (
      // Check left diagonal
      content[r][c] === leftDiagonal[0] &&
      content[r + 1][c + 1] === leftDiagonal[1] &&
      content[r + 2][c + 2] === leftDiagonal[2] &&
      // Check right diagonal
      content[r][c + 2] === rightDiagonal[0] &&
      content[r + 1][c + 1] === rightDiagonal[1] &&
      content[r + 2][c] === rightDiagonal[2]
    ) {
      return true;
    }
  }

  return false;
}

export default part2;
