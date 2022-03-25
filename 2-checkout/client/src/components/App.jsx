import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Forms from "./Forms.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
  }

  saveData(input) {
    axios.post('/checkout', {
      name: '',
      email: '',
      password: '',
      addline1: '',
      addline2: '',
      city: '',
      state: '',
      zip: '',
      phoneNum: '',
      ccNum: '',
      expDate: '',
      cvv: '',
      billZip: ''
    })
      .then((response) => {
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        <p>Hello, World!</p>
          <p>
            <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          </p>
        <Forms />
      </div>
    )
  }
}






export default App;