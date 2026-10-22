export function runEvenOdd() {
    const input = prompt('Enter the number to be checked: ');
    const num = Number(input);

    if (input === null || input.trim() === '' || !Number.isInteger(num)) {
        alert('Invalid input. Try again.');
    } else if (num % 2 !== 0) {
        alert('The number ' + num + ' is odd, because it leaves a remainder when divided by 2.');
    } else {
        alert('The number ' + num + ' is even, as it leaves no remainder when divided by 2.');
    }
}