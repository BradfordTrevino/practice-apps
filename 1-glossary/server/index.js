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
      res.send(response);
    })
})

app.post('/glossary', (req, res) => {
  Word.create(req.body)
    .then((response) => {
      res.send(response);
    })
});

// app.post('/edit', (req, res) => {
//   res.send('Hello I am editing')
// })

app.get('/delete', (req, res) => {
  Word.deleteOne(req.body)
    .then((response) => {
      res.send(response);
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
