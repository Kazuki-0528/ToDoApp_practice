const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");

class Item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let itemBox = document.createElement("div");
    itemBox.classList.add("input_div");

    let input = document.createElement("input");
    input.classList.add("item_input");
    input.value = itemName;
    input.type = "text";
    input.disabled = true;

    let editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    editButton.addEventListener("click", () => {
      this.edit(itemBox);
    });

    removeButton.addEventListener("click", () => {
      this.remove(item);
    });
  }

  edit(itemBox) {
    input.disabled = !disabled;
  }

  remove(item) {
    itemBox.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new Item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
