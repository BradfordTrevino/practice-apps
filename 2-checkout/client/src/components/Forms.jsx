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
    if (this.state.form > 1) {
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
    this.props.submitData(this.state);
    this.clearState();
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
          <input type="text" id="name" onChange={(e) => {this.setState({ name: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={(e) => {this.setState({ email: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" onChange={(e) => {this.setState({ password: e.target.value })}}></input>
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
          <input type="text" id="addline1" onChange={(e) => {this.setState({ addline1: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="addline2">Address Line 2:</label>
          <input type="text" id="addline2" onChange={(e) => {this.setState({ addline2: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" onChange={(e) => {this.setState({ city: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" onChange={(e) => {this.setState({ state: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" onChange={(e) => {this.setState({ zip: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="phoneNum">Phone Number:</label>
          <input type="text" id="phoneNum" onChange={(e) => {this.setState({ phoneNum: e.target.value })}}></input>
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
          <input type="text" id="ccNum" onChange={(e) => {this.setState({ ccNum: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="expDate">Exp Date (YYYYMMDD):</label>
          <input type="text" id="expDate" onChange={(e) => {this.setState({ expDate: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" onChange={(e) => {this.setState({ cvv: e.target.value })}}></input>
        </div>

        <div>
          <label htmlFor="billZip">Billing Zip Code:</label>
          <input type="text" id="billZip" onChange={(e) => {this.setState({ billZip: e.target.value })}}></input>
        </div>

          <button onClick={this.handleBackClick.bind(this)}>Back</button>
          <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderConfirmation() {
    return (
      <div>
        <div>Confirmation!</div>
        <button onClick={this.handlePurchaseClick.bind(this)}>Purchase</button>
      </div>
    )
  }

  render() {
    const { form } = this.state

    return (
      <div>
        <h1>Hello! I am a form!</h1>
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