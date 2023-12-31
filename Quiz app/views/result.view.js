export class ResultView {
  constructor(quiz) {
    this.quiz = quiz;
  }
  interact() {
    const score = `You scored ${this.quiz.getCorrectAnswers()} out of ${this.quiz.getNumberOfQuestions()}`;
    document.querySelector("#question").innerHTML = score;
    document.querySelector("#answers").innerHTML = "";
    document.querySelector("#acceptBtn").classList.add("hidden");
    document.querySelector("#restartBtn").classList.remove("hidden");
  }
}
