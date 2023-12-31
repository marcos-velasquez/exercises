import { Question } from "../models/question.model.js";
import { Quiz } from "../models/quiz.model.js";

export class QuizService {
  getQuiz() {
    return new Promise((resolve) => {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then((res) => res.json())
        .then((data) => {
          const questions = data.results.map((question) => {
            return new Question(
              question.question,
              question.incorrect_answers,
              question.correct_answer
            );
          });
          resolve(new Quiz(questions));
        });
    });
  }
}
