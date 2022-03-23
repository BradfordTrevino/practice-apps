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

  updateWords() {
    axios.get('/glossary')
    .then((response) => {
      console.log(response.data);
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

  // edit(input) {
  //   axios.post('/edit', {
  //     word: input.word,
  //     definition: input.definition
  //   })
  // }

  delete(input) {
    axios.get('/delete', {
      word: input.word,
      definition: input.definition
    })
    .then((response) => {
      this.updateWords();
    })
  }

  componentDidMount() {
    this.updateWords()
  }

  render() {
    return (
      <div>
        <h1>Glossary</h1>
        <InputWords add={this.add.bind(this)}/>
        <SearchWords />
        <WordsList words={this.state.words} delete={this.delete.bind(this)}/>
      </div>
    )
  }
}

export default App;
