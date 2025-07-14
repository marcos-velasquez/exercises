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

  complete(origin, target) {
    this.cards[origin].complete();
    this.cards[target].complete();
  }

  validate(origin, target) {
    return this.cards[origin].isEqual(this.cards[target]);
  }
}
