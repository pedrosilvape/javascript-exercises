export function runPalindromeChecker() {
    let input = prompt('Enter the word: ');
    if (input === null || input.trim() === '') {
        return
    } else {
        input = input.toLowerCase().replace(/[^a-z]/g, '');
        let inputLetters = input.split("")
        let inputLettersReverse = inputLetters.reverse();
        let inputReverse = inputLettersReverse.join("");
        if (input === inputReverse) {
            alert (`The word "${input}" is a palindrome.\nThe reverse word: ${inputReverse}`)
        } else {
            alert (`The word "${input}" is not a palindrome.\nThe reverse word: ${inputReverse}`)
        }
    }
}
