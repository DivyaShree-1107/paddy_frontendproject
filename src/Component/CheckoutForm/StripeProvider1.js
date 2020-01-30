import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import BrowserHistory from '../utils/BrowserHistroy'
import { render } from '@testing-library/react';
import './CheckoutForm.css';




// onclickback=()=>{
//   BrowserHistory.push('/dashboard')
// }


function StripeProvider1() {

 
  return (
    <div className="stripe_provider">
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
        </StripeProvider>
        <a href='../Dashboard' className="pay_back">Back</a> 
    </div>
  )
}

export default StripeProvider1;
