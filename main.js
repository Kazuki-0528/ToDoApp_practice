const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");

class Item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let itemBox = document.createElement("div");
    itemBox.classList.add("itemBox");

    let input = document.createElement("input");
    input.classList.add("input_item");
    input.value = itemName;
    input.type = "text";
    input.disabled = true;

    let doneButton = document.createElement("button");
    doneButton.classList.add("doneButton");
    doneButton.innerHTML = "DONE";

    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = "EDIT";

    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "REMOVE";

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(doneButton);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    doneButton.addEventListener("click", () => {
      input.classList.toggle("done");
    });

    editButton.addEventListener("click", () => {
      this.edit(input);
    });

    removeButton.addEventListener("click", () => {
      this.remove(itemBox);
    });
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(itemBox) {
    container.removeChild(itemBox);
  }
}

function check() {
  if (input.value != "") {
    new Item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
addEventListener("keydown", (e) => {
  if (e.key == 13) {
    check();
  }
});
