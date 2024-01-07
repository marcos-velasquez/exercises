import { QuestionView } from "./question.view.js";
import { ProgressView } from "./progress.view.js";
import { ResultView } from "./result.view.js";
export class QuizView {
  #restartBtn = document.querySelector("#restartBtn");
  #acceptBtn = document.querySelector("#acceptBtn");

  constructor(startController) {
    this.startController = startController;
    this.#restartBtn.addEventListener("click", () => this.#restart());
    this.#acceptBtn.addEventListener("click", () => {
      const option = document.querySelector('input[name="question"]:checked');
      if (!!option) {
        this.#answer(option.value);
      }
    });
  }

  async start() {
    this.quiz = await this.startController.getQuiz();
    this.questionView = new QuestionView(this.quiz);
    this.progressView = new ProgressView(this.quiz);
    this.#next();
  }

  #next() {
    this.questionView.interact();
    this.progressView.interact();
  }

  async #restart() {
    document.querySelector("#acceptBtn").classList.remove("hidden");
    document.querySelector("#restartBtn").classList.add("hidden");
    await this.start();
  }

  #answer(response) {
    this.quiz.answer(response);
    if (this.quiz.isComplete()) {
      new ResultView(this.quiz).interact();
    } else {
      this.#next();
    }
  }
}
