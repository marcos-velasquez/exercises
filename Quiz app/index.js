import { StartController } from "./controllers/start.controller.js";
import { QuizView } from "./views/quiz.view.js";

window.addEventListener("load", () => {
  new QuizView(new StartController()).start();
});
