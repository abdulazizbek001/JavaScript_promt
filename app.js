const elRezult = document.querySelector('.rezult');
const elRezult2 = document.querySelector('.rezult2');
const elRezult3 = document.querySelector('.rezult3');
const elRezult4 = document.querySelector('.rezult4');
const elRezult5 = document.querySelector('.rezult5');
const elRezult6 = document.querySelector('.rezult6');
const arr = ["bir", "ikki", "uch", "html", "css", "sass"];
const elPromt = prompt();

if (elPromt == 1) {
    elRezult.textContent = arr.shift(1);
} else if (elPromt == 2) {
    elRezult.textContent = arr.shift(1);
    elRezult2.textContent = arr.shift(2);
} else if (elPromt == 3) {
    elRezult.textContent = arr.shift(1);
    elRezult2.textContent = arr.shift(2);
    elRezult3.textContent = arr.shift(3);
} else if (elPromt == 4) {
    elRezult.textContent = arr.shift(1);
    elRezult2.textContent = arr.shift(2);
    elRezult3.textContent = arr.shift(3);
    elRezult4.textContent = arr.shift(4);
} else if (elPromt == 5) {
    elRezult.textContent = arr.shift(1);
    elRezult2.textContent = arr.shift(2);
    elRezult3.textContent = arr.shift(3);
    elRezult4.textContent = arr.shift(4);
    elRezult5.textContent = arr.shift(5);
} else if (elPromt == 6) {
    elRezult.textContent = arr.shift(1);
    elRezult2.textContent = arr.shift(2);
    elRezult3.textContent = arr.shift(3);
    elRezult4.textContent = arr.shift(4);
    elRezult5.textContent = arr.shift(5);
    elRezult6.textContent = arr.shift(6);
} else if (elPromt == '') {
    elRezult.textContent = 'Iltimos qayta urinib ko`ring';
}