import { shuffle } from "../utilities/shuffle.js";

export class Question {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  getQuestion() {
    return this.question;
  }

  getOptions() {
    return shuffle([...this.answers, this.correctAnswer]);
  }

  isCorrectAnswer(answer) {
    return answer === this.correctAnswer;
  }
}
