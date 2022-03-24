require("dotenv").config();
const express = require("express");
const path = require("path");
const { Word } = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
/****
 *
 *
 * Other routes here....
 *
 *
 */
app.get('/glossary', (req, res) => {
  Word.find({})
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.post('/glossary', (req, res) => {
  Word.create(req.body)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.post('/edit', (req, res) => {
  let edit = { word: req.body.edit }
  let word = { word: req.body.word }
  Word.updateOne(word, edit)
    .then((response) => {
      res.status(201).send(response);
    })
})

app.post('/delete', (req, res) => {
  Word.deleteOne(req.body)
    .then((response) => {
      res.send(response);
    })
})

app.get('/search', (req, res) => {
  Word.find(req.query)
    .then((response) => {
      res.status(200).send(response);
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
