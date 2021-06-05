export default class Item {
  constructor(word, transcr, onChangeCallback) {
    this.id = Math.round(Math.random() * 10000).toString();
    this.word = word;
    this.transcr = transcr;
    this.status = "neutral";
    this.onChangeCallback = onChangeCallback;
    return this.onItemChange();
  }

  changeStatus(status) {
    this.status = status;
  }
  onItemChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallback) this.onChangeCallback();
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
