import React from "react";
import { render } from "react-dom";

class InputWords extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: []
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="input">Insert more words:</label>
        <input name="input" type="text"></input>
        <button>Add</button>
      </div>
    )
  }
}

export default InputWords;
