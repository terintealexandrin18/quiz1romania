
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
const restartBtn = document.getElementById('restart');
const outputUsername = document.getElementById('output');
const formUsername = document.getElementById('form-username');
let rulesForUsername = document.getElementById('username-rule');
let currentQuestionNumber = document.getElementById('question-number');
let shuffledQuestions, currentQuestionIndex;
let hasAnswered = false;
let quizScore = document.getElementById('final-score');
let score = 0;

//event listeners 
rules.addEventListener('click', showRules);
noRules.addEventListener('click', hideRules);
start.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);


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

// Function for username
const output = document.getElementById('output');
formUsername.addEventListener('submit', function (event) {
    event.preventDefault();
    var usernameInput = document.getElementById('namefield');
    var username = usernameInput.value.trim(); // Trim removes the blank/empty spaces
    output.innerHTML = `${username}: please press the button below to begin the quiz.`;
    start.classList.remove('hide');
    formUsername.classList.add('hide');
    rulesForUsername.classList.add('hide');
    outputUsername.classList.remove('hide');
    if (username === '') {

        event.preventDefault(); // Prevent the form from submitting
        rulesForUsername.classList.remove('hide');
        start.classList.add('hide');
        document.getElementById('username-rule').innerHTML = `It appears that the username field is currently blank. Kindly type in a username to proceed.`;
        formUsername.classList.remove('hide');
        outputUsername.classList.add('hide');
    }
});



// Function start the quiz
function startQuiz() {
    outputUsername.classList.add('hide');
    start.classList.add('hide');
    questionContainer.classList.remove('hide');
    quizIntroduction.classList.add('hide');
    //shuffled - function from Web Dev Simplified
    shuffledQuestions = questions.sort(() => Math.random() - .5).slice(0);
    currentQuestionIndex = 0;
    setNextQuestion();
}
//Function set the nex question
function setNextQuestion() {
    // function from Web Dev Simplified
    resetState();
    appearQuestion(shuffledQuestions[currentQuestionIndex]);
    quizCounter(); // Update the displayed question number

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

        setTimeout(finishQuiz, 6000); // Add time for the user to check the last answers.
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

// Function Show Question number
function quizCounter() {
    const totalQuestions = questions.length;
    displayedQuestionNumber = currentQuestionIndex + 1;
    currentQuestionNumber.textContent = `Question ${displayedQuestionNumber} of ${totalQuestions}`;

}
// to add comment 
function finishQuiz() {
    quizScore.classList.remove('hide');
    endOfQuiz.classList.add('hide');
    questionQuiz.classList.add('hide');
    answerButton.removeAttribute('id');
    answerButton.classList.add('hide');
    restartBtn.classList.remove('hide');
    var usernameInput = document.getElementById('namefield');
    var username = usernameInput.value;


    if (score >= 9) {
        document.getElementById('final-score').innerHTML = `Congratulations! ${username} You have amazing knowledge about Romania. You answered ${score} out of 10 questions correctly.`;
    }
    else if (score >= 7 && score <= 8) {
        document.getElementById('final-score').innerHTML = `Congratulations! ${username} You have good knowledge about Romania. You answered ${score} out of 10 questions correctly.`;
    }
    else if (score >= 5 && score <= 6) {
        document.getElementById('final-score').innerHTML = `Congratulations! ${username} You have basic knowledge about Romania. You answered ${score} out of 10 questions correctly.`;
    }
    else {
        document.getElementById('final-score').innerHTML = `Sorry ${username} You didn't pass the basic Romania Quiz. You answered ${score} out of 10 questions correctly.`;
    }
}
//Function Restart 

function restartQuiz() {
    location.reload();

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
    },
    {
        question: 'To which of these is the Romanian language closest?',
        answers: [
            { text: 'Latin', correct: true },
            { text: 'Ukrainian', correct: false },
            { text: 'Turkish', correct: false },
            { text: 'Greek', correct: false }
        ]
    },
    {
        question: 'The fabled Count Dracula portrayed in Bram Stokers famous tale is actually based on a Romanian ruler.His name was: ',
        answers: [
            { text: 'Mircea Cel Mare', correct: false },
            { text: 'Vlad Tepes', correct: true },
            { text: 'Ioan Voda', correct: false },
            { text: 'Alexandru Cel Bun', correct: false }
        ]
    },
    {
        question: 'In which Castle from Romania was Wednesday filmed?',
        answers: [
            { text: 'Bran Castle in Brasov', correct: false },
            { text: 'Peles Castle in Sinaia', correct: false },
            { text: 'Cantacuzino Castle in Busteni', correct: true },
            { text: 'Corvin Castle in Hunedoara', correct: false }
        ]
    },
    {
        question: 'Who is a Romanian gymnast, born in the region of Moldavia, performing the floor exercise at the 1976 Olympic Games in Montreal and was first in obtaining the perfect score, 10?',
        answers: [
            { text: 'Teodora Ungureanu', correct: false },
            { text: 'Nadia Comaneci', correct: true },
            { text: 'Daniela Silivas', correct: false },
            { text: 'Simona Halep', correct: false }
        ]
    },
    {
        question: 'When did Romania get the membership of the European Union?',
        answers: [
            { text: '2000', correct: false },
            { text: '1996', correct: false },
            { text: '2006', correct: false },
            { text: '2007', correct: true }
        ]
    },
    {
        question: 'What is the most practicing religion in Romania?',
        answers: [
            { text: 'Orthodoxy', correct: true },
            { text: 'Catholicism', correct: false },
            { text: 'Protestantism', correct: false },
            { text: 'Islam', correct: false }
        ]
    },
    {
        question: 'What is the oldest Monastery in Romania',
        answers: [
            { text: 'Sucevita Monastery', correct: false },
            { text: 'Neamt Monastery', correct: true },
            { text: 'Voronet Monastery', correct: false },
            { text: 'Putna Monastery', correct: false }
        ]
    },
    {
        question: 'What is the most popular dish in Romania',
        answers: [
            { text: 'Ciorba de burta (Beef Tripe Soup)', correct: false },
            { text: 'Mici (Grilled Minced Meat Rolls)', correct: false },
            { text: 'Sarmale (Cabbage Rolls)', correct: true },
            { text: 'Mamaliga (Polenta)', correct: false }
        ]
    },
    {
        question: 'What is the second largest building in the world after the Pentagon, and where is it located?',
        answers: [
            { text: 'The Peoples Salvation Cathedral(Catedrala Mântuirii Neamului) - Bucharest ', correct: false },
            { text: 'Globalworth Tower - Bucharest', correct: false },
            { text: 'The House of People (Casa Poporului) - Bucharest', correct: true },
            { text: 'Floreasca City Center Sky Tower - Bucharest', correct: false }
        ]
    },
    {
        question: 'When did Romania become free from communism?',
        answers: [
            { text: '1877', correct: false },
            { text: '1989', correct: true },
            { text: '1979', correct: false },
            { text: '1990', correct: false }
        ]
    },

];