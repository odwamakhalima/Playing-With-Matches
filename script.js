var number = document.querySelector('.fav');
var number2 = document.querySelector('.fav2');
var number3 = document.querySelector('.fav3');
function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;

}
number.innerHTML = getRandomArbitrary(1,9).toFixed();
number2.innerHTML = getRandomArbitrary(1,9).toFixed();
number3.innerHTML = getRandomArbitrary(1,9).toFixed();