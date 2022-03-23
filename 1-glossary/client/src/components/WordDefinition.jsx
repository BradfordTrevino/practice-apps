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

  // edit() {
  //   this.props.edit(this.state)
  // }

  delete() {
    this.props.delete(this.state)
  }

  render() {
    return (
      <div>
        <div>
          {this.props.word.word} : {this.props.word.definition}
          <button>Edit</button>
          <button onClick={this.delete.bind(this)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default WordDefinition;
