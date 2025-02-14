const toggleCircle = document.getElementById("togglecircle");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const body = document.getElementsByTagName("body");
const toggle = document.getElementById("toggle");
const bg = document.getElementById("background");
const check = document.getElementById("check");
const texto = document.getElementById("p");
let day = false;

for (let i of [...Array(320).keys()]) {
  document.getElementById("bg").innerHTML += "<div class='estrela'></div>";
}

check.addEventListener("change", () => {
  day = !day;
  day ? (bg.style.opacity = "1") : (bg.style.opacity = "0");
  toggle.classList.toggle("night");
  toggleCircle.classList.toggle("nightcircle");

  setTimeout(() => {
    section1.style.display = "flex";
    section2.style.display = "none";
    // typeWrite(texto);
  }, 250);
});

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  console.log(textoArray);
  elemento.innerHTML = " ";
  setTimeout(() => {
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 70 * i);
    });
  }, 100);
}

// typeWrite(texto)

// offsetX = 1365
// offsetY = 632

// window.addEventListener("mousemove", (e) => {
//   console.log(e.offsetX, e.offsetY);
// });
