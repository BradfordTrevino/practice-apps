import React from "react";
import { render } from "react-dom";

class WordDefinition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      word: '',
      definition: '',
      edit: false
    }
  }

  editForm() {
    return (
      <div>
        <form id="edit">

          <label>Word: </label>
          <input type="text" onChange={this.onEditWord.bind(this)}></input>

          <label>Definition: </label>
          <input type="text" onChange={this.onEditDefinition.bind(this)}></input>

          <button onClick={this.edit.bind(this)}>Update</button>

        </form>
      </div>
    );
  }

  onEditWord(e) {
    this.setState({
      word: e.target.value
    })
  }

  onEditDefinition(e) {
    this.setState({
      definition: e.target.value
    })
  }

  edit() {
    this.props.edit(
    {
      word: this.state.word,
      definition: this.state.definition
    },
    {
      word: this.props.word.word,
      definition: this.props.word.definition
    })
  }

  delete() {
    this.props.delete({
      word: this.props.word.word,
      definition: this.props.word.definition
    })
  }

  render() {
    const { edit } = this.state;

    return (
      <div>
        <div>
          {this.props.word.word} : {this.props.word.definition}
          <button onClick={() => this.setState({edit: !this.state.edit})}>Edit</button>
          <button onClick={this.delete.bind(this)}>Delete</button>
          {edit ? this.editForm() : null}
        </div>
      </div>
    )
  }
}

export default WordDefinition;
