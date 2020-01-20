import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';



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
    </div>
  )
}

export default StripeProvider1;
