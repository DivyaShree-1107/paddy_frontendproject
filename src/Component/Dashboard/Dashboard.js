import React, { Component } from 'react';
import paddy from '../Dashboard/paddy01.jpeg'
import paddy1 from '../Dashboard/paddy02.jpeg'
import paddy2 from '../Dashboard/paddy03.jpeg'
import paddy3 from '../Dashboard/paddy04.jpeg'

import { Fade } from 'react-slideshow-image';
import Navbar from '../Navbar/Navbar';
import Logout from '../Logout/Logout';

  const fadeProperties = {
    duration: 2000,
    transitionDuration: 200,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
}

class Dashboard extends Component {   
  render() {
    return (
            
            <div >
               <Logout/>
                <div className="slide-container">
              <Fade  {...fadeProperties}>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy} />
                  </div>
                  <h2>First Slide</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy1} />
                  </div>
                  <h2>Second Slide</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy2} />
                  </div>
                  <h2>Third Slide</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy3} />
                  </div>
                  <h2>Fourth Slide</h2>
                </div>
              </Fade>
              </div>
              <Navbar/> 
            </div>
          )
        }
          

  }


export default Dashboard;