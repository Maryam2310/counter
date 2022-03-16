let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');
let number = document.querySelector('.number');
let num = 0;


increment.addEventListener('click', () => {
    num += 1;
    number.innerHTML = num;

});



decrement.addEventListener('click', () => {
    num -= 1;
    number.innerHTML = num;

});


reset.addEventListener('click', () => {

    number.innerHTML = 0;

})


