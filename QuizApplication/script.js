let i = 0;
let score = 0;
let time = 10;
let timer;

function loadQ() {
    let q = quiz[i];

    document.getElementById("qno").innerText = i + 1;
    document.getElementById("question").innerText = q.q;

    let html = "";
    q.o.forEach((opt, index) => {
        html += `<div class="option" onclick="check(${index},this)">${opt}</div>`;
    });

    document.getElementById("options").innerHTML = html;

    startTimer();
}

function check(ans, el) {
    clearInterval(timer);

    let correct = quiz[i].a;
    let all = document.querySelectorAll(".option");

    all.forEach(o => o.onclick = null);

    if (ans === correct) {
        el.classList.add("correct");
        score++;
    } else {
        el.classList.add("wrong");
        all[correct].classList.add("correct");
    }
}

function nextQ() {
    i++;

    if (i < quiz.length) {
        time = 10;
        loadQ();
    } else {
        document.getElementById("question").innerText = "Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").innerText = "Score: " + score;
    }
}

function startTimer() {
    document.getElementById("time").innerText = time + "s";

    timer = setInterval(() => {
        time--;
        document.getElementById("time").innerText = time + "s";

        if (time === 0) {
            clearInterval(timer);
            nextQ();
        }
    }, 1000);
}

window.onload = loadQ;