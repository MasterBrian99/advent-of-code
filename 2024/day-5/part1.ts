import { readFileSync } from "node:fs";
function part1() {
  const content = readFileSync("inputs/part1_input2.txt", "utf-8");

  const [rawRules, rawUpdates] = content.split("\n\n");
  const rules: [number, number][] = rawRules.split("\n").map((line) => {
    const [a, b] = line.split("|").map(Number);
    return [a, b];
  });

  const updates: number[][] = rawUpdates
    .split("\n")
    .map((line) => line.split(",").map(Number));
  let ans = 0;

  // Process each update and calculate the result
  for (const update of updates) {
    const [good, mid] = followsRules(update, rules);
    if (good) {
      ans += mid;
    }
    console.log(ans);
  }
}

// Function to check if an update follows the rules
function followsRules(
  update: number[],
  rules: [number, number][]
): [boolean, number] {
  const idx: Record<number, number> = {};

  // Create an index mapping of numbers to their positions
  update.forEach((num, i) => {
    idx[num] = i;
  });

  // Verify rules
  for (const [a, b] of rules) {
    if (a in idx && b in idx && !(idx[a] < idx[b])) {
      return [false, 0];
    }
  }

  // Return true and the middle element of the update
  return [true, update[Math.floor(update.length / 2)]];
}

part1();
