const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  serial: {
    type: Number,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  writer: {
    type: String,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);