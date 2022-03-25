import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Forms from "./Forms.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
  }

  submitData(form) {
    axios.post('/checkout', {
      name: form.name,
      email: form.email,
      password: form.password,
      addline1: form.addline1,
      addline2: form.addline2,
      city: form.city,
      state: form.state,
      zip: form.zip,
      phoneNum: form.phoneNum,
      ccNum: form.ccNum,
      expDate: form.expDate,
      cvv: form.cvv,
      billZip: form.billZip
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
        <Forms submitData={this.submitData.bind(this)}/>
      </div>
    )
  }
}






export default App;