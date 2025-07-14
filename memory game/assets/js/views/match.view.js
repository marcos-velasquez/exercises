import { ResumeView } from "./resume.view.js";
import { Body } from "../utilities/body.util.js";
import { Timer } from "../utilities/timer.util.js";

export class MatchView {
  constructor(boardController) {
    this.boardController = boardController;
  }

  interact(cardView, openedCardView) {
    new Body().disabled();
    new Timer(1000).run().then(() => {
      const cardIndex = cardView.getIndex();
      if (this.boardController.validate(cardIndex)) {
        this.boardController.complete(cardIndex);
      } else {
        cardView.close();
        openedCardView.close();
      }
      new ResumeView(this.boardController).interact();
      new Body().enabled();
      this.boardController.closeCard();
    });
  }
}
