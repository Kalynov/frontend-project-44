function GCD(firstNumber, secondNumber) { // НОД двух целых чисел
  let gcd = firstNumber;
  let b = secondNumber;
  for (let i = 1; i < 2; i += 1) {
    while (gcd && b) {
      gcd = gcd > b ? gcd %= b : b %= gcd;
    }
    gcd += b;
  }
  return gcd;
}

export default GCD;
