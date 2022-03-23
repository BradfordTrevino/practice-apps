import React from "react";
import { render } from "react-dom";

class SearchWords extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: []
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="search">Search for words:</label>
        <input name="search" type="text"></input>
        <button>Search</button>
      </div>
    )
  }
}

export default SearchWords;
