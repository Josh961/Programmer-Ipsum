var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var paragraph_number = document.getElementById("paragraph_number");
var generate = document.getElementById("generate");
var clipboard = document.getElementById("clipboard");
var pTag = document.getElementById("p-tag");
var result = document.querySelector("#result");
var fullText = [];
var currParagraph = [];
var ran = 0;

/* On click events. */

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

pTag.onclick = function() {
  result.innerHTML = "";

  // Ran works as a toggle button
  if(!ran) {
    for (var j = 0; j < fullText.length; j++) {
      result.innerHTML += ("&ltp&gt  " + fullText[j].join(" ") + " &lt/p&gt");
      result.innerHTML += '</br></br>';
      ran = 1;
    }
  } else {
    for (var j = 0; j < fullText.length; j++) {
      result.innerHTML += (fullText[j].join(" "));
      result.innerHTML += '</br></br>';
      ran = 0;
    }
  }

};

generate.onclick = function() {
  ran = 0;
  if (result.innerHTML !== "") {
    result.innerHTML = "";
  }

  var ipsum = [];
  fullText = [];
  for (var i = 0; i < paragraph_number.value; i++) {
    ipsum = getParagraph();
    fullText[i] = ipsum;
    for (var j = 0; j < ipsum.length; j++) {
      result.innerHTML += (ipsum[j] + " ");
    }
    result.innerHTML += '</br></br>';
  }
};

/* Get the random paragraphs. */

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

/* Phrases to generate lorem ipsum. */

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
    "Premature optimization is the root of all evil.",
    "All computers wait at the same speed.",
    "A computer program does what you tell it to do, not what you want it to do.",
    "It compiles, ship it out.",
    "If brute force doesn't solve your problems, then you aren't using enough.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "There are 3 kinds of people: those who can count and those who can't.",
    "UNIX is the answer, but only if you phrase the question very carefully.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "If at first you don't succeed, call it version 1.0.",
    "Real programmers don't document. If it was hard to write, it should be hard to understand.",
    "Real Programmers use C since it's the easiest language to spell.",
    "Most iconic duo: Kernighan and Ritchie.",
    "Unit test your methods.",
    "C is memory with syntactic sugar.",
    "Recursion: see recursion.",
    "Programmer, n. Device for converting caffeine into software.",
    "Merge sort, quick sort, bubble sort, bogo sort, tim sort.",
    "Java.util.*.",
    "Push() and Pop().",
    "Knock knock. Who's there? *very long pause... Java.",
    "Java, Ruby, C, Javascript, GO, Rust, Cobol, Fortran",
    "The trinity: HTML, CSS, and Javascript.",
    "How did people even start programming?",
    "Pass the array size in C.",
    "JUnit, Selenium, VisualVM.",
    "DRY up your code.",
    "Choose the right data structures, and the code will write itself.",
    "// Removing this line breaks everything DONT DO IT.",
    "// You can't fix this, but if you try please update the following - //Hours wasted here: 43.",
    "// Only god and me knows what this does - // Now only god knows.",
    "// This should not work but it does, if you touch it I will be upset.",
    "// Below here there be dragons.",
    "*In a multi-hundred line assembly file, only one comment 80% of the way down - // Gets tricky here.",
    "// Nobody is proud of this.",
    "// I'll fix this later.",
    "Please stop changing my variables.",
    "This is a bad idea.",
    "Djikstra is the man.",
    "Byte, short, int, long, float, double.",
    "Everything in Ruby is an object.",
    "Some people, when confronted with a problem, think, 'I know, I'll use threads' - and then two they hav erpoblesms.",
    "A programmer is told to 'go to hell', he finds the worst part of that statement is the 'go to.'",
    "try, catch, finally.",
    "if, elsif, else, while, do-while, for.",
    "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "A SQL statement walks into a bar and sees two tables. It approaches, and asks 'may I join you?'",
    "1 = 00000001.",
    "Parsing HTML with regex.",
    "Two programmers walk into a foo.",
    "Syntactic sugar.",
    "Try-catch the entire program.",
    "Algorithms in CS are important.",
    "CS is theory, not learning how to program.",
    "Notepad++, Sublime, Vim, Emacs, Atom, Brackets.",
    "Google, Amazon, Facebook, Apple.",
    "I'm moving to the bay area.",
    "Programming is really fun.",
    "MATLAB is not programming.",
    "How many Javascript frameworks are there?",
    "Ruby on Rails.",
    "Check out my Github.",
    "Junior developer role. Required: minimum 5 years experience as a senior developer.",
    "Fast paced agile development team.",
    "Bleeding edge.",
    "So, are you more front-end or back-end? Actually, I'm fullstack.",
    "SASS or CSS first?",
    "CSS Grid is the bees knees."
];