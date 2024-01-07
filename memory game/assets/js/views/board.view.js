import { CardView } from "./card.view.js";
import { MatchView } from "./match.view.js";

export class BoardView {
  #cardViewList = [];

  constructor(boardController) {
    this.boardController = boardController;
  }

  interact() {
    this.boardController.getCards().forEach((card, index) => {
      const cardView = new CardView(card, index);
      cardView.interact();
      cardView.onclick(() => this.#handlerClick(cardView));
      this.#cardViewList.push(cardView);
    });
  }

  #handlerClick(cardView) {
    cardView.open();
    if (this.boardController.hasOpenedCard()) {
      const openedCardIndex = this.boardController.getOpenedCardIndex();
      const openedCardView = this.#cardViewList[openedCardIndex];
      new MatchView(this.boardController).interact(cardView, openedCardView);
    } else {
      this.boardController.openCard(cardView.getIndex());
    }
  }
}
