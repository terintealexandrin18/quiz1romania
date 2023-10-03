
// Variable
const startQuiz = document.getElementById('start-btn');
const rules = document.getElementById('quiz-rules');
const noRules = document.getElementById('close-rules');

//event listeners fot Start Button, 
startQuiz.addEventListener('click', hideButton, false);
rules.addEventListener('click', showRules);
noRules.addEventListener('click', hideRules);
// Function Hide Buttons
function hideButton() {
    this.style.display = 'none';
}

// Function Show Rules
function showRules() {
    document.getElementById('quiz-instruction').style.display = 'block';
}

// Function Hide Rules
function hideRules() {
    document.getElementById('quiz-instruction').style.display = 'none';
}