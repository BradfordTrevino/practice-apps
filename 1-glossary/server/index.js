require("dotenv").config();
const express = require("express");
const path = require("path");
const { Word } = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/glossary', (req, res) => {
  Word.find({}).sort('+word')
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

app.post('/glossary', (req, res) => {
  Word.create(req.body)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

app.post('/edit', (req, res) => {
  let edit = { word: req.body.edit.word, definition: req.body.edit.definition }
  let word = { word: req.body.word.word, definition: req.body.word.definition }
  Word.updateOne(word, edit)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

app.delete('/glossary', (req, res) => {
  Word.deleteOne(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

app.get('/search', (req, res) => {
  Word.find(req.query)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
