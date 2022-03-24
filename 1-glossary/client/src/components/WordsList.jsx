import React from "react";
import { render } from "react-dom";
import WordDefinition from "./WordDefinition.jsx"

class WordsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }
  }

  goToNextPage() {
    this.setState({
      page: this.state.page + 1
    })
  }

  goToPreviousPage() {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      })
    }
  }

  render() {
    return (
      <div>
        { this.props.words.map(word =>
          <WordDefinition key={word._id} word={ word } delete={this.props.delete} edit={this.props.edit}/>
        )}
        <div>
          <button onClick={this.goToPreviousPage.bind(this)}>Previous Page</button>
          <button onClick={this.goToNextPage.bind(this)}>Next Page</button>
        </div>
      </div>
    )
  }
}

export default WordsList;
