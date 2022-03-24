import React from "react";
import { render } from "react-dom";

class WordDefinition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      word: this.props.word.word,
      definition: this.props.word.definition
    }
  }

  edit() {
    const editedWord = prompt('Please enter your edit!');
    this.props.edit(editedWord, this.props.word.word)
  }

  delete() {
    this.props.delete(this.state)
  }

  render() {
    return (
      <div>
        <div>
          {this.props.word.word} : {this.props.word.definition}
          <button onClick={this.edit.bind(this)}>Edit</button>
          <button onClick={this.delete.bind(this)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default WordDefinition;
