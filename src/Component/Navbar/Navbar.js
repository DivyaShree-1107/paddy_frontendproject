import React, { Component } from 'react';
import paddy from './paddylogo.jpeg';
import './Navbar.css';
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
                
            </div>
          
    );
  }
}

export default Navbar;