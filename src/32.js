function fibonacci(n) {
  if (n <= 1) return n;
  let previous = 0,
      current = 1;
  
  for (let i = 2; i <= n; i++) {
    [previous, current] = [current, previous + current];
  }
  
  return current;
}

console.log(fibonacci(10));
