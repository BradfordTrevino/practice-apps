const mongoose = require("mongoose");
require("dotenv").config();
const seedWords = require("../client/src/seedData/seedArray.js")

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 2. Set up any schema and models needed by the app
const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
});

const Word = mongoose.model('Word', wordSchema);

Word.estimatedDocumentCount()
  .then((response) => {
    if (response === 0) {
      Word.insertMany(seedWords.Glossary.words)
    }
  })
  .catch((err) => {
    console.log(err)
  })


// 3. Export the models
module.exports.Word = Word;

// 4. Import the models into any modules that need them
