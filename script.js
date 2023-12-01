let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer" : 3
    },
    {
        "question": "Wo befindet sich der <Head>-Bereich?",
        "answer_1": "Unten",
        "answer_2": "Oben",
        "answer_3": "Links",
        "answer_4": "Rechts",
        "right_answer" : 2
    },
    {
        "question": "Was befindet sich im <img> Tag?",
        "answer_1": "Ein Bild",
        "answer_2": "Ein Textfeld",
        "answer_3": "Ein Taschenrechner",
        "answer_4": "Ein String",
        "right_answer" : 1
    },
    {
        "question": "Wie erstellt man einen Knopf?",
        "answer_1": "includebutton",
        "answer_2": "<Knopf>",
        "answer_3": "<btn>",
        "answer_4": "<button>",
        "right_answer" : 4
    },
    {
        "question": "Mit welchem Symbol erstellt man das Grundgerüst von HTML?",
        "answer_1": "?",
        "answer_2": "!",
        "answer_3": "$",
        "answer_4": "%",
        "right_answer" : 2
    },
];

let currentQuestion = 0;

function init(){
    document.getElementById('quizlength').innerHTML = questions.length;

    showQuestion()

}

function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}