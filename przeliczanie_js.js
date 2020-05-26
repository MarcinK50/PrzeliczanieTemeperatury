var score = "";

class Temperature {
	constructor(value) {
	this.value = value;
	this.score_f_precision =  value -273.15 * 9 / 5 + 32;
	this.score_f = this.score_f_precision.toFixed(2);
	this.score_c = value * 1 - 273.15;
	this.fahrenheit_score = "Wynik w Fahrenheitach: " + this.score_f + ".";
	this.celcius_score = "Wynik w Celsjuszach: " + this.score_c + ".";
	}
	
	fahrenheit_calc() {
		return this.fahrenheit_score;
	}
	
	celcius_calc() {
		return this.celcius_score;
	}
}

function fahrenheit() {
	let fahrenheit_value = document.getElementById("wartosc").value;
	let fahrenheit = new Temperature(fahrenheit_value)

	document.getElementById("wynik").innerHTML = fahrenheit.fahrenheit_calc();
}

function kelvin() {
	let kelvin_value = document.getElementById("wartosc").value;
	let kelvin = new Temperature(kelvin_value)

	document.getElementById("wynik").innerHTML = kelvin.k.score;
}

function celcius() {
	let celcius_value = document.getElementById("wartosc").value;
	let celcius = new Temperature(celcius_value)

	document.getElementById("wynik").innerHTML = celcius.celcius_calc();
}

