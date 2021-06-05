export default class View {
  constructor(Model) {
    this.Model = Model;
    this.controllerOnChangeStatus = null;
    document.querySelector("#app").addEventListener("click", (e) => {
      if (e.target.classList.contains("status")) {
        this.controllerOnChangeStatus(e.target.id);
      }
    });
  }

  setControllerOnChangeStatus(controller) {
    this.controllerOnChangeStatus = controller;
  }
  toHtml() {
    let color;
    console.log(this.Model.items[this.Model.curentItem].status);
    if (this.Model.items[this.Model.curentItem].status == "neutral") {
      color = "white";
    } else if (this.Model.items[this.Model.curentItem].status == "good") {
      color = "#198754";
    } else if (this.Model.items[this.Model.curentItem].status == "medium") {
      color = "#ffc107";
    } else if (this.Model.items[this.Model.curentItem].status == "bad") {
      color = "#dc3545";
    }
    return `  <div class="col-lg-4 col-md-6 col-sm-8">
    <div class="card stack">
        <div class="card-body d-flex flex-column justify-content-between" style="background-color:${color}; transition:0.5s;">

            <div class="card-title text-center word">${
              this.Model.items[this.Model.curentItem].word
            }</div>
            <div class="fs-1 text-center">${
              this.Model.items[this.Model.curentItem].transcr
            }</div>
            <small class="text-muted text-center">Recaped 2 days ago</small>


        </div>
    </div>
    <div class="mt-5" id="${this.Model.items[this.Model.curentItem].id}">
        <button class="btn btn-success w-100 mb-1 status" id="good">Remember well</button>
        <button class="btn btn-warning w-100 mb-1 status" id="medium">Kinda remember</button>
        <button type="button" class="btn btn-danger w-100 mb-1 status" id="bad">Can't remember</button>

    </div>
</div>`;
  }
}
