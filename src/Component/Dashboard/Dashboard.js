import React, { Component } from 'react';
import paddy from '../Dashboard/paddy01.jpeg'
import paddy1 from '../Dashboard/paddy02.jpeg'
import paddy2 from '../Dashboard/paddy03.jpeg'
import paddy3 from '../Dashboard/paddy04.jpeg'
import gowri from '../Dashboard/gowrisanna.jpeg'
import sona from '../Dashboard/sonamasori.jpeg'
import jolaga from '../Dashboard/jolaga.jpeg'
import salem from '../Dashboard/salemsanna.jpeg'
import kolam from '../Dashboard/rajkamal.jpeg'
import black_rice from '../Dashboard/karijaddu.jpeg'
import "./Dashboard.css"

import { Fade } from 'react-slideshow-image';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


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
               <Navbar/>
                <div className="slide-container">
              <Fade  {...fadeProperties}>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy} />
                  </div>
                  <h2>If you give me rice, I'll eat today; if you teach me how to grow rice, I'll eat every day.</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy1} />
                  </div>
                  <h2>Rice is the best, the most nutritive and unquestionably the most widespread staple in the world.</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy2} />
                  </div>
                  <h2>Never break another man's rice bowl.</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={paddy3} />
                  </div>
                  <h2>Peace is achieved with rice and salt, not with katanas and arrows</h2>
                </div>
              </Fade>
              </div>
          



              <div class="card-columns">
              <div class="container one_card">
                <div class="card" >
                  <img class="card-img-top" src={gowri}  />
                  <div class="card-body">
                    <h4 class="card-title">Gowri Sanna</h4>
                    <p class="card-text">70 INR</p>
                    <p class="card-text">Karnataka</p>
                    <a href="https://en.wikipedia.org/wiki/Gowri_sanna" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>
              <div class="container one_card">
                <div class="card" >
                  <img class="card-img-top" src={jolaga}  />
                  <div class="card-body">
                    <h4 class="card-title">Jolaga</h4>
                    <p class="card-text">65 INR</p>
                    <p class="card-text">Malnad</p>
                    <a href="https://en.wikipedia.org/wiki/Jolaga" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>
              <div class="container one_card">
                <div class="card" >
                  <img class="card-img-top" src={salem}  />
                  <div class="card-body">
                    <h4 class="card-title">Salem Sanna</h4>
                    <p class="card-text">45 INR</p>
                    <p class="card-text">Tamil Nadu</p>
                    <a href="https://en.wikipedia.org/wiki/Salem_sanna" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>

         </div>

      
      {/* second line// */}
              <div class="card-columns">
              <div class="container one_card">
                <div class="card" >
                  <img class="card-img-top" src={sona}  />
                  <div class="card-body">
                    <h4 class="card-title">Sona Masoori</h4>
                    <p class="card-text">50 INR</p>
                    <p class="card-text">Karnataka, Andra Pradesh</p>
                    <a href="https://en.wikipedia.org/wiki/Sona_Masuri" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>
              <div class="container one_card">
                <div class="card" >
                  <img class="card-img-top" src={kolam}  />
                  <div class="card-body">
                    <h4 class="card-title">Kolam</h4>
                    <p class="card-text">50 INR</p>
                    <p class="card-text">Woda Taluka</p>
                    <a href="https://en.wikipedia.org/wiki/Woda_Taluka" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>
              <div class="container one_card">
                <div class="card" >
                  <img class="card-img-top" src={black_rice}  />
                  <div class="card-body">
                    <h4 class="card-title">Black Rice</h4>
                    <p class="card-text">195 INR</p>
                    <p class="card-text">China</p>
                    <a href="https://en.wikipedia.org/wiki/Black_Rice" class="btn btn-primary">Know more</a>
                  </div>
                </div>
              </div>

         </div>
          <Footer/>

            </div>
          )
        }
          

  }


export default Dashboard;