export function runNumChecker() {
    const numbers = []
    let cancelled = false;

    for (let i = 0; i < 5; i++) {
        let input = prompt(`Enter the numbers to be checked:`);

        if (input === null) {
            cancelled = true;
            break;
        }

        let num = Number(input);

        while (input.trim() === '' || !Number.isInteger(num)) {
            input = prompt(`Invalid input. Try again.\nEnter the number to be checked:`);

            if (input === null) {
                cancelled = true;
                break;
            }

            num = Number(input);
        }

        if (cancelled) {
            break
        }

        numbers[i] = num;
    }

    if (cancelled) {
        alert(`Exercise cancelled.`);
        return;
    }

    analyzeNumber(numbers);
}

function analyzeNumber(numbers) {
    let sum = 0;
    let average = 0;
    let bigger = numbers[0];
    let smaller = numbers[0];
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (bigger < element) {
            bigger = element;
        } 
        if (smaller > element){
            smaller = element;
        }
        if (element % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
        sum += element;
    }
    average = sum / numbers.length
    alert (`
        Sum: ${sum}\n
        Average: ${average.toFixed(2)}\n
        Bigger: ${bigger}\n
        Smaller: ${smaller}\n
        Even Count: ${evenCount}\n
        Odd Count: ${oddCount}\n
        `)
}