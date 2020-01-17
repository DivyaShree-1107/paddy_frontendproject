import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
      }
      

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    // if (response.ok) this.setState({complete: true});
    if (response.ok) alert('hai');

  }

  render() {
    return (
      <div className="checkout card_payment">
        <p id="card_payment_title">Would you like to complete the purchase?</p>
        <CardElement />
        <button className="card_pay_submit" onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);