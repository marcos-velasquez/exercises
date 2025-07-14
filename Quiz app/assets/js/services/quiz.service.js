import { Question } from "../models/question.model.js";
import { Quiz } from "../models/quiz.model.js";

export class QuizService {
  #URL = "https://opentdb.com/api.php?amount=5&type=multiple";

  async getQuiz() {
    const res = await fetch(this.#URL);
    const data = await res.json();
    const questions = data.results.map((question) => {
      return new Question(
        question.question,
        question.incorrect_answers,
        question.correct_answer
      );
    });
    return new Quiz(questions);
  }
}
