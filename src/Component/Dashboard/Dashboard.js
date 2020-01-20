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
        <Navbar />
        <div className="slide-container">
          <Fade  {...fadeProperties}>
            <div className="each-fade">
              <div className="image-container">
                <img className="home_paddy_img" src={paddy} />
              </div>
              <h2 className="scroll_quotes">If you give me rice, I'll eat today; if you teach me how to grow rice, I'll eat every day.</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="home_paddy_img" src={paddy1} />
              </div>
              <h2 className="scroll_quotes">Rice is the best, the most nutritive and unquestionably the most widespread staple in the world.</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="home_paddy_img" src={paddy2} />
              </div>
              <h2 className="scroll_quotes">Never break another man's rice bowl.</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="home_paddy_img" src={paddy3} />
              </div>
              <h2 className="scroll_quotes">Peace is achieved with rice and salt, not with katanas and arrows</h2>
            </div>
          </Fade>
        </div>

        <p class="microsoft marquee">  <span classname="dates"> Dec. 31</span><span>Asian Prices Update</span><span classname="dates">SEPT 19</span><span>KOREA TENDERS UPDATE</span><span classname="dates">July 18</span><span>RMG River Conditions Report</span><span classname="dates">JULY 2</span><span>PAKI PRICES UPDATE</span><span classname="dates">JAN 31</span><span>COL-RICE TENDER, UPDATED RESULTS </span></p>

        <div class="container_para">
          <div >
            <h1 className="header">Welcome to Paddy Online</h1>
          </div>
          <div class="row para_body">
            <div class="col-xs-8 content_para">
              <h2 className="head_dash">Your "Paddy Portal" to the Worldwide Rice Industry</h2>
              <p className="para_dash">RiceOnline is the premier web portal for the most comprehensive rice information from the worldwide rice industry. You subscription includes weekly issues of the Creed Rice Market Report with the most comprehensive rice market insight available as well as unlimited access to the resources on riceonline.com. Sign up today and get the information you need to buy, sell and trade rice and rice products around the world.</p>
            </div>
            <div class="col-xs-4 tall">
              <div class="related_side">
                Rice News From Around the World
                    </div>
              <div class="menu sticky">
                <ul>
                  <li>Friday, January 10, 2020</li>
                  <li>Thursday, January 09, 2020</li>
                  <li>Tuesday, January 07, 2020</li>
                  <li>Friday, January 10, 2020</li>
                  <li>Thursday, January 09, 2020</li>
                  <li>Tuesday, January 07, 2020</li>
                  <li>Friday, January 10, 2020</li>
                  <li>Thursday, January 09, 2020</li>
                  <li>Tuesday, January 07, 2020</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div>

          <h3 className="img_title">Famous Paddy Varieties</h3>
          <div class="card-columns">
            <div class=" one_card">
              <div class="card" >
                <img class="card-img-top" src={gowri} />
                <div class="card-body">
                  <h4 class="card-title_info">Gowri Sanna</h4>
                  <p class="card_text_info">70 INR</p>
                  <p class="card_text_info">Karnataka</p>
                  <a href="https://en.wikipedia.org/wiki/Gowri_sanna" class="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
            <div class=" one_card">
              <div class="card" >
                <img class="card-img-top" src={jolaga} />
                <div class="card-body">
                  <h4 class="card-title_info">Jolaga</h4>
                  <p class="card_text_info">65 INR</p>
                  <p class="card_text_info">Malnad</p>
                  <a href="https://en.wikipedia.org/wiki/Jolaga" class="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
            <div class="one_card">
              <div class="card" >
                <img class="card-img-top" src={salem} />
                <div class="card-body">
                  <h4 class="card-title_info">Salem Sanna</h4>
                  <p class="card_text_info">45 INR</p>
                  <p class="card_text_info">Tamil Nadu</p>
                  <a href="https://en.wikipedia.org/wiki/Salem_sanna" class="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>

          </div>


          {/* second line// */}
          <div class="card-columns">
            <div class=" one_card">
              <div class="card" >
                <img class="card-img-top" src={sona} />
                <div class="card-body">
                  <h4 class="card-title_info">Sona Masoori</h4>
                  <p class="card_text_info">50 INR</p>
                  <p class="card_text_info">Karnataka, Andra Pradesh</p>
                  <a href="https://en.wikipedia.org/wiki/Sona_Masuri" class="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
            <div class="one_card">
              <div class="card" >
                <img class="card-img-top" src={kolam} />
                <div class="card-body">
                  <h4 class="card-title_info">Kolam</h4>
                  <p class="card_text_info">50 INR</p>
                  <p class="card_text_info">Woda Taluka</p>
                  <a href="https://en.wikipedia.org/wiki/Woda_Taluka" class="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
            <div class=" one_card">
              <div class="card" >
                <img class="card-img-top" src={black_rice} />
                <div class="card-body">
                  <h4 class="card-title_info">Black Rice</h4>
                  <p class="card_text_info">195 INR</p>
                  <p class="card_text_info">China</p>
                  <a href="https://en.wikipedia.org/wiki/Black_Rice" class="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
          </div>


        </div>
        <Footer />
      </div>
    )
  }


}


export default Dashboard;