import React from "react";
import { render } from "react-dom";

class InputWords extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      word: '',
      definition: ''
    }
  }

  onChangeWord(e) {
    this.setState({
      word: e.target.value,
    })
  }

  onChangeDefinition(e) {
    this.setState({
      definition: e.target.value,
    })
  }

  add() {
    this.props.add(this.state)
    this.setState({
      word: '',
      definition: ''
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="input">Insert more words:</label>
        <input name="word" type="text" value={this.state.word} onChange={this.onChangeWord.bind(this)} placeholder='Insert a new word'/>
        <input name="definition" type="text" value={this.state.definition} onChange={this.onChangeDefinition.bind(this)} placeholder='Insert word definition'/>
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    )
  }
}

export default InputWords;
