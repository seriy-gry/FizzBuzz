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

FizzBuzz(100);
