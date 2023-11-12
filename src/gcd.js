
export function GCD (a, b) { // НОД двух целых чисел
	var factor = 1;
	while (true) {
		// НОД(0, b) = b; НОД(a, 0) = a; НОД(a, a) = a;
		if (a == b)
			if (a == 0)
                throw 'GCD(0, 0)'
			else
                return factor * a;
		if (a == 0)
            return factor * b;
		if (b == 0)
            return factor * a;
		// НОД(1, b) = 1; НОД(a, 1) = 1;
		if (a == 1 || b == 1)
            return factor;
		//Если a и b чётные, то НОД(a, b) = 2 * НОД(a / 2, b / 2);
		if (!(a & 1) && !(b & 1)){
			factor <<= 1;
			a >>= 1;
			b >>= 1;
		}
		// Если a чётное, b нечётное, то НОД(a, b) = НОД(a / 2, b);
		else if (!(a & 1))
            a >>= 1;
		// Если b чётное, a нечётное, то НОД(a, b) = НОД(a, b / 2);
		else if (!(b & 1))
            b >>= 1;
		// Если a и b нечётные и b > a, то НОД(a, b) = НОД((b - a) / 2, a);
		else if (b > a)
           b = (b - a) >> 1;
		// Если a и b нечётные и b < a, то НОД(a, b) = НОД((a - b) / 2, b);			
		else
            a = (a - b) >> 1;
	}
}