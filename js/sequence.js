function additionInSeq(n) {
	return (n < 2) ? 0 : ((n ** 2 - n) / 2);
}

function main() {
	let i = 0;

	while (i < 10) {
		console.log(i, ": ", additionInSeq(i++));
	}
}

main();
