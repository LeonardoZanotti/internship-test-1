const fibonacci = (value) => {
	let i = 0;
	let j = 1;
	let number = 0;

	while (number <= value) {
		number = i + j;
		if (number === value) {
			return console.log(number + " é fibonacci");
		}
		i = j; j = number;
	}
	return console.log(value + " não é fibonacci")
}

fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);
fibonacci(8);
fibonacci(9);
fibonacci(10);
fibonacci(11);
fibonacci(12);
fibonacci(13);

// 1 é fibonacci
// 2 é fibonacci
// 3 é fibonacci
// 4 não é fibonacci
// 5 é fibonacci
// 6 não é fibonacci
// 7 não é fibonacci
// 8 é fibonacci
// 9 não é fibonacci
// 10 não é fibonacci
// 11 não é fibonacci
// 12 não é fibonacci
// 13 é fibonacci