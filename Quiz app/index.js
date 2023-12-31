import { StartController } from "./controllers/start.controller.js";
import { QuizView } from "./views/quiz.view.js";

const quizView = new QuizView(new StartController());

window.addEventListener("load", () => {
  quizView.start();
});

document.getElementById("acceptBtn").addEventListener("click", () => {
  const option = document.querySelector('input[name="question"]:checked');
  if (!!option && !!option.value) {
    quizView.answer(option.value);
  }
});

document.getElementById("restartBtn").addEventListener("click", () => {
  quizView.restart();
});
