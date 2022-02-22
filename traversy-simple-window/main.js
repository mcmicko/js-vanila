const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.querySelector(".closeBtn");

const seeAllBtn = document.getElementById("see-all-btn");
const searchBookInput = document.getElementById("search-book-input");
const searchBookBtn = document.getElementById("search-book-btn");
const bookNameInput = document.getElementById("book-name-input");
const bookWritterInput = document.getElementById("book-writter-input");
const additionalAttributeNameInput = document.getElementById(
  "additional-attribute-name-input"
);
const additionalAttributeValueInput = document.getElementById(
  "additional-attribute-value-input"
);
const addBookBtn = document.getElementById("add-book-btn");
const deleteBookInput = document.getElementById("book-delete-input");
const deleteBookBtn = document.getElementById("delete-book-btn");

const itemList = document.getElementById("items");

const books = [
  {
    id: 1,
    name: "Misery",
    writter: "Steven King",
  },
  {
    id: 2,
    name: "Special Mission",
    writter: "Otto Skorzeny",
  },
  {
    id: 3,
    name: "Head Hunters",
    writter: "Ju Nesbe",
  },
];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", closeOutside);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function closeOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

const addBook = (name, writter, attributeName = "", attributeValue = "") => {
  const addedBook = {
    id: Math.floor(Math.random() * 100),
    name,
    writter,
  };

  const bookExist = books.some(
    (b) =>
      b.name.toLowerCase().trim().split(" ").join("") ===
      addedBook.name.toLowerCase().trim().split(" ").join("")
  );

  if (bookExist) {
    alert(`Book with provided name ${name.trim()} already exists!`);
    return;
  }

  if (attributeName !== "" && attributeValue !== "") {
    addedBook[attributeName] = attributeValue;
  }

  if (
    !name.toLowerCase().trim().split(" ").join("") ||
    !writter.toLowerCase().trim().split(" ").join("")
  ) {
    alert("you must provide some value");
    return;
  }

  let li = document.createElement("li");

  let delbtn = document.createElement("button");
  delbtn.className = "del";
  delbtn.appendChild(document.createTextNode("del"));

  li.className = "list-group-item";

  books.push(addedBook);
  li.innerHTML = `${addedBook.name}`;
  li.appendChild(delbtn);
  itemList.appendChild(li);
  modal.style.display = "none";
};

addBookBtn.addEventListener("click", () => {
  addBook(
    bookNameInput.value,
    bookWritterInput.value,
    additionalAttributeNameInput.value,
    additionalAttributeValueInput.value
  );
});

const removeItem = (e) => {
  if (e.target.classList.contains("del")) {
    if (confirm("Are you sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

itemList.addEventListener("click", removeItem);

const filterItems = (e) => {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

filter.addEventListener("input", filterItems);
