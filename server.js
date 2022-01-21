const express = require("express");
const app = express();
const { capitalizeWord } = require("./helpers");
const cors = require("cors");
let { books } = require("./data.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// C
app.post("/books", (req, res) => {
  // Get details
  const titleVal = req.body.title;
  const authorVal = req.body.author;
  const pagesVal = req.body.pages;
  // Create book object
  const newBook = { title: titleVal, author: authorVal, pages: pagesVal };
  // Make camel case
  const bookKeyArr = titleVal.split(" ");
  let bookKey = bookKeyArr[0];
  for (let i = 1; i < bookKeyArr.length; i++) {
    bookKey += capitalizeWord(bookKeyArr[i]);
  }
  // Add new book to books Obj
  books[bookKey] = newBook;
  // return status and book
  res.status(201).json(newBook);
});

// R
app.get("/cats", (req, res) => {
  res.json(cats);
});

app.get("/books/:name", (req, res) => {
  try {
    let bookReq = req.params.name;
    let returnBook = books[bookReq];
    if (!returnBook) {
      throw new Error(`Sorry, we don't have information about ${bookReq}.`);
    }
    res.json(returnBook)
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
});

// U
app.patch('/books/:title', (req, res) => {
    // read new data from body
    let newData = req.params.title;
    // find the data to update - go through the list and match name value to value of dynamic route param of :name
    let requestedBook = req.params.title;
    let matchingBook = books.find((book) => book.title.toLowerCase() === requestedBook.toLowerCase());
    
    // actually update the stored books data
    let updatedBook = { ...matchingBook, ...newBook }
    let bookIdx = books.indexOf(matchingBook)
    books = [ ...books.slice(0, bookIdx), updatedBook, ...books.slice(bookIdx + 1)]
    
    res.json(updatedBooks)
})

// D
app.delete("/cats", (req, res) => {
  cats = [];
  res.status(204).send("Cats gone");
});

module.exports = app;
