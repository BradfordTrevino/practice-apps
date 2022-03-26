import React from "react";
import { render } from "react-dom";

class Forms extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      form: 0,
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
    }
  }

  clearState() {
    this.setState({
      form: 0,
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
    if (this.state.form < 4) {
      this.setState({
        form: this.state.form + 1
      })
    }
  }

  handlePurchaseClick() {
    var inputValues = Object.values(this.state);
    if (!inputValues.includes('')) {
      this.props.submitData(this.state);
      this.clearState();
    } else {
      console.log('Incomplete form!')
      window.alert('Incomplete form!')
    }
  }

  handleInputChange(e, input) {
    e.preventDefault();
    this.setState(input)
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
        <h2>Form 1 Rendered!</h2>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={(e) => {this.handleInputChange(e, { name: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={(e) => {this.handleInputChange(e, { email: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" onChange={(e) => {this.handleInputChange(e, { password: e.target.value })}}></input>
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
        <h2>Form 2 Rendered!</h2>

        <div>
          <label htmlFor="addline1">Address Line 1:</label>
          <input type="text" id="addline1" onChange={(e) => {this.handleInputChange(e, { addline1: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="addline2">Address Line 2:</label>
          <input type="text" id="addline2" onChange={(e) => {this.handleInputChange(e, { addline2: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" onChange={(e) => {this.handleInputChange(e, { city: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" onChange={(e) => {this.handleInputChange(e, { state: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" onChange={(e) => {this.handleInputChange(e, { zip: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="phoneNum">Phone Number:</label>
          <input type="text" id="phoneNum" onChange={(e) => {this.handleInputChange(e, { phoneNum: e.target.value })}}></input>
        </div>

        <button onClick={this.handleBackClick.bind(this)}>Back</button>
        <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderFormThree() {
    return (
      <div>
        <h2>Form 3 Rendered!</h2>

        <div>
          <label htmlFor="ccNum">Credit Card Number:</label>
          <input type="text" id="ccNum" onChange={(e) => {this.handleInputChange(e, { ccNum: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="expDate">Exp Date (YYYYMMDD):</label>
          <input type="text" id="expDate" onChange={(e) => {this.handleInputChange(e, { expDate: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" onChange={(e) => {this.handleInputChange(e, { cvv: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="billZip">Billing Zip Code:</label>
          <input type="text" id="billZip" onChange={(e) => {this.handleInputChange(e, { billZip: e.target.value })}}></input>
        </div>

          <button onClick={this.handleBackClick.bind(this)}>Back</button>
          <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderConfirmation() {
    return (
      <div>
          <div><b>Name:</b> {this.state.name}</div>
          <div><b>Email:</b> {this.state.email}</div>
          <div><b>Password:</b> {this.state.password}</div>
          <div><b>Address Line 1:</b> {this.state.addline1}</div>
          <div><b>Address Line 2:</b> {this.state.addline2}</div>
          <div><b>City:</b> {this.state.city}</div>
          <div><b>State:</b> {this.state.state}</div>
          <div><b>Zip:</b> {this.state.zip}</div>
          <div><b>Phone Number:</b> {this.state.phoneNum}</div>
          <div><b>Credit Card Number:</b> {this.state.ccNum}</div>
          <div><b>Exp Date (YYYYMMDD):</b> {this.state.expDate}</div>
          <div><b>CVV:</b> {this.state.cvv}</div>
          <div><b>Billing Zip Code:</b> {this.state.billZip}</div>

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