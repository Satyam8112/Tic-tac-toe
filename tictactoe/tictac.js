let box = document.querySelector('.score');
let img1 = document.querySelector('#im1');
let img2 = document.querySelector('#im2');
let resultEl = document.getElementById('result');
let i = 0;

const div1 = document.getElementById('1');
const div2 = document.getElementById('2');
const div3 = document.getElementById('3');
const div4 = document.getElementById('4');
const div5 = document.getElementById('5');
const div6 = document.getElementById('6');
const div7 = document.getElementById('7');
const div8 = document.getElementById('8');
const div9 = document.getElementById('9');

img1.style.transform = 'scale(1.2)';
img2.style.transform = 'scale(1.0)';

function setMark(el, mark) {
    el.textContent = mark;
    el.classList.remove('mark-o', 'mark-x');
    el.classList.add(mark === 'O' ? 'mark-o' : 'mark-x');
}

function clearMarks() {
    document.querySelectorAll('.grid').forEach(function (cell) {
        cell.classList.remove('mark-o', 'mark-x');
    });
}

box.addEventListener('click', function (event) {
    if (resultEl.textContent !== '') return;

    if (event.target.classList.contains('grid') && event.target.textContent === '') {
        if (i % 2 === 0) {
            img1.style.transform = 'scale(1.0)';
            img2.style.transform = 'scale(1.2)';
            setMark(event.target, 'O');
        } else {
            img1.style.transform = 'scale(1.2)';
            img2.style.transform = 'scale(1.0)';
            setMark(event.target, 'X');
        }
        i++;
    }

    if (
        (div1.textContent === 'X' && div2.textContent === 'X' && div3.textContent === 'X') ||
        (div4.textContent === 'X' && div5.textContent === 'X' && div6.textContent === 'X') ||
        (div7.textContent === 'X' && div8.textContent === 'X' && div9.textContent === 'X') ||
        (div1.textContent === 'X' && div4.textContent === 'X' && div7.textContent === 'X') ||
        (div2.textContent === 'X' && div5.textContent === 'X' && div8.textContent === 'X') ||
        (div3.textContent === 'X' && div6.textContent === 'X' && div9.textContent === 'X') ||
        (div1.textContent === 'X' && div5.textContent === 'X' && div9.textContent === 'X') ||
        (div3.textContent === 'X' && div5.textContent === 'X' && div7.textContent === 'X')
    ) {
        resultEl.textContent = 'Winner is X';
        resultEl.className = 'result winner-x';
    } else if (
        (div1.textContent === 'O' && div2.textContent === 'O' && div3.textContent === 'O') ||
        (div4.textContent === 'O' && div5.textContent === 'O' && div6.textContent === 'O') ||
        (div7.textContent === 'O' && div8.textContent === 'O' && div9.textContent === 'O') ||
        (div1.textContent === 'O' && div4.textContent === 'O' && div7.textContent === 'O') ||
        (div2.textContent === 'O' && div5.textContent === 'O' && div8.textContent === 'O') ||
        (div3.textContent === 'O' && div6.textContent === 'O' && div9.textContent === 'O') ||
        (div1.textContent === 'O' && div5.textContent === 'O' && div9.textContent === 'O') ||
        (div3.textContent === 'O' && div5.textContent === 'O' && div7.textContent === 'O')
    ) {
        resultEl.textContent = 'Winner is O';
        resultEl.className = 'result winner-o';
    } else if (
        div1.textContent !== '' && div2.textContent !== '' && div3.textContent !== '' &&
        div4.textContent !== '' && div5.textContent !== '' && div6.textContent !== '' &&
        div7.textContent !== '' && div8.textContent !== '' && div9.textContent !== ''
    ) {
        resultEl.textContent = 'Match Drawn';
        resultEl.className = 'result winner-draw';
    }
});

function resetResultClass() {
    resultEl.className = 'result';
}

document.getElementById('Restart').addEventListener('click', function () {
    i = 0;
    img1.style.transform = 'scale(1.2)';
    img2.style.transform = 'scale(1.0)';
    resultEl.textContent = '';
    resetResultClass();
    document.querySelectorAll('.grid').forEach(function (cell) {
        cell.textContent = '';
    });
    clearMarks();
});
