
export function GCD (firstNumber, secondNumber) { // НОД двух целых чисел
	let gcd = firstNumber;
	for (let i = 1; i < 2; i++) {
		while (gcd && secondNumber) {
			gcd > secondNumber ? gcd %= secondNumber : secondNumber %= gcd;
		}
		gcd += secondNumber;
	  }
	  return gcd;
}