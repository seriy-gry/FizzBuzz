const MIN = 0;
const MAX = 100;

// --- state ---

let start = MIN;
let end = MAX;

if (getState() === end) {
    toggleDisable(true);
}

function getState() {
    return +localStorage.getItem('state');
}

function setState(value) {
    localStorage.setItem('state', value);

    if (value === start) {
        toggleDisable(false);
    }
    if (value === end) {
        toggleDisable(true);
        outputResult('done');
    }
}

function toggleDisable(value) {
    document.getElementById('next-button').disabled = value;
    document.getElementById('complete-button').disabled = value;
}

// --- FizzBuzz ---

function FizzBuzz(item) {
    let result = '';
    if (!getRemainder(item, 3)) {
        result += 'Fizz';
    }
    if (!getRemainder(item, 5)) {
        result += 'Buzz';
    }
    if (!result || !item) {
        result = item;
    }

    return result;
}

function getRemainder(item, number) {
    return item - Math.floor(item / number) * number;
}

// --- output ---

function outputResult(...args) {
    const output = document.getElementById('output-results');

    const tr = document.createElement('tr');
    args.forEach((arg) => tr.appendChild(createCell(arg)));

    output.appendChild(tr);
}

function removeResult() {
    const output = document.getElementById('output-results');
    output.innerHTML = '';
}

function createCell(value) {
    const td = document.createElement('td');
    const text = document.createTextNode(value);
    td.appendChild(text);

    return td;
}

function processResult(item) {
    const a = item - 1 > start ? FizzBuzz(item - 1) : '';
    const b = FizzBuzz(item);
    const c = item + 1 <= end ? FizzBuzz(item + 1) : '';

    outputResult(a, b, c);
}

function setError(value) {
    const error = document.getElementById('error-block');
    const text = document.createTextNode(value);
    error.appendChild(text);
}

function removeError() {
    const error = document.createElement('error-block');
    error.innerHTML = '';
}

// --- events ---

function onNextClick()  {
    const state = getState() + 1;

    processResult(state);
    setState(state);
}

function onCompleteClick() {
    let state = getState() + 1;

    const step = () => {
        processResult(state);

        if (state < end) {
            step(++state);
        }
    }
    step();

    setState(state);
}

function onResetClick() {
    setState(start);
    removeResult();
}

function onMinChange(value) {
    if (value >= end) {
        setError('error, the start number must be smaller than the end number');
        return;
    }

    start = +value;
    removeError();
}

function onMaxChange(value) {
    if (value <= start) {
        setError('error, the start number must be smaller than the end number');
        return;
    }

    end = +value;
    removeError();
}

