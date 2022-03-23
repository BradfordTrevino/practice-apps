const mongoose = require("mongoose");
require("dotenv").config();

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 2. Set up any schema and models needed by the app
const wordSchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', wordSchema);

// 3. Export the models
module.exports.Word = Word;

// 4. Import the models into any modules that need them
