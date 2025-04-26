// Node.js example for calculating Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let first = 0, second = 1;
    for (let i = 2; i <= n; i++) {
        let current = first + second;
        first = second;
        second = current;
    }
    return second;
}

// Example usage
console.log(fibonacci(10)); // Output: 55
