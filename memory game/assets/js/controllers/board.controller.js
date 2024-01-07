export class BoardController {
  #openedCardIndex = null;
  constructor(board) {
    this.board = board;
  }

  getCards() {
    return this.board.getCards();
  }

  hasOpenedCard() {
    return this.#openedCardIndex !== null;
  }

  getOpenedCardIndex() {
    return this.#openedCardIndex;
  }

  openCard(index) {
    this.#openedCardIndex = index;
  }

  closeCard() {
    this.#openedCardIndex = null;
  }

  isComplete() {
    return this.board.isComplete();
  }

  validate(index) {
    return this.board.validate(this.#openedCardIndex, index);
  }
}
