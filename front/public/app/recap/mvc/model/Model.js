import Item from "./item.js";
export default class Model {
  constructor() {
    this.items = [];
    this.words = "word, world, home, train, university, javascript, code".split(
      ", "
    );
    this.transcription =
      "[wɜːrd], [wɜːrld], [hoʊm], [treɪn], [ˌjuːnɪˈvɜːrsəti], [ˈʤɑːvəskrɪpt], [koʊd]".split(
        ", "
      );
    this.curentItem = 0;
    this.waiting = false;
    this.onChangeCallback = null;
  }

  createItems() {
    this.words.forEach((word, i) => {
      const item = new Item(word, this.transcription[i], this.onChangeCallback);
      this.items.push(item);
    });
  }
  changeStatus(status) {
    if (!this.waiting) {
      this.waiting = true;
      this.items[this.curentItem].changeStatus(status);
      setTimeout(this.next.bind(this), 800);
    }
  }
  next() {
    if (this.curentItem + 1 == this.words.length) {
      location.replace("../../../../app/profile/profile.html");
      this.curentItem = "end";
    } else {
      this.curentItem = this.curentItem + 1;
    }
    this.waiting = false;
    this.onChangeCallback();
  }

  setOnChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
}
