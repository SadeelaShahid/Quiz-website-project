const quizData = [
    {
        question: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database", "OS"],
        answer: "Markup Language"
    },
    {
        question: "What is CSS used for?",
        options: ["Styling", "Database", "Logic", "Server"],
        answer: "Styling"
    },
    {
        question: "Which language is used for web apps?",
        options: ["Python", "Java", "JavaScript", "All"],
        answer: "All"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = () => {
            if (option === q.answer) {
                score++;
            }
            nextQuestion();
        };

        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}

// Start quiz
loadQuestion();