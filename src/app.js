/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusas").innerHTML = excusas();
  });
};

function excusas() {
  let who = ["Un perro", "Un gato", "Una tortuga", "Un pajaro"];
  let what = [
    "se comio mi bocadillo",
    "me tiro al suelo",
    "me aplasto",
    "me robo el coche"
  ];
  let when = [
    "antes de clase",
    "en el gimnasio",
    "en la calle",
    "en el trabajo",
    "en casa"
  ];

  return (
    who[Math.floor(Math.random() * who.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
}
