var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var paragraph_number = document.getElementById("paragraph_number");
var generate = document.getElementById("generate");
var clipboard = document.getElementById("clipboard");
var result = document.querySelector("#result");

/* On click events */

plus.onclick = function() {
	if (paragraph_number.value < 10) {
		paragraph_number.value++;
	}
};

minus.onclick =  function() {
	if (paragraph_number.value > 1) {
		paragraph_number.value--;
	}
};

clipboard.onclick = function() {
	// Create placeholder text area
	let copyText = document.createElement('textarea');
	copyText.id = 't';
	copyText.style.height = 0;
	document.body.appendChild(copyText);
	copyText.value = result.innerText;

	let selector = document.querySelector('#t')
	selector.select();
	document.execCommand('copy')
  document.body.removeChild(copyText)
};

generate.onclick = function() {
	if (result.innerHTML !== "") {
		result.innerHTML = "";
	}

	var ipsum = [];
	for (var i = 0; i < paragraph_number.value; i++) {
		ipsum = getParagraph();
		for (var j = 0; j < ipsum.length; j++) {
			result.innerHTML += (ipsum[j] + " ");
		}
		result.innerHTML += '</br></br>';
	}
};

/* Get the random paragraphs */

function getParagraph() {
	var paragraph = [];
	var numSentences = Math.floor(Math.random() * (7 - 5 + 1) + 5);

	for (var i = 0; i < numSentences; i++) {
		paragraph.push(getRandomPhrase());
	}
	return paragraph;
}

function getRandomPhrase() {
	var index = Math.floor(Math.random() * phrases.length);
	return phrases[index];
}

/* Phrases to generate lorem ipsum */

var phrases = [
		"When in doubt, use brute force.",
		"Deleted code is debugged code.",
		"And then she said, \"Array Indexes start at 1\".",
		"Ethernet always wins.",
		"It's not a bug - it's an undocumented feature.",
		"In order to understand recursion, one must first understand recursion.",
		"Polymorphism.",
		"Albeit an archaic language, C is still relevant for systems programming.",
		"C is dead.",
		"Don't treat a semi colon as the end of the line, but rather as a possibility of a new beginning.",
		"Profanity: The truly multi-platform programming language.",
		"Given enough time, I can meet any software deadline.",
		"Git add, git commit, git push.",
		"System.out.println(\"Hello World!\");",
		"HODL!",
		"You start coding, I'll ask what the customer wants...",
		"Let's start array indexes at 0.5.",
		"Why do it by hand in ten minutes when you can automate it in ten hours?",
		"p = np || p != np ...",
		"You: O(n^2) Guy she tells you not to worry about: O(1).",
		"I can write Fortran in any language.",
		"I Hate Programming. I Hate Programming. I Hate Programming. It works! I Love Programming.",
		"Premature optimization is the root of all evil."
];