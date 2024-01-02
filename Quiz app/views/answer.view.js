export class AnswerView {
  #answerListElement = document.querySelector("#answers");
  constructor(index, answer) {
    this.index = index;
    this.answer = answer;
  }

  interact() {
    this.#answerListElement.innerHTML += this.#getElement();
  }

  #getElement() {
    return `          
        <li class="flex items-center gap-2">
        <input
          class="radio"
          type="radio"
          name="question"
          value="${this.answer}"
          id="${this.index}"
        />
        <label class="font-semibold text-lg cursor-pointer" for="${this.index}">
          ${this.answer}
        </label>
      </li>`;
  }
}
