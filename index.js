if (getState() === 100) {
    toggleDisable(true);
}

function getState() {
    return +localStorage.getItem('state');
}

function setState(value) {
    localStorage.setItem('state', value);

    if (value === 1) {
        toggleDisable(false);
    }
    if (value === 100) {
        toggleDisable(true);
    }
}

function toggleDisable(value) {
    document.getElementById('next-button').disabled = value;
    document.getElementById('complete-button').disabled = value;
}

function FizzBuzz(N) {
    for (let i = 1; i < N; i++) {
        print(i);
    }
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
    const state = getState();

    print(state);
    setState(state + 1);
}

function onCompleteClick() {
    let state = getState();

    while (state < 100) {
        print(state++);
    }
    setState(state);
}

function onResetClick() {
    setState(1);
}

