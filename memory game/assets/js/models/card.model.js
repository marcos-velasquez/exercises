export class Card {
  #complete = false;
  constructor(name, photo) {
    this.name = name;
    this.photo = photo;
  }

  getName() {
    return this.name;
  }

  getPhoto() {
    return this.photo;
  }

  isComplete() {
    return this.#complete;
  }

  complete() {
    this.#complete = true;
  }

  isEqual(card) {
    return this.getName() === card.getName();
  }
}
