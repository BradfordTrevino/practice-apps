import React from "react";
import { render } from "react-dom";

class WordDefinition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: []
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.word.word}
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default WordDefinition;
