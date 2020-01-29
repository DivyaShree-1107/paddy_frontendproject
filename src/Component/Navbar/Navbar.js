import React, { Component } from 'react';
import paddy from './paddylogo.jpeg';

import user from './user.ico';
import './Navbar.css';
import BrowserHistroy from '../utils/BrowserHistroy'


class Navbar extends Component {
  state={
    hide:false,
    show:false,
    Users: [],
    Firstname:'',
    email:''
    
  }
  Info() {
    BrowserHistroy.push('/info');
  }
  Login() {
    BrowserHistroy.push('/login')
  }
  Logout() {
    BrowserHistroy.push('/login');
    sessionStorage.removeItem('authentication');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('Firstname');

  }
  Contact() {
    BrowserHistroy.push('/contact');
  }
  Register() {
    BrowserHistroy.push('/register');
  }
  Buy() {
    BrowserHistroy.push('/buy');
  }
  receipt(){
    BrowserHistroy.push('/receipt');
  }
  componentDidMount(){
    if(sessionStorage.getItem('role')=='user')
    {
      this.setState({hide:true})
    }
    else if (sessionStorage.getItem('role')=='admin')
    {
      this.setState({show:true})
    }
  }
 
  render() {
       return (
      <div className="row navbar" >
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text"  >
          <img className='paddy_logo_nav' src={paddy} ></img>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text">
          <span className="nav_title">Dhaanya Dhaare</span>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text"  >
          <button onClick={this.Info} className="nav_button">About</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text">
          <button onClick={this.Contact} className="nav_button">ContactUs</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button onClick={this.Register} className="nav_button">Register</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button onClick={this.Login} className="nav_button">Login</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button hidden={this.state.hide} onClick={this.Buy} className="nav_button">Buy</button>
        </div>
       
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button hidden={this.state.show} onClick={this.receipt} className="nav_button">Receipt</button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text">
          <img className="nav_logo_img" src={user} />
       <label  className="nav_button_user">{sessionStorage.getItem('Firstname')}</label>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nav_text" >
          <button onClick={this.Logout} className="nav_button">Logout</button>
        </div>
        
      


      </div>

    );
  }
}

export default Navbar;