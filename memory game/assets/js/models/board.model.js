import { shuffle } from "../utilities/shuffle.util.js";

export class Board {
  constructor(cards) {
    this.cards = shuffle([...cards, ...cards]);
  }

  getCards() {
    return this.cards;
  }

  isComplete() {
    return this.cards.every((card) => card.isComplete());
  }

  validate(origin, target) {
    const valid = this.cards[origin].isEqual(this.cards[target]);
    if (valid) {
      this.cards[origin].complete();
      this.cards[target].complete();
    }
    return valid;
  }
}
