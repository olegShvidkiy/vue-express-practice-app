export default class Item {
  constructor(word, transcr) {
    this.id = Math.round(Math.random() * 10000).toString();
    this.word = word;
    this.transcr = transcr;
    this.status = "white";
  }

  changeStatus(status) {
    this.status = status;
  }
}
