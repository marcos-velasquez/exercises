export class ResumeView {
  constructor(boardController) {
    this.boardController = boardController;
  }

  interact() {
    if (this.boardController.isComplete()) {
      document.getElementById("restartBtn").classList.add("visible");
    }
  }
}
