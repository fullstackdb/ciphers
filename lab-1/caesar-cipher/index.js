/*
Call it like this:

    caesarShift('Attack at dawn!', 12);    // Returns "Mffmow mf pmiz!"

And reverse it like this:

    caesarShift('Mffmow mf pmiz!', -12);    // Returns "Attack at dawn!"

Enjoy!

*/

var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};

console.log(caesarShift('ATTACKATONCE', 13)); // NGGNPXNGBAPR
console.log(caesarShift('NGGNPXNGBAPR', -13)); // ATTACKATONCE

console.log(caesarShift('prashantyadav', 13)); //cenfunaglnqni
console.log(caesarShift('cenfunaglnqni', -13)); //prashantyadav
