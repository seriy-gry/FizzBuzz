const MIN = 0;
const MAX = 100;

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
        console.log('done');
    }
}

function toggleDisable(value) {
    document.getElementById('next-button').disabled = value;
    document.getElementById('complete-button').disabled = value;
}

function print(item) {
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

    console.log(result);
}

function getRemainder(item, number) {
    return item - Math.floor(item / number) * number;
}

function onNextClick()  {
    const state = getState() + 1;

    print(state);
    setState(state);
}

function onCompleteClick() {
    let state = getState() + 1;

    const step = () => {
        print(state);

        if (state < MAX) {
            step(++state);
        }
    }
    step();

    setState(state);
}

function onResetClick() {
    setState(MIN);
}

