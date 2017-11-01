var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var paragraph_number = document.getElementById("paragraph_number")

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