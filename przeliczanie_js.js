var pole;
var wynik;

function fahrenheit() {
  pole = document.getElementById("wartosc").value;
  wynik = pole * 1.8 + 32;

  document.getElementsById("wynik").innerHTML = "Wynik przeliczenia w Fahrenheitach: "+wynik;
}

function kelvin() {
  pole = document.getElementById("wartosc").value;
  wynik = pole + 273.15;

  document.getElementsById("wynik").innerHTML = "Wynik przeliczenia w Kelvinach: "+wynik;
}
