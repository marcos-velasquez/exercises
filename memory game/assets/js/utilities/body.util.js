export class Body {
  enabled() {
    document.body.classList.remove("disabled");
  }
  disabled() {
    document.body.classList.add("disabled");
  }
}
