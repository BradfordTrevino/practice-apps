import React from "react";
import { render } from "react-dom";
import WordsList from "./WordsList.jsx";
import InputWords from "./InputWords.jsx";
import SearchWords from "./SearchWords.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: []
    }
  }

  componentDidMount() {
    this.updateWords()
  }

  updateWords() {
    axios.get('/glossary')
    .then((response) => {
      this.setState({
        words: response.data
      })
    });
  }

  add(input) {
    axios.post('/glossary', {
      word: input.word,
      definition: input.definition
    })
    .then((response) => {
      console.log(response);
      this.updateWords();
    })
  }

  edit(edit, word) {
    axios.post('/edit', { edit, word })
    .then((response) => {
      this.updateWords()
    })
  }

  delete(input) {
    axios.post('/delete', {
      word: input.word,
      definition: input.definition
    })
    .then((response) => {
      this.updateWords();
    })
  }

  search(input) {
    axios.get('/search', {
      params: {
        word: input
      }
    })
    .then((response) => {
      this.setState({
        words: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Glossary</h1>
        <InputWords add={this.add.bind(this)}/>
        <SearchWords search={this.search.bind(this)}/>
        <WordsList words={this.state.words} delete={this.delete.bind(this)} edit={this.edit.bind(this)}/>
      </div>
    )
  }
}

export default App;
