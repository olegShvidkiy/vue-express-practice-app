export default class controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.View.setControllerOnChangeStatus(this.ChangeStatus);
    this.Model.setOnChangeCallback(() => this.onChangeCallback());
    this.Model.createItems();
    this.onChangeCallback();
  }
  onChangeCallback() {
    document.querySelector("#app").innerHTML = this.View.toHtml();
  }
  ChangeStatus(status) {
    this.Model.changeStatus(status);
  }
}
