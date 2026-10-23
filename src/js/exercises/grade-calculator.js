export function runGradeCalculator() {
    const input1 = prompt(`Enter the first grade (0-10): `);
    const grade1 = Number(input1);
    const input2 = prompt(`Enter the second grade (0-10): `);
    const grade2 = Number(input2);
    let status = '';

    if (input1 === null || input2 === null || input1.trim() === '' || input2.trim() === '' || Number.isNaN(grade1) || Number.isNaN(grade2) || grade1 < 0 || grade2 < 0 || grade1 > 10 || grade2 > 10 ) {
        alert(`Invalid input. Try again.`);
    } else {
        const average = grade1 + grade2 / 2;
        if (average >= 7) {
            status = 'Approved';
        } else if (average >= 5) {
            status = 'Recovery';
        } else {
            status = 'Failed';
        }
        viewGrade(grade1, grade2, average, status);
    }
}

function viewGrade(grade1, grade2, average, status) {
    alert(`
        Grade 1: ${grade1} \n
        Grade 2: ${grade2} \n
        average: ${average.toFixed(2)} \n
        Status: ${status} \n`);
}