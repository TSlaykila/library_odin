const myLibrary = [];

function Book(author, title, pages, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


const paragraph = document.createElement("p");

function displayLibrary() {
    paragraph.textContent = "";
    myLibrary.forEach((book, index) => {
        paragraph.innerHTML += `Book ${index + 1}: ${book.title} by ${book.author}, ${book.pages} pages.<br>`;
    });
}

function addBookToLibrary(author, title, pages) {
    myLibrary.push(new Book(author, title, pages))
    displayLibrary();
}

const form = document.createElement("form");

const authorInput = document.createElement("input");
authorInput.placeholder = "author";
authorInput.type = "text";

const titleInput = document.createElement("input");
titleInput.placeholder = "title";
titleInput.type = "text";

const pagesInput = document.createElement("input");
pagesInput.placeholder = "Number of pages, ex: 257"

const readcheck = document.createElement("input");
readcheck.type = "checkbox"

const label = document.createElement("label");
label.textContent = "Read";
label.setAttribute("for", "readStatus");

const div = document.createElement("div")
div.display = "flex"
div.appendChild(paragraph);
div.appendChild(readcheck);
div.appendChild(label);

const button = document.createElement("button");
button.textContent = "Add Book";
button.addEventListener("click", () => {
    if (authorInput.value && titleInput.value && pagesInput.value) {
        addBookToLibrary(authorInput.value, titleInput.value, pagesInput.value, false);
        authorInput.value = "";
        titleInput.value = "";
        pagesInput.value = "";
    } else {
        alert("Fill in all fields.")
    }
})

form.appendChild(authorInput);
form.appendChild(titleInput);
form.appendChild(pagesInput);
form.appendChild(button);
form.appendChild(div);



addBookToLibrary("Someone", "The Hobbit", "231");
addBookToLibrary("George Oswell", "1984", "167");

const newBook_button = document.createElement("button")
newBook_button.textContent = "Add new book"
let switchLibrary = false;
newBook_button.addEventListener("click", () => {
    if (!switchLibrary) {
        document.body.appendChild(form);
        document.body.appendChild(button);
        switchLibrary = true;
    }
});
document.body.appendChild(newBook_button);






