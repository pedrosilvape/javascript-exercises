import { runEvenOdd } from './exercises/even-odd.js'
import { runAgeChecker } from './exercises/age-checker.js'

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
    }
});
