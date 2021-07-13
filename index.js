const MIN = 0;
const MAX = 100;

// --- state ---

if (getState() === MAX) {
    toggleDisable(true);
}

function getState() {
    return +localStorage.getItem('state');
}

function setState(value) {
    localStorage.setItem('state', value);

    if (value === MIN) {
        toggleDisable(false);
    }
    if (value === MAX) {
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
    if (!result) {
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
    const a = item - 1 > MIN ? FizzBuzz(item - 1) : null;
    const b = FizzBuzz(item);
    const c = item + 1 <= MAX ? FizzBuzz(item + 1) : null;

    outputResult(a, b, c);
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

        if (state < MAX) {
            step(++state);
        }
    }
    step();

    setState(state);
}

function onResetClick() {
    setState(MIN);
    removeResult();
}

