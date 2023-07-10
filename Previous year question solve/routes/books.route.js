const { getAllBooks, storeBook, updateBook, deleteBook, getOneBook, getBookWithName, deleteAllBooks } = require('../controllers/books.controller');

const router = require('express').Router();

router.get("/", getAllBooks);

router.get("/:serial([0-9]+)", getOneBook);

router.get("/:name", getBookWithName);

router.post("/", storeBook);

router.put("/:serial", updateBook);

router.delete("/:serial", deleteBook);

router.delete("/", deleteAllBooks);

module.exports = router;