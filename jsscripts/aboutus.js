function resetTotalScore() {
    document.getElementById('no-of-correct-answers').textContent = '';
}

function checkAns() {
    let correct_Answers = 0;
    if (document.getElementById('q1b').checked) {
        correct_Answers ++;
    }
    if (document.getElementById('q2a').checked) {
        correct_Answers ++;
    }
    if (document.getElementById('q3b').checked) {
        correct_Answers ++;
    }
    if (document.getElementById('q4a').checked) {
        correct_Answers ++;
    }
    if (document.getElementById('q5a').checked) {
        correct_Answers ++;
    }
    document.getElementById('no-of-correct-answers').textContent = correct_Answers;
}   