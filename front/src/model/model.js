import Item from "./item.js";
export default class Model {
  constructor() {
    this.items = [];
    // this.words = "word, world, home, train, university, javascript, code".split(
    //   ", "
    // );
    // this.transcription =
    //   "[wɜːrd], [wɜːrld], [hoʊm], [treɪn], [ˌjuːnɪˈvɜːrsəti], [ˈʤɑːvəskrɪpt], [koʊd]".split(
    //     ", "
    //   );
    this.curentItem = 0;
    this.waiting = false;
  }

  async createItems(words) {
    words.items.forEach((word) => {
      const item = new Item(word.word, word.transcr);
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
    if (this.curentItem + 1 == this.items.length) {
      location.replace("/");
      this.curentItem = "end";
    } else {
      this.curentItem = this.curentItem + 1;
    }
    this.waiting = false;
  }

  async sendItems() {
    fetch("http://localhost:3000/push", {
      method: "POST",
      body: JSON.stringify({ items: this.items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
