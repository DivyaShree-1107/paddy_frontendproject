import React, { Component } from 'react';
import paddy from './paddylogo.jpeg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
            <div className="row navbar" >
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
                <img className='img_paddys' src={paddy} ></img>
               </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text"  >
                Login
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 nav_text">
                Sign Up
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 nav_text" >
                Buying Products
                </div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 nav_text" >
                Contact Us
                </div>
            </div>
          
    );
  }
}

export default Navbar;