/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ["♦", "♥", "♠", "♣"];
  let valor = Math.floor(Math.random() * 14);
  let aux = Math.floor(Math.random() * palo.length);
  let paloC = palo[aux];
  if (valor <= 1) valor = "A";
  if (valor == 11) valor = "J";
  if (valor == 12) valor = "Q";
  if (valor == 13) valor = "K";
  if (aux <= 1) {
    let myColor = document.querySelectorAll(".fontSuit");
    Array.from(myColor).forEach(function(item) {
      item.classList.add("redSuit");
    });
  }

  let myCard = document.querySelector(".fontOne");
  myCard.innerHTML = valor;

  let mySuit = document.querySelectorAll(".fontSuit");
  Array.from(mySuit).forEach(function(elem) {
    elem.innerHTML = paloC;
  });
};
