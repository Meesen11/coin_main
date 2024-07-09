let balance = 0;
let income = 1; // доход с клика


let title = document.createElement("h1");
title.textContent= ` ${balance}`;

let button = document.createElement("button");
button.textContent = "Нажать";





button.onclick = function () {
  balance+=income;
  title.textContent = `${balance}`;
};

document.body.append(title);
document.body.append(button);
