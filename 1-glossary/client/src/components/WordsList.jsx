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
          <WordDefinition word={ word } delete={this.props.delete} edit={this.props.edit}/>
        )}
      </div>
    )
  }
}

export default WordsList;
