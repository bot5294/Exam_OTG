const Exam = require('../models/examModel'); // Adjust the path as necessary
const Question = require('../models/questionModel'); // Adjust the path as necessary

// Function to get all exams
exports.getAllExams = async (req, res) => {
  try {
    // Fetch all exams and populate the questions
    const exams = await Exam.find().populate('questions');

    // Respond with the exams
    res.status(200).json({ success: true, exams });
  } catch (error) {
    console.error("Error fetching exams:", error);
    res.status(500).json({ success: false, message: 'Server error @ getAllExams' });
  }
};
    