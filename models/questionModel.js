const mongoose = require('mongoose');

// Define the Question Schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: Map,
    of: String,
    required: true
  },
  answer: {
    type: Number,
    required: true // This will store the key of the correct option
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;