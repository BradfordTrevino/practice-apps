import React from "react";
import { render } from "react-dom";

class Forms extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      form: 1,
      checkout: {}
    }
  }

  clearState() {
    this.setState({
      form: 0,
      checkout: {}
    })
  }

  handleCheckoutClick() {
    if (this.state.form === 0) {
      this.setState({
        form: this.state.form + 1
      })
    }
  }

  handleBackClick() {
    if (this.state.form > 0) {
      this.setState({
        form: this.state.form - 1
      })
    }
  }

  handleNextClick() {
    const { form } = this.state;
    switch (form) {
      case 1:
        if (this.handleFormOneValidation()) {
          this.setState({
            form: this.state.form + 1
          })
        }
        break;
      case 2:
        if (this.handleFormTwoValidation()) {
          this.setState({
            form: this.state.form + 1
          })
        }
        break;
      case 3:
        if (this.handleFormThreeValidation()) {
          this.setState({
            form: this.state.form + 1
          })
        }
        break;
    }
  }

  handlePurchaseClick() {
    const { submitData, handleCloseModal } = this.props;
    submitData(this.state.checkout);
    handleCloseModal();
    this.clearState();
  }

  handleInputChange(e, input) {
    e.preventDefault();
    const { checkout } = this.state;
    const { id, value } = e.target;
    checkout[id] = value;
    this.setState({ checkout })
  }

  handleFormOneValidation() {
    var { name, email, password } = this.state.checkout;
    var formOneValues = { name, email, password };
    console.log(formOneValues);
    let incomplete = [];

    for (let key in formOneValues) {
      if (!formOneValues[key]) {
        incomplete.push(key);
      }
    }

    if (incomplete.length > 0) {
      window.alert(`Incomplete form! Please fill in ${incomplete.join(', ')}!`);
    } else {
      return true;
    }
  }

  handleFormTwoValidation() {
    var { addline1, city, state, zip, phoneNum } = this.state.checkout;
    var formTwoValues = { addline1, city, state, zip, phoneNum }
    let incomplete = [];

    for (let key in formTwoValues) {
      if (!formTwoValues[key]) {
        incomplete.push(key);
      }
    }

    if (incomplete.length > 0) {
      window.alert(`Incomplete form! Please fill in ${incomplete.join(', ')}!`);
    } else {
      return true;
    }
  }

  handleFormThreeValidation() {
    var { ccNum, expDate, cvv, billZip } = this.state.checkout;
    var formThreeValues = { ccNum, expDate, cvv, billZip };
    let incomplete = [];

    for (let key in formThreeValues) {
      if (!formThreeValues[key]) {
        incomplete.push(key);
      }
    }

    if (incomplete.length > 0) {
      window.alert(`Incomplete form! Please fill in ${incomplete.join(', ')}!`);
    } else {
      return true;
    }
  }

  renderCheckoutButton() {
    return(
      <div>
        <button onClick={this.handleCheckoutClick.bind(this)}>Checkout</button>
      </div>
    )
  }

  renderFormOne() {
    return (
      <div>
        <h2>Information:</h2>

        <div>
          <input type="text" id="name" placeholder="Name" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="email" placeholder="Email" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="password" placeholder="Password" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <button onClick={this.handleBackClick.bind(this)}>Back</button>
          <button onClick={this.handleNextClick.bind(this)}>Next</button>
        </div>
      </div>
    )
  }

  renderFormTwo() {
    return (
      <div>
        <h2>Address:</h2>

        <div>
          <input type="text" id="addline1" placeholder="Address Line 1" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="addline2" placeholder="Address Line 2 (OPTL)" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="city" placeholder="City" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="state" placeholder="State" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="zip" placeholder="Zip Code" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="phoneNum" placeholder="Phone Number" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <button onClick={this.handleBackClick.bind(this)}>Back</button>
        <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderFormThree() {
    return (
      <div>
        <h2>Payment Info:</h2>

        <div>
          <input type="text" id="ccNum" placeholder="CC Number"onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="expDate" placeholder="Exp Date (YYYYMMDD)" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="cvv" placeholder="CVV" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div>
          <input type="text" id="billZip" placeholder="Billing Zip Code" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

          <button onClick={this.handleBackClick.bind(this)}>Back</button>
          <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderConfirmation() {
    const { name, email, password, addline1, addline2, city, state, zip, phoneNum, ccNum, expDate, cvv, billZip } = this.state.checkout;

    return (
      <div>
          <div><b>Name:</b> {name}</div>
          <div><b>Email:</b> {email}</div>
          <div><b>Password:</b> {password}</div>
          <div><b>Address Line 1:</b> {addline1}</div>
          <div><b>Address Line 2:</b> {addline2}</div>
          <div><b>City:</b> {city}</div>
          <div><b>State:</b> {state}</div>
          <div><b>Zip:</b> {zip}</div>
          <div><b>Phone Number:</b> {phoneNum}</div>
          <div><b>Credit Card Number:</b> {ccNum}</div>
          <div><b>Exp Date (YYYYMMDD):</b> {expDate}</div>
          <div><b>CVV:</b> {cvv}</div>
          <div><b>Billing Zip Code:</b> {billZip}</div>

          <div>
            <button onClick={this.handleBackClick.bind(this)}>Back</button>
            <button onClick={this.handlePurchaseClick.bind(this)}>Purchase</button>
          </div>
      </div>
    )
  }

  render() {
    const { form } = this.state

    return (
      <div>
        { form === 0 ? this.renderCheckoutButton() : null }
        { form === 1 ? this.renderFormOne() : null }
        { form === 2 ? this.renderFormTwo() : null }
        { form === 3 ? this.renderFormThree() : null }
        { form === 4 ? this.renderConfirmation() : null }
      </div>
    )
  }
}


export default Forms;