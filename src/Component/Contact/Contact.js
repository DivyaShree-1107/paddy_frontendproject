import React, { Component } from 'react';
import './Contact.css';
import paddy from '../Navbar/paddylogo.jpeg';
import Navbar from '../Navbar/Navbar';




class Contact extends Component {
   
  render() {
    return (
      <div>
    <Navbar/>
          <div className="page">
            {/* <div>
            <Navbar/>
            </div> */}
           
            <div className="contact_us">
                <img className='img_paddy' src={paddy} ></img>
                <h1 className="heading">Contact us to sell crop</h1>
            </div>
            <div className="contactinfo">
                <p className="infotitle">Please fill out this form and we will get back to you shortly</p>
                <div className="info">
                    <div className="name1">Enter Your Name : </div>
                    <div>
                      <input className="name" required type="text" placeholder="Name"></input>
                    </div>
                    <div  className="name1">Enter Your Phone :</div> 
                    <div><input className="name" required type="phone" placeholder="Phone"></input></div>
                    <div  className="name1">Enter Your Email : </div>
                    <div><input className="name" required type="email" placeholder="Email"></input></div>
                    <div  className="name1">Type Your Message Here:</div>
                    <div><textarea className="name" type="text" rows="2" cols="25" required placeholder="Please enter your text here."></textarea></div>
                  </div>
                  <div><button className="submitt" type="submit"> Submit</button></div>
             </div>
          </div>    
          </div>       
    );
  }
}

export default Contact;