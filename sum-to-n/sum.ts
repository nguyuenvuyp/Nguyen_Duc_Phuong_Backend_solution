// Use Loop(O(n)) - Easy to understand, effective but still has loops
export function sumToNLoop(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Use Formula (O(1)) - The fastest
  export function sumToNFormula(n: number): number {
    return (n * (n + 1)) / 2;
  }
  
  // Use Recursive (O(n)) - Less efficient than loops, can cause stack overflow with large n
  export function sumToNRecursive(n: number): number {
    if (n === 1) return 1;
    return n + sumToNRecursive(n - 1);
  }
  
  // Test các hàm
  console.log(sumToNLoop(5));      // 15
  console.log(sumToNFormula(5));   // 15
  console.log(sumToNRecursive(5)); // 15
  