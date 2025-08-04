const QuesData = [
  {
    Question: "1. Addition of two numbers 12 & 15",
    Option: ["26", "27", "28", "29"],
    CorrectOption: "27",
  },
  {
    Question: "2. Multiplication of two numbers 12 & 3",
    Option: ["36", "37", "38", "39"],
    CorrectOption: "36",
  },
  {
    Question: "3. Multiplication of two numbers 15 & 3",
    Option: ["45", "46", "47", "48"],
    CorrectOption: "45",
  },
  {
    Question: "4. Addition of two numbers 22 & 33",
    Option: ["55", "56", "57", "58"],
    CorrectOption: "55",
  },
  {
    Question: "5. Addition of two numbers 2 & 15",
    Option: ["26", "17", "28", "29"],
    CorrectOption: "17",
  },
  {
    Question: "6. Addition of two numbers 12 & 50",
    Option: ["52", "62", "72", "82"],
    CorrectOption: "62",
  },
  {
    Question: "7. Addition of two numbers 80 & 20",
    Option: ["100", "200", "300", "400"],
    CorrectOption: "100",
  },
  {
    Question: "8. Addition of two numbers 20 & 20",
    Option: ["10", "20", "30", "40"],
    CorrectOption: "40",
  },
  {
    Question: "9. Addition of two numbers 25 & 20",
    Option: ["10", "20", "30", "45"],
    CorrectOption: "45",
  },
  {
    Question: "10. Addition of two numbers 80 & 15",
    Option: ["85", "80", "95", "40"],
    CorrectOption: "95",
  },
];

let que = 0;
let score = 0;

function startQuiz() {
  const Question = QuesData[que];
  document.getElementById("question-container").innerHTML = Question.Question;

  const answer = document.getElementById("answers-container");
  answer.innerHTML = "";
  document.getElementById("result-container").innerHTML = "";

  Question.Option.forEach((Option) => {
    const btn = document.createElement("button");
    btn.innerHTML = Option;
    btn.addEventListener("click", () => {
      checkAnswer(btn, Option, Question.CorrectOption);
    });
    answer.appendChild(btn);
  });
}

function checkAnswer(button, selected, correct) {
  const buttons = document.querySelectorAll("#answers-container button");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    } else if (btn.innerText === selected) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score++;
  }

  setTimeout(() => {
    que++;
    if (que < QuesData.length) {
      startQuiz();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  document.getElementById("question-container").innerHTML = "✅ Quiz Over!";
  document.getElementById("answers-container").innerHTML = "";
  document.getElementById("result-container").innerHTML =
    `Your Score: ${score} / ${QuesData.length}`;
}

startQuiz();
