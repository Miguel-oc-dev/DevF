import "../scss/styles.scss";

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const typeSelect = document.getElementById("type");
const form = document.querySelector(".trivia__form");
const questionsContainer = document.getElementById("questions");
const results = document.getElementById("results");
const newTriviaBtn = document.getElementById("newTrivia");

let currentQuestions = [];
let score = 0;

document.addEventListener("DOMContentLoaded", fetchCategories);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  score = 0;
  results.textContent = "";
  questionsContainer.innerHTML = "";
  const category = categorySelect.value;
  const difficulty = difficultySelect.value;
  const type = typeSelect.value;
  await fetchQuestions(category, difficulty, type);
  renderQuestions();
});

newTriviaBtn.addEventListener("click", () => {
  results.textContent = "";
  questionsContainer.innerHTML = "";
  newTriviaBtn.style.display = "none";
});

function fetchCategories() {
  fetch("https://opentdb.com/api_category.php")
    .then((res) => res.json())
    .then((data) => {
      categorySelect.innerHTML = data.trivia_categories
        .map(
          (cat) =>
            `<option value="${cat.id}">${cat.name}</option>`
        )
        .join("");
    });
}

async function fetchQuestions(category, difficulty, type) {
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
  const res = await fetch(url);
  const data = await res.json();
  currentQuestions = data.results;
}

function renderQuestions() {
  currentQuestions.forEach((q, index) => {
    const allAnswers = [...q.incorrect_answers, q.correct_answer];
    const shuffled = allAnswers.sort(() => Math.random() - 0.5);
    const div = document.createElement("div");
    div.classList.add("trivia__question");
    div.innerHTML = `
      <p>${index + 1}. ${decodeHTML(q.question)}</p>
      ${shuffled
        .map(
          (ans) => `
        <label>
          <input type="radio" name="question${index}" value="${ans}" />
          ${decodeHTML(ans)}
        </label>
      `
        )
        .join("")}
    `;
    questionsContainer.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Enviar respuestas";
  submitBtn.addEventListener("click", verificarRespuestas);
  questionsContainer.appendChild(submitBtn);
}

function verificarRespuestas() {
  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selected && selected.value === q.correct_answer) {
      score += 100;
    }
  });
  results.textContent = `Tu puntaje final es: ${score}`;
  newTriviaBtn.style.display = "block";
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
