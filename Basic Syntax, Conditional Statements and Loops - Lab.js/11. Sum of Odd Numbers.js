function printNextOddNumbersAndSum(n) {
    let currentOdd = 1;
    let sum = 0;
    
    // Print the next n odd numbers
    for (let i = 0; i < n; i++) {
      console.log(currentOdd);
      sum += currentOdd;
      currentOdd += 2;
    }

    // Print the sum
    console.log(`Sum: ${sum}`);
}
    printNextOddNumbersAndSum(5)