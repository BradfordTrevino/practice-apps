import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Forms from "./Forms.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

class App extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    })
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
        <button onClick={this.handleOpenModal}>Checkout</button>
        <Modal isOpen={this.state.showModal} contentLabel="Test Example">
          <Forms submitData={this.submitData.bind(this)} handleCloseModal={this.handleCloseModal}/>
        </Modal>
      </div>
    )
  }
}

export default App;