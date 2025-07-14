export class Timer {
  constructor(milliseconds = 0) {
    this.milliseconds = milliseconds;
  }

  run() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, this.milliseconds);
    });
  }
}
