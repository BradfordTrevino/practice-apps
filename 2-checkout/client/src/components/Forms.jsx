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
      window.alert('Incomplete form!')
    }
    // if (inputValues.includes(''))
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
          <input type="text" id="name" placeholder="Name" onChange={(e) => {this.handleInputChange(e, { name: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="email" placeholder="Email" onChange={(e) => {this.handleInputChange(e, { email: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="password" placeholder="Password" onChange={(e) => {this.handleInputChange(e, { password: e.target.value })}}></input>
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
          <input type="text" id="addline1" placeholder="Address Line 1" onChange={(e) => {this.handleInputChange(e, { addline1: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="addline2" placeholder="Address Line 2" onChange={(e) => {this.handleInputChange(e, { addline2: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="city" placeholder="City" onChange={(e) => {this.handleInputChange(e, { city: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="state" placeholder="State" onChange={(e) => {this.handleInputChange(e, { state: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="zip" placeholder="Zip Code" onChange={(e) => {this.handleInputChange(e, { zip: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="phoneNum" placeholder="Phone Number" onChange={(e) => {this.handleInputChange(e, { phoneNum: e.target.value })}}></input>
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
          <input type="text" id="ccNum" placeholder="CC Number"onChange={(e) => {this.handleInputChange(e, { ccNum: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="expDate" placeholder="Exp Date (YYYYMMDD)" onChange={(e) => {this.handleInputChange(e, { expDate: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="cvv" placeholder="CVV" onChange={(e) => {this.handleInputChange(e, { cvv: e.target.value })}}></input>
        </div>

        <div>
          <input type="text" id="billZip" placeholder="Billing Zip Code" onChange={(e) => {this.handleInputChange(e, { billZip: e.target.value })}}></input>
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