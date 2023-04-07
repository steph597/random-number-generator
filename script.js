const number = document.getElementById('number');
const button = document.getElementById('btn');

const random = function () {
    const randomNumber = Math.floor(Math.random() * 20 + 1);
    number.textContent = randomNumber;
}

button.addEventListener('click', random);

