import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Forms from "./Forms.jsx";
import Modal from "react-modal";

class App extends React.Component {
  constructor (props) {
    super (props)
  }

  submitData(form) {
    axios.post('/checkout', form)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <Forms submitData={this.submitData.bind(this)}/>
      </div>
    )
  }
}

export default App;