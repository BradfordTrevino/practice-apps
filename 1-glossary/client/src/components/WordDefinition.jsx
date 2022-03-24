import React from "react";
import { render } from "react-dom";

class WordDefinition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      word: this.props.word.word,
      definition: this.props.word.definition,
      edit: false
    }
  }

  editForm() {
    return (
      <div>
        <form id="edit">

          <label>Word: </label>
          <input type="text"></input>

          <label>Definition: </label>
          <input type="text"></input>

          <button>Update</button>

        </form>
      </div>
    );
    // const editedWord = prompt('Please enter your edit!');
    // this.props.edit(editedWord, this.props.word.word)
  }


  delete() {
    this.props.delete(this.state)
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
