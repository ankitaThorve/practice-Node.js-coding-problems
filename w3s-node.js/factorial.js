function factorial(n) {
  // return factorial of n
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const num = 7;
console.log(num + " != " + factorial(num));