import React from "react";
import { render } from "react-dom";

class Forms extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      form: 0
    }
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
    this.setState({
      form: 0
    })
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
        <div>Form 1 Rendered!</div>
        <button onClick={this.handleBackClick.bind(this)}>Back</button>
        <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderFormTwo() {
    return (
      <div>
        <div>Form 2 Rendered!</div>
        <button onClick={this.handleBackClick.bind(this)}>Back</button>
        <button onClick={this.handleNextClick.bind(this)}>Next</button>
      </div>
    )
  }

  renderFormThree() {
    return (
      <div>
        <div>Form 3 Rendered!</div>
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