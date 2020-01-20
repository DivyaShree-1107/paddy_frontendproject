import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import check1 from  './check1.jpeg'
import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }


  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    // if (response.ok) this.setState({complete: true});
    if (response.ok) alert('hai');

  }

  render() {
    return (
      <div>
        <div className="check_grid">
          
          <div className="checkout card_payment">
            <p id="card_payment_title">Card Details</p>
            <CardElement/>
            
            <p id="card_payment_title">Customer Details</p>
            <label>Name</label><input></input>
            <button className="card_pay_submit" onClick={this.submit}>Purchase</button>
          </div>
      

        <div>
        <img class="checkout_img" src={check1} />
        </div>

      </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);