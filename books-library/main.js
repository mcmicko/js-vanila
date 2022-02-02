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

const findBook = (userInput) => {
  const searchTerm = userInput.toLowerCase().trim().split(" ").join("");

  if (!searchTerm) {
    alert("You must provide some search value!");
    return;
  }

  const foundBooks = books.filter((book) => {
    const partsOfName = book.name.toLocaleLowerCase().trim().split(" ");
    console.log("partsOfName:", partsOfName);
    const books = partsOfName.includes(searchTerm);
    return books;
  });

  if (!foundBooks.length) {
    alert("There is no book in our library");
  }
  alert(JSON.stringify(foundBooks, null, 5));
};

searchBookBtn.addEventListener("click", () => {
  console.log("searchBookInput:", searchBookInput.value);
  findBook(searchBookInput.value);
  clearFields();
});

const addBook = (name, writter, attributeName = "", attributeValue = "") => {
  const addedBook = {
    id: Math.floor(Math.random() * 100),
    name,
    writter,
  };
  console.log("ADDEDBOOK:", addedBook);
  const bookExist = books.some(
    (book) =>
      book.name.toLowerCase().trim().split(" ").join("") ===
      addedBook.name.toLocaleLowerCase().trim().split(" ").join("")
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
  books.push(addedBook);
  alert(`Added new book: ${addedBook.name} (${addedBook.writter})`);
};

addBookBtn.addEventListener("click", () => {
  addBook(
    bookNameInput.value,
    bookWritterInput.value,
    additionalAttributeNameInput.value,
    additionalAttributeValueInput.value
  );
  clearFields();
});

const deleteBook = (userInput) => {
  const searchTerm = userInput.toLowerCase().trim().split(" ").join();

  if (!searchTerm) {
    alert("You must provide some search value!");
  }

  const foundBook = books.find(
    (book) => book.name.toLowerCase().trim().split(" ").join("") === searchTerm
  );

  books.splice(books.indexOf(foundBook), 1);

  alert(`You have deleted book: ${foundBook.name}`);
};

deleteBookBtn.addEventListener("click", () => {
  deleteBook(deleteBookInput.value);
  clearFields();
});

seeAllBtn.addEventListener("click", () => {
  if (!books.length) {
    alert(
      `There are no books in our library at the moment. Please try again later!`
    );
    return;
  }
  alert(`Check your console 📚`);
  books.sort((a, b) => a.name.localeCompare(b.name));
  console.log(books);
});

const clearFields = () => {
  deleteBookInput.value = "";
  bookNameInput.value = "";
  bookWritterInput.value = "";
  searchBookInput.value = "";
  additionalAttributeValueInput.value = "";
  additionalAttributeNameInput.value = "";
};
