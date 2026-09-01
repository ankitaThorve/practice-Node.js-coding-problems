const lines = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
const n = parseInt(lines[0].trim());
let sum = 0;
// Read numbers and calculate sum
for (let i = 0; i < n; i++) {
  sum += parseInt(lines[i + 1].trim());
}
// Print the sum
console.log("Sum: " + sum);
