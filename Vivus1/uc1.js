let btn = document.querySelector(".btn");

let hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}

function getRandomBtnHexColor() {
  let btnColor = "#";
  for (let i = 0; i < 6; i++) {
    btnColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return btnColor;
}

function getRandomBtnTextHexColor() {
  let btntColor = "#";
  for (let i = 0; i < 6; i++) {
    btntColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return btntColor;
}

let h = [60, 70, 80, 90, 50, 40, 100];
let w = [140, 130, 120, 150, 160, 170, 180];

function btnH() {
  let setH;
  let setW;
  for (let i = 0; i < 7; i++) {
    setH = h[i];
    setW = w[i];
  }
}

function btnW() {
    let setW;
    for (let i = 0; i < 7; i++) {
      setW = w[i];
    }
    return setW;
  }

btn.addEventListener("click", function () {
  setInterval(function () {
    let bgc = getRandomHexColor();
    let btn_bgc = getRandomBtnHexColor();
    let btn_t_bgc = getRandomBtnTextHexColor();
    document.getElementsByClassName("bd")[0].style.backgroundColor = bgc;
    document.getElementsByClassName("btn")[0].style.backgroundColor = btn_bgc;
    document.getElementsByClassName("btn")[0].style.color = btn_t_bgc;
  }, 1000);
});
