require("dotenv").config();
const express = require("express");
const path = require("path");
const { Word } = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.get(`/${process.env.DB_NAME}`, (req, res) => {
  Word.find({})
    .then((response) => {
      res.send(response);
    })
  // res.send('Momma we made it!');
})

app.post(`/${process.env.DB_NAME}`, (req, res) => {
  res.send('Got a POST request!');
});

// glossary = [{ word: 'Dog', description: 'A best friend!'}]

// glossary.forEach(word => {
//   newWord = new Word(word);
//   newWord.save((err) => {
//     if (err) return err;
//   })
// })

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
