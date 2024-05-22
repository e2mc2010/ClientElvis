function fibonacciIterative(n) {
    let fibSequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
  
    return fibSequence.slice(0, n);
  }
  
  let numTerms = 80;
  console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibonacciIterative(numTerms));