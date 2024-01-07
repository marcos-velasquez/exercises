import { QuizService } from "../services/quiz.service.js";

export class StartController {
  getQuiz() {
    return new QuizService().getQuiz();
  }
}
