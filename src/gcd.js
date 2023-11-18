
export function GCD (a, b) { // НОД двух целых чисел
	let x = a;
	for (let i = 1; i < 2; i++) {
		while (x && b) {
		  x > b ? x %= b : b %= x;
		}
		x += b;
	  }
	  return x;
}