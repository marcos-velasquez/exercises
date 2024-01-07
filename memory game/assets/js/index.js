import { BoardView } from "./views/board.view.js";
import { BoardController } from "./controllers/board.controller.js";
import { Card } from "./models/card.model.js";
import { Board } from "./models/board.model.js";

const play = () => {
  const cards = [];
  cards.push(new Card("circle", "./assets/images/circle.svg"));
  cards.push(new Card("square", "./assets/images/square.svg"));
  cards.push(new Card("triangle", "./assets/images/triangle.svg"));
  cards.push(new Card("star", "./assets/images/star.svg"));
  cards.push(new Card("hexagon", "./assets/images/hexagon.svg"));
  cards.push(new Card("heart", "./assets/images/heart.svg"));
  const boardController = new BoardController(new Board(cards));
  new BoardView(boardController).interact();
};

window.addEventListener("load", () => play());

document.getElementById("restartBtn").addEventListener("click", (event) => {
  event.target.classList.remove("visible");
  play();
});
