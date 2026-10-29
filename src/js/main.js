import { runEvenOdd } from './exercises/even-odd.js'
import { runAgeChecker } from './exercises/age-checker.js'
import { runGradeCalculator } from './exercises/grade-calculator.js'
import { runNumChecker } from './exercises/num-checker.js'
import { runPalindromeChecker } from './exercises/palindrome-checker.js'

const exerciseSelect = document.querySelector('#exercise');
const runButton = document.querySelector('#run-exercise');

runButton.addEventListener('click', () => {
    const selectedExercise = exerciseSelect.value;
        if (selectedExercise === '') {
        alert('Please select an exercise.');
        return;
    } else if (selectedExercise === 'even-odd') {
        return runEvenOdd();
    } else if (selectedExercise === 'age-checker') {
        return runAgeChecker();
    } else if (selectedExercise === 'grade-calculator') {
        return runGradeCalculator();
    } else if (selectedExercise === 'num-checker') {
        return runNumChecker();
    } else if (selectedExercise === 'palindrome-checker') {
        return runPalindromeChecker();
    }
});
