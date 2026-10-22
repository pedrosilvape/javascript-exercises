export function runAgeChecker() {
    const input = prompt('Enter the age to be checked: ') 
    const age = Number(input);
    if (input === null || input.trim() === '' || !Number.isInteger(age) || age < 0) {
        alert('Invalid input. Try again.');
    } else if (age <= 12){
        alert( age + ' is the age of a child.')
    } else if (age <= 17) {
        alert( age + ' is the age of an adolescent.')
    } else if (age <= 59) {
        alert( age + ' is the age of an adult')
    } else {
        alert( age + ' is the age of an elderly individual')
    }
}