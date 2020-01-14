import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
import Info from './Component/Info/Info';
import Dashboard from './Component/Dashboard/Dashboard';
import Buyform from './Component/Buyform/Buyform';
import Login from './Component/Login/Login';
import Receipt from './Component/Receipt/Receipt';
import Dashboarduser from './Component/Dashboarduser/Dashboarduser';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (
  (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
  <Redirect to={{ pathname: '/', state: { from: props.location }, }} />)
  )}
  />
  );


function App() {
  return (
    <div className="App ">

      <Router>

        <switch>
          <Route exact path="/" component={Info}></Route>
          <PrivateRoute exact path='/info' component={Info}></PrivateRoute>
         <Route exact path='/register' component={Register}></Route>
         <Route exact path='/contact' component={Contact}></Route> 
         <Route exact path='/login' component={Login}></Route> 
         <Route exact path='/buy' component={Buyform}></Route> 
         <Route exact path='/receipt' component={Receipt}></Route> 
         <Route exact path='/dashboarduser' component={Dashboarduser}></Route> 
         <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>        
        </switch>
      </Router>
    </div>
  )
}

export default App;
