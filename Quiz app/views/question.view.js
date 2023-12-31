import { AnswerView } from "./answer.view.js";

export class QuestionView {
  #questionElement = document.querySelector("#question");
  #answerListElement = document.querySelector("#answers");

  constructor(quiz) {
    this.quiz = quiz;
  }

  interact() {
    this.#questionElement.innerHTML = this.quiz.getQuestion();
    this.#answerListElement.innerHTML = "";
    this.quiz.getOptions().forEach((answer, index) => {
      const answerView = new AnswerView(index, answer);
      this.#answerListElement.innerHTML += answerView.getElement();
    });
  }
}
