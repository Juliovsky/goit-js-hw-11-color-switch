'use strict';
const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', backgroundChanger);
refs.stop.addEventListener('click', changeStop);

let isActive = false;

let timerId = null;

function backgroundChanger() {
    if (!isActive) {
        isActive = true;
        timerId = setInterval(() => {
            refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
        }, 1000);
    }

}

function changeStop() {
    clearInterval(timerId);
    isActive = false;
}