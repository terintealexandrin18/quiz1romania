
// Variable
const start = document.getElementById('start-btn');
const rules = document.getElementById('quiz-rules');
const noRules = document.getElementById('close-rules');
const questionContainer = document.getElementById('question-container');
const quizIntroduction = document.getElementById('quiz-header');
const questionQuiz = document.getElementById('questions-quiz');
const answerButton = document.getElementById('answer-btn');
const nextButton = document.getElementById('next-btn');
const endOfQuiz = document.getElementById('for-final-score');
let shuffledQuestions, currentQuestionIndex;
let hasAnswered = false;
let quizScore = document.getElementById('final-score');
let score = 0;

//event listeners 
rules.addEventListener('click', showRules);
noRules.addEventListener('click', hideRules);
start.addEventListener('click', startQuiz);
// function from Web Dev Simplified
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Function Show Rules
function showRules() {
    document.getElementById('quiz-instruction').style.display = 'block';
}

// Function Hide Rules
function hideRules() {
    document.getElementById('quiz-instruction').style.display = 'none';
}

// Function start the quiz
function startQuiz() {
    start.classList.add('hide');
    questionContainer.classList.remove('hide');
    quizIntroduction.classList.add('hide');
    //shuffled - function from Web Dev Simplified
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}
//Function set the nex question
function setNextQuestion() {
    // function from Web Dev Simplified
    resetState();
    appearQuestion(shuffledQuestions[currentQuestionIndex]);

}
// function from Web Dev Simplified
function appearQuestion(question) {
    questionQuiz.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);
    });
}
// function from Web Dev Simplified
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild
            (answerButton.firstChild);
    }
}

// function from Web Dev Simplified
function selectAnswer(event) {
    const clickAnswer = event.target;
    const correct = clickAnswer.dataset.correct;
    setStatusClass(document.body, correct);
    if (correct) score++;
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.removeEventListener('click', selectAnswer); // Increment the score once even if click multiple times.
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        finishQuiz();
    }
    if (correct) {
        incrementCorrectScore();
    } else {
        incrementWrongAnswer();
    }
    hasAnswered = true;
}
// function from Web Dev Simplified

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//Function Increment Correct Score - Code from CodeInstitute 
//Score from the current DOM and Increments it by 1

function incrementCorrectScore() {
    let oldScore = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++oldScore;
}

//Function Increment Incorrect Score - Code from CodeInstitute;
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect-score').innerText);
    document.getElementById('incorrect-score').innerText = oldScore + 1;
}

function finishQuiz() {
    quizScore.classList.remove('hide');
    endOfQuiz.classList.add('hide');
    if (score >= 9) {
        document.getElementById('final-score').innerHTML = `Congratulations! You have amazing knowledge about Romania. You answered ${score} out of 10 questions correctly.`;
    }
    else if (score >= 7 && score <= 8) {
        document.getElementById('final-score').innerHTML = `Congratulations! You have good knowledge about Romania. You answered ${score} out of 10 questions correctly.`;
    }
    else if (score >= 5 && score <= 6) {
        document.getElementById('final-score').innerHTML = `Congratulations! You have basic knowledge about Romania. You answered ${score} out of 10 questions correctly.`;
    }
    else {
        document.getElementById('final-score').innerHTML = `Sorry you didn't pass the basic Romania Quiz. You answered ${score} out of 10 questions correctly.`;
    }
}

const questions = [
    {
        question: 'What is the Romanian capital?',
        answers: [
            { text: 'Alba-Iulia', correct: false },
            { text: 'Constanta', correct: false },
            { text: 'Brasov', correct: false },
            { text: 'Bucuresti', correct: true }
        ]
    },
    {
        question: 'What is the Romanian currency?',
        answers: [
            { text: 'Leu', correct: true },
            { text: 'Lev', correct: false },
            { text: 'Romanian franc', correct: false },
            { text: 'Euro', correct: false }
        ]
    },
    {
        question: 'What are the colors appearing on the Romanian flag?',
        answers: [
            { text: 'Red, white and green', correct: false },
            { text: 'Red, yellow and blue', correct: true },
            { text: 'Red, white and blue', correct: false },
            { text: 'Green, yellow and blue', correct: false }
        ]
    },
    {
        question: 'Where do you go if you are in Romania and you want to go to the seaside?',
        answers: [
            { text: 'Red Sea', correct: false },
            { text: 'Yellow Sea', correct: false },
            { text: 'Black Sea', correct: true },
            { text: 'White Sea', correct: false }
        ]
    },
    {
        question: 'What is the biggest river bordering Romania?',
        answers: [
            { text: 'Vltava', correct: false },
            { text: 'Danube', correct: true },
            { text: 'Volga', correct: false },
            { text: 'Olt', correct: false }
        ]
    },
    {
        question: 'What are the highest mountains in Romania?',
        answers: [
            { text: 'Alps', correct: false },
            { text: 'Romanian Andes', correct: false },
            { text: 'Himalaya', correct: false },
            { text: 'Carpathians', correct: true }
        ]
    },
    {
        question: 'What is Romania code on the internet?',
        answers: [
            { text: '.rm', correct: false },
            { text: '.ra', correct: false },
            { text: '.ro', correct: true },
            { text: '.rr', correct: false }
        ]
    },
    {
        question: 'Which of the following countries is NOT a neighbour of Romania?',
        answers: [
            { text: 'Moldova', correct: false },
            { text: 'Russia', correct: true },
            { text: 'Hungary', correct: false },
            { text: 'Bulgaria', correct: false }
        ]
    },
    {
        question: 'Which of the following climates is the Romanian one?',
        answers: [
            { text: 'Temperate', correct: true },
            { text: 'Tropical', correct: false },
            { text: 'Mediterranean', correct: false },
            { text: 'Polar', correct: false }
        ]
    },
    {
        question: 'What is the highest peak in Romania?',
        answers: [
            { text: 'Tatra', correct: false },
            { text: 'Negoiu', correct: false },
            { text: 'Moldoveanu', correct: true },
            { text: 'Rodna', correct: false }
        ]
    }
];