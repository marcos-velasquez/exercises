export class ProgressView {
  #progressElement = document.querySelector("#progress");
  constructor(quiz) {
    this.quiz = quiz;
  }
  interact() {
    this.#progressElement.innerHTML = `${this.quiz.getCurrentPosition() + 1}/${this.quiz.getNumberOfQuestions()}`;
  }
}
