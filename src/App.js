import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
import Info from './Component/Info/Info';
import Dashboard from './Component/Dashboard/Dashboard';
import Buyform from './Component/Buyform/Buyform';
import Login from './Component/Login/Login';
import Receipt from './Component/Receipt/Receipt';
import StripeProvider1 from './Component/CheckoutForm/StripeProvider1';
import fpfirst from './Component/Forgotpass/fpfirst';
import fpsecond from './Component/Forgotpass/fpsecond';

// import { Elements, StripeProvider } from 'react-stripe-elements';
// import CheckoutForm from './Component/CheckoutForm/CheckoutForm';
// import Dummy from './Component/Dummy/Dummy';


const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
        <Redirect to={{ pathname: '/', state: { from: props.location }, }} />)
    )}
  />
);

const PrivateRoute1 = ({ component: IncomingComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (sessionStorage.getItem('role')=='admin') ? (<IncomingComponent {...props} />) : (
        <Redirect to={{ pathname: '/dashboard', state: { from: props.location }, }} />)
    )}
  />
);




function App() {
  return (
    <div className="App ">

      <Router>

        <switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/fpfirst" component={fpfirst}></Route>
          <Route exact path="/fpsecond" component={fpsecond}></Route>
          <PrivateRoute exact path='/info' component={Info}></PrivateRoute>
          <Route exact path='/register' component={Register}></Route>
          <PrivateRoute exact path='/contact' component={Contact}></PrivateRoute>
          <Route exact path='/login' component={Login}></Route>
          <PrivateRoute1 exact path='/buy' component={Buyform}></PrivateRoute1>
          <PrivateRoute exact path='/receipt' component={Receipt}></PrivateRoute>
          <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
          <PrivateRoute1 exact path='/stripeprovider' component={StripeProvider1}></PrivateRoute1>

        </switch>
      </Router>
      {/* <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">

          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider> */}
    </div>
  )
}

export default App;
