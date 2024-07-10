let balance = 0;
let income = 1; // доход с клика

function dumplings_click() {
  balance += income;
  document.getElementById("balance_display").textContent = balance; // обновляем отображение баланса
}



