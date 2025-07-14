export class Quiz {
  #currentPosition = 0;
  #correctAnswers = 0;

  constructor(questions) {
    this.questions = questions;
  }

  get currentQuestion() {
    return this.questions[this.#currentPosition];
  }

  getQuestion() {
    return this.currentQuestion.getQuestion();
  }

  getOptions() {
    return this.currentQuestion.getOptions();
  }

  getCurrentPosition() {
    return this.#currentPosition;
  }

  getNumberOfQuestions() {
    return this.questions.length;
  }

  answer(response) {
    if (this.currentQuestion.isCorrectAnswer(response)) {
      this.#correctAnswers++;
    }
    this.#nextQuestion();
  }

  #nextQuestion() {
    this.#currentPosition++;
  }

  getCorrectAnswers() {
    return this.#correctAnswers;
  }

  isComplete() {
    return this.#currentPosition >= this.questions.length;
  }
}
