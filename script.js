var number = document.querySelector('.fav');
var number2 = document.querySelector('.fav2');
var number3 = document.querySelector('.fav3');
var mes = document.querySelector('.message')
function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}
number.innerHTML = getRandomArbitrary(1,9).toFixed();
number2.innerHTML = getRandomArbitrary(1,9).toFixed();
number3.innerHTML = getRandomArbitrary(1,9).toFixed();

if(number.innerHTML == number3.innerHTML){
    number.classList.add("highlight");
    number3.classList.add("highlight");
}
if(number.innerHTML == number2.innerHTML){
    number.classList.add("highlight");
    number2.classList.add("highlight");
}
if(number2.innerHTML == number3.innerHTML){
    number3.classList.add("highlight");
    number2.classList.add("highlight");
    mes.innerHTML = number3.innerHTML;
}