/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Función para generar un número entero aleatorio con valor máximo no incluido
const numeroAlAzar = function(valorMax) {
  return Math.floor(Math.random() * valorMax);
};

//Variable global con array de elementos que pertenecen a una clase
let mySuit = document.querySelectorAll(".fontSuit");
let myNumber = document.querySelector(".fontOne");

window.onload = function() {
  //write your code here
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numeroAzar = numeros[numeroAlAzar(numeros.length)];
  let paloAzar = palos[numeroAlAzar(palos.length)];
  if (paloAzar == "♦" || paloAzar == "♥") {
    mySuit.forEach(function(item) {
      item.classList.add("redSuit");
    });
  }
  if (numeroAzar == "10") {
    myNumber.classList.add("newMargin");
  }

  myNumber.innerHTML = numeroAzar;

  mySuit.forEach(function(elem) {
    elem.innerHTML = paloAzar;
  });
};
