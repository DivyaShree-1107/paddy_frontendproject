import React, { Component } from 'react';
import paddy from './paddylogo.jpeg';
import './Navbar.css';
<<<<<<< HEAD
import browserHistroy from '../../Component/utils/browserHistroy'

class Navbar extends Component {
  Info(){
    browserHistroy.push('/info');
     }
  // Sell=()=>{
  //   browserHistroy.push('/')
  // }
  Contact(){
    browserHistroy.push('/contact');
  }
  render() {
    return (
            <div className="row navbar" >
                
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text"  >
                <button onClick={this.Info} className="nav_button">Information</button> 
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text">
                <button onClick={this.Sell} className="nav_button">Sell</button>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text" >
                <button onClick={this.Contact} className="nav_button">Contact Us</button>
                </div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text" >
                <button onClick={this.About} className="nav_button">About Us</button>
                </div>
                
=======

class Navbar extends Component {
  render() {
    return (
            <div className="row navbar" style={{background:'#84c384'}}>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
                <img className='img_paddys' src={paddy} ></img>
               </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text" style={{color:'white'}} >
                Login
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text"style={{color:'white'}}>
                Sign Up
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 nav_text"style={{color:'white'}} >
                Buying Products
                </div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 nav_text"style={{color:'white'}} >
                Contact Us
                </div>
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
            </div>
          
    );
  }
}

export default Navbar;