function reverse(str) {
	if (!str || typeof str != 'string' || str.length < 2) return str;

	const backwards = [];
	const length = str.length - 1;
	for (let i = length; i >= 0; i--) {
		backwards.push(str[i]);
	}
	return backwards.join('');
}

function reverse1(str) {
	return str.split('').reverse().join('');
}

const reverse2 = (str) => str.split('').reverse().join('');

const reverse3 = (str) => [ ...str ].reverse().join('');

console.log(reverse('javascript is a programming language'));
console.log(reverse1('javascript is a dynamic language'));
console.log(reverse2('javascript is asynchronous'));
console.log(reverse3('javascript is a weird language'));
