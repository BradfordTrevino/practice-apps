import React from "react";
import { render } from "react-dom";

class SearchWords extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  search() {
    this.props.search(this.state.term)
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="search">Search for words:</label>
        <input name="search" type="text" placeholder="Search for word" onChange={this.onChange.bind(this)}></input>
        <button onClick={this.search.bind(this)}>Search</button>
      </div>
    )
  }
}

export default SearchWords;
