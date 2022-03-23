import React from "react";
import { render } from "react-dom";
import WordDefinition from "./WordDefinition.jsx"

class WordsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: []
    }
  }

  render() {
    return (
      <div>
        { this.props.words.map(word =>
          <WordDefinition word={ word }/>
        )}
      </div>
    )
  }
}

export default WordsList;
