const mongoose = require('mongoose');

// Define the Exam Schema
const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  description: {
    type: String,
    required: false
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
