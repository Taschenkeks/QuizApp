let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wo befindet sich der Head-Bereich?",
        "answer_1": "Unten",
        "answer_2": "Oben",
        "answer_3": "Links",
        "answer_4": "Rechts",
        "right_answer": 2
    },
    {
        "question": "Was befindet sich im img-Tag?",
        "answer_1": "Ein Bild",
        "answer_2": "Ein Textfeld",
        "answer_3": "Ein Taschenrechner",
        "answer_4": "Ein String",
        "right_answer": 1
    },
    {
        "question": "Wie erstellt man einen Knopf?",
        "answer_1": "includebutton",
        "answer_2": "Knopf",
        "answer_3": "btn",
        "answer_4": "button",
        "right_answer": 4
    },
    {
        "question": "Mit welchem Symbol erstellt man das Grundgerüst von HTML?",
        "answer_1": "?",
        "answer_2": "!",
        "answer_3": "$",
        "answer_4": "%",
        "right_answer": 2
    },
];

let rightQuestions = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('audio/success.wav');
let AUDIO_FAIL = new Audio('audio/fail.wav');

function init() {
    document.getElementById('quizlength').innerHTML = questions.length;

    showQuestion()

}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        endScreen();

    } else { //showQuestion
        updateProgress();
        updateQuestion();
        
    }
}

function endScreen() {

    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountRight').innerHTML = rightQuestions;
    document.getElementById('header-img').src = 'img/tropy.png';
}

function updateQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
}

function updateProgress() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress').innerHTML = `${percent} %`;
    document.getElementById('progress').style.width = `${percent}%`;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();

    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}

function restart() {
    document.getElementById('header-img').src = 'img/backround.jpg';
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('question-body').style = '';

    init();


}

