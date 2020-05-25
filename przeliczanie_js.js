var score = "";

function Temperature(value) {
	this.value = value
	this.score_f = value * 1.8 + 32
	this.score_k = value * 1 + 273.15
	this.f = {
		score : "Wynik w Fahrenheitach: " + this.score_f + "."
	};
	this.k = {
		score : "Wynik w Kelvinach: " + this.score_k + "."
	};
}

function fahrenheit() {
	let fahrenheit_value = document.getElementById("wartosc").value;
	let fahrenheit = new Temperature(fahrenheit_value)

	document.getElementById("wynik").innerHTML = fahrenheit.f.score;
}

function kelvin() {
	let kelvin_value = document.getElementById("wartosc").value;
	let kelvin = new Temperature(kelvin_value)

	document.getElementById("wynik").innerHTML = kelvin.k.score;
}
