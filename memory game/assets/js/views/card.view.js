import { Timer } from "../utilities/timer.util.js";

export class CardView {
  #cardList = document.getElementById("cardList");

  constructor(card, index) {
    this.card = card;
    this.index = index;
  }

  #getCard() {
    return document.querySelector(`[data-index="${this.index}"]`);
  }

  getIndex() {
    return this.index;
  }

  open() {
    this.#getCard().classList.add("visible");
  }

  close() {
    this.#getCard().classList.remove("visible");
  }

  onclick(cb) {
    new Timer().run().then(() => this.#getCard().addEventListener("click", cb));
  }

  interact() {
    this.#cardList.innerHTML += `
        <div class="memory-card" data-index="${this.index}">
            <img class="front-face" src="${this.card.getPhoto()}" />
            <img class="back-face" src="./assets/images/hand.svg" />
        </div>
        `;
  }
}
