// const DataModel = require('../models/dataModel');

exports.getHomePage = (req, res) => {
  res.sendFile('index.html', { root: 'views' });
};

exports.getData = (req, res) => {
//   const data = DataModel.getAll();
//   res.json(data);
};
