const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("input", filterItems);

function addItem(e) {
  e.preventDefault();

  let newItem = document.getElementById("item").value;

  let li = document.createElement("li");
  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  let delbtn = document.createElement("button");

  delbtn.appendChild(document.createTextNode("del"));

  li.appendChild(delbtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("del")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
