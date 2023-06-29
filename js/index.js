// переменная действия
var op;
// расчет
function func() {
// переменная для ответа
 var result;
 // число 1 и число 2 
 var num1 = Number(document.getElementById("num1").value);
 var num2 = Number(document.getElementById("num2").value);
 // решение
 switch(op) {
  case '+':
   result = num1 + num2;
   break;
  case '-':
   result = num1 - num2;
   break;
  case '*':
   result = num1 * num2;
   break;
  case '/':
   result = num1 / num2;
   break;
 }
// ответ уже на страницу
 document.getElementById("result").innerHTML = result;
}

// конвертер
 window.onload = function () {
let c = {'USD':'78', 'EUR':'85.60', 'RUB':'1'}; // курс валют
let val = document.getElementById('val'); // ввод данных
let currency1 = document.getElementById('cur1'); // 1 селект
let currency2 = document.getElementById('cur2'); // 2 селект
let result = document.getElementsByClassName('convert_result')[0]; // поле результатов
function summ() { // Делаем функцию
 let z = 0;
  if(currency1.value === currency2.value){ // если равны 
   result.innerText = val.value; // То вписываем данные
  } else {
  if(currency1.value != 'RUB'){ // Если не равны рублю, то
   z = val.value*c[currency1.value]; // Переводим сумму в рубли
   result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
  } else { // Если не равны
   result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    }
    val.oninput = function () { // при вводе данных вызывается функция
        summ();
    };
    currency1.onchange = function () { // смена 1 селектора выводит функцию
        summ();
    };
    currency2.onchange = function () { // смена 2 селектора выводит функцию
        summ(); 
    }
}
