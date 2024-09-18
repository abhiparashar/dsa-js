let dp = Array(1005).fill(-1);

function f(n) {
  if (n === 0 || n === 1) return n;
  // Check whether the value has already been computed
  if (dp[n] !== -1) return dp[n];
  // Compute the value for the first time and store it in dp array
  dp[n] = f(n - 1) + f(n - 2);
  return dp[n];
}

function fbu(n) {
  dp = Array(1005).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  for (let index = 2; index < dp.length; index++) {
    dp[index] = dp[index - 1] + dp[index - 2]
  }
  return dp[n];
}
console.log(fbu(9))

// console.log(f(9)); // Output: 34
