const Book = require("../models/books.model");


// get all books
const getAllBooks = async (req,res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// get one book with serial
const getOneBook = async (req, res) => {
    try {
      const book = await Book.findOne({ serial: req.params.serial });
      res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// get one book with name
const getBookWithName = async (req, res) => {
    try {
      let searchedName = req.params.name;
      searchedName = searchedName.replaceAll("&", " ");
      const book = await Book.findOne({ name: searchedName });
      res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// create book
const storeBook = async (req, res) => {
    try {
      const newBook = new Book({
        serial: Number(req.body.serial),
        name: req.body.name,
        writer: req.body.writer,
      });
      await newBook.save();
      res.status(201).send("New Book added");
    } catch (error) {
      res.status(500).send(error.message);
    }
};
  

// update book
const updateBook = async (req, res) => {
    try {
      const book = await Book.findOne({ serial: req.params.serial });
      book.name = req.body.name;
      book.writer = req.body.writer;
      await book.save();
      res.status(200).send("Book information updated");
    } catch (error) {
      res.status(500).send(error.message);
    }
};

// delete book
const deleteBook = async (req, res) => {
    try {
      await Book.deleteOne({ serial: req.params.serial });
      res.status(200).json({ message: "Book is deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
};

// delete all books
const deleteAllBooks = async (req, res) => {
    try {
      await Book.deleteMany();
      res.status(200).json({ message: "All the books are deleted" });
    } catch (error) {
      res.status(500).send(error.message);
    }
};

module.exports = { getAllBooks, getOneBook, storeBook, updateBook, deleteBook, getBookWithName, deleteAllBooks };