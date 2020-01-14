import React, { Component } from 'react';
import paddy from '../Navbar/paddylogo.jpeg';
import './Navbaruser.css';
import BrowserHistroy from '../utils/BrowserHistroy'

class Navbaruser extends Component {
  Info() {
    BrowserHistroy.push('/info');
  }
  Login() {
    BrowserHistroy.push('/login')
  }
  Contact() {
    BrowserHistroy.push('/contact');
  }
  Register() {
    BrowserHistroy.push('/register');
  }
  Buy() {
    BrowserHistroy.push('/receipt');
  }
  render() {
    return (
      <div className="row navbar" >


        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text"  >
          <img className='paddy_logo' src={paddy} ></img>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text">
          <span className="nav_title">Dhaanya Dhaara</span>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text"  >
          <button onClick={this.Info} className="nav_button">About</button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text">
          <button onClick={this.Contact} className="nav_button">Contact Us</button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text" >
          <button onClick={this.Register} className="nav_button">Register</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button onClick={this.Buy} className="nav_button">Receipt</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button onClick={this.Login} className="nav_button">Login</button>
        </div>


      </div>

    );
  }
}

export default Navbaruser;