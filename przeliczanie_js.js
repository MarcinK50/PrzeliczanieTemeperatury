var score = "";

class Temperature {
	constructor(value) {
	this.value = value;
	this.fahrenheit_score = "Wynik w Fahrenheitach: " + this.score_f + ".";
	this.celcius_score = "Wynik w Celsjuszach: " + this.score_c + ".";
	this.kelvin_score = "Wynik w Kelvinach: " + this.score_k + ".";
	}
	
	fahrenheit() {
		this.score_f_precision =  (this.value - 273.15) * 9 / 5 + 32;
		this.score_f = this.score_f_precision.toFixed(2);
		return this.score_f;
	}
	
	celcius() {
		this.score_c = (this.value - 273.15);
		return this.celcius_score;
	}
	
	kelvin() {
		return this.kelvin_score;
	}
}

function kelvin() {
	let kelvin_value = document.getElementById("wartosc").value;
	let kelvin = new Temperature(kelvin_value);

	document.getElementById("wynik").innerHTML = kelvin.kelvin();
}

function fahrenheit() {
	let fahrenheit_value = document.getElementById("wartosc").value;
	let fahrenheit = new Temperature(fahrenheit_value);

	document.getElementById("wynik").innerHTML = fahrenheit.fahrenheit();
}

function kelvin() {
	let kelvin_value = document.getElementById("wartosc").value;
	let kelvin = new Temperature(kelvin_value)

	document.getElementById("wynik").innerHTML = kelvin.k.score;
}

function celcius() {
	let celcius_value = document.getElementById("wartosc").value;
	let celcius = new Temperature(celcius_value)

	document.getElementById("wynik").innerHTML = celcius.celcius();
}
