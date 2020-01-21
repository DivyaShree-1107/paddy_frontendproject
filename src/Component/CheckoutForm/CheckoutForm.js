import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import check1 from './check1.jpeg'
import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    debugger;
    const { token } = await this.props.stripe.createToken({ name: "Name" });
    const response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok)
      alert("Your booking successfully")
    if (response.ok) this.setState({ complete: true });

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div class="container_check">
        <div class="row container_check_row">
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
            <img className='check_img' src={check1} ></img>

          </div>
          <div class="col-sm-9 col-lg-9 col-md-9 col-xs-9">
            <div className="Checkout">
              <h3 className="bill_head">Payment Method</h3>
              <CardElement />
              <h3 className="bill_head">Billing Addres</h3>
              <label className="bill_label">Name</label><input className="bill_input1"></input><br/>
              <label className="bill_label">Address</label><input className="bill_input2"></input><br/>
              <label className="bill_label">State</label><input className="bill_input3"></input><br/>
              <label className="bill_label">Country</label><input className="bill_input4"></input><br/>
              <label className="bill_label">ZIP</label><input className="bill_input5"></input><br/>
              <label className="bill_label">Amount</label><input className="bill_input6"></input><br/>
              <label className="bill_label">Phone no</label><input className="bill_input7"></input><br/>
              <label className="bill_label">Email</label><input className="bill_input8" ></input><br/>

              <button class="pay" onClick={this.submit}>Proceed to Purchase</button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);