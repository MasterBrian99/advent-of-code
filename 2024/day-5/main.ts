import { readFileSync } from "node:fs";
function part2() {
  const content = readFileSync("inputs/part1_input2.txt", "utf-8").trim();
  const [rawRules, rawUpdates] = content.split("\n\n");

  // Parse rules and updates
  const rules: [number, number][] = rawRules.split("\n").map((line) => {
    const [a, b] = line.split("|").map(Number);
    return [a, b];
  });

  const updates: number[][] = rawUpdates
    .split("\n")
    .map((line) => line.split(",").map(Number));
  let ans = 0;

  // Process each update
  for (const update of updates) {
    const [follows, _] = followsRules(update, rules);
    if (follows) {
      continue;
    }

    const seq = sortCorrectly(update, rules);
    ans += seq[Math.floor(seq.length / 2)];
  }

  console.log(ans);
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
function sortCorrectly(update: number[], rules: [number, number][]): number[] {
  const myRules: [number, number][] = [];
  const indeg: Record<number, number> = {};

  // Filter applicable rules for the current update
  for (const [a, b] of rules) {
    if (update.includes(a) && update.includes(b)) {
      myRules.push([a, b]);
    }
  }

  // Initialize indegree counts
  update.forEach((x) => {
    indeg[x] = 0;
  });

  for (const [a, b] of myRules) {
    indeg[b] = (indeg[b] || 0) + 1;
  }

  const ans: number[] = [];

  // Perform topological sorting
  while (ans.length < update.length) {
    for (const x of update) {
      if (ans.includes(x)) {
        continue;
      }
      if (indeg[x] <= 0) {
        ans.push(x);
        for (const [a, b] of myRules) {
          if (a === x) {
            indeg[b]--;
          }
        }
      }
    }
  }

  return ans;
}
part2();
