let state = 1;

function setState(value) {
    state = value;

    if (state === 1) {
        toggleDisable(false);
    }
    if (state === 100) {
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
    print(state);
    setState(state + 1);
}

function onCompleteClick() {
    while (state < 100) {
        print(state);
        setState(state + 1);
    }
}

function onResetClick() {
    setState(1);
}

