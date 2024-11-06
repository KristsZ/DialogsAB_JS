function funkcijas_vaards_1(){}

function funkcijas_vaards_2(){return 1;}

function square(number) {
    return number * number;
  }

  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  

funkcijas_vaards_1();
funkcijas_vaards_2();

document.getElementById("demo").innerHTML = `Skaitļa ${5} kvadrāts ir ${square (5)}`;
document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + `<br>Skaitļa ${7} kvadrāts ir ${square (7)}`;

console.log(`Faktoriāls no ${3} ir ${factorial(3)}`);
