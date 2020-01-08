import React, { Component } from 'react';
import paddy from './paddylogo.jpeg';


class Logout extends Component {
  render() {
    return (
            <div className="row logout" >
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 " >
                <img className='img_paddys' src={paddy} ></img>
               </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 nav_text" >
                <button className="nav_button">Logout</button>
              </div>
            </div>
          
    );
  }
}

export default Logout;