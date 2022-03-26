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

  handleBackClick() {
    const { form } = this.state;
    const { handleCloseModal } = this.props;

    if (form === 1) {
      handleCloseModal();
    }

    if (form > 1) {
      this.setState({
        form: form - 1
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
      <div className="formOne">
        <h2>Information:</h2>

        <div className="field">
          <input type="text" id="name" className="input" placeholder="Name" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="email" className="input" placeholder="Email" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="password" className="input" placeholder="Password" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <button className="button" onClick={this.handleBackClick.bind(this)}>Back</button>
          <button className="button" onClick={this.handleNextClick.bind(this)}>Next</button>
        </div>
      </div>
    )
  }

  renderFormTwo() {
    return (
      <div>
        <h2>Address:</h2>

        <div className="field">
          <input type="text" id="addline1" className="input" placeholder="Address Line 1" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="addline2" className="input" placeholder="Address Line 2 (OPTL)" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="city" className="input" placeholder="City" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="state" className="input" placeholder="State" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="zip" className="input" placeholder="Zip Code" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="phoneNum" className="input" placeholder="Phone Number" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <button className="button" onClick={this.handleBackClick.bind(this)}>Back</button>
          <button className="button" onClick={this.handleNextClick.bind(this)}>Next</button>
        </div>
      </div>
    )
  }

  renderFormThree() {
    return (
      <div>
        <h2>Payment Info:</h2>

        <div className="field">
          <input type="text" id="ccNum" className="input" placeholder="CC Number"onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="expDate" className="input" placeholder="Exp Date (YYYYMMDD)" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="cvv" className="input" placeholder="CVV" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <input type="text" id="billZip" className="input" placeholder="Billing Zip Code" onChange={(e) => {this.handleInputChange(e, e.target.value)}}></input>
        </div>

        <div className="field">
          <button className="button" onClick={this.handleBackClick.bind(this)}>Back</button>
          <button className="button" onClick={this.handleNextClick.bind(this)}>Next</button>
        </div>
      </div>
    )
  }

  renderConfirmation() {
    const { name, email, password, addline1, addline2, city, state, zip, phoneNum, ccNum, expDate, cvv, billZip } = this.state.checkout;

    return (
      <div>
        <h2>Confirmation:</h2>

        <div className="confirmation">
          <ul className="confirmation">
            <li>{name}</li>
            <li>{email}</li>
            <li>{password}</li>
            <li>{addline1}</li>
            <li>{addline2}</li>
            <li>{city}</li>
            <li>{state}</li>
            <li>{zip}</li>
            <li>{phoneNum}</li>
            <li>{ccNum}</li>
            <li>{expDate}</li>
            <li>{cvv}</li>
            <li>{billZip}</li>
          </ul>
        </div>

        <div className="field">
          <button className="button" onClick={this.handleBackClick.bind(this)}>Back</button>
          <button className="button" onClick={this.handlePurchaseClick.bind(this)}>Purchase</button>
        </div>
      </div>
    )
  }

  render() {
    const { form } = this.state

    return (
      <div>
        { form === 1 ? this.renderFormOne() : null }
        { form === 2 ? this.renderFormTwo() : null }
        { form === 3 ? this.renderFormThree() : null }
        { form === 4 ? this.renderConfirmation() : null }
      </div>
    )
  }
}


export default Forms;