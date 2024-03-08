const reverseString = (string) => {
	len = string.length;
	newString = '';

	for (let i = len - 1; i >= 0; --i) {
		console.log(string[i], i, len)
		newString += string[i];
	}

	return newString;
}

console.log(reverseString("Leonardo")) // odranoeL