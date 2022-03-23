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

  search() {
    axios.get('/glossary')
    .then((response) => {
      console.log(response.data);
      this.setState({
        words: response.data
      })
    });
  }

  componentDidMount() {
    this.search()
  }

  render() {
    return (
      <div>
        <h1>Glossary</h1>
        <InputWords />
        <SearchWords />
        <WordsList words={this.state.words}/>
      </div>
    )
  }
}

export default App;
