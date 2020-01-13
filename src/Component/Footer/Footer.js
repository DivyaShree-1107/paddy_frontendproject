import React, { Component } from 'react';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import paddy from '../Navbar/paddylogo.jpeg';



class Footer extends Component {

  render() {
    return (
      <div >
        <footer class="page-footer">

          <div class="container text-center text-md-left">

            <div class="row text-center  ">


              <div class="col-md-3 col-lg-3 col-xl-3 ">
                <img className='paddy_logo' src={paddy} ></img>
                <h6 class="text-uppercase mb-4 font-weight-bold comp_name">Dhaanya Dhaare</h6>
                <p>If you give me rice, I'll eat today; if you teach me how to grow rice, I'll eat every day.</p>
              </div>


              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">

              </div>


              <hr class="w-100 clearfix d-md-none" />


              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">

              </div>

              <hr class="w-100 clearfix d-md-none" />


              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact Info</h6>
                <p>
                  <i class="fas fa-home mr-3"></i>Vishweshwaraiah Canal (V.C) Farm, Mandya-Melkote Road, Mandya, Karnataka 571405 </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>  mandyaagri@gmail.com</p>
                <p>
                  <i class="fas fa-phone mr-3"></i> 080 2333 0153 </p>

              </div>



              <div class="row "></div>


              <div class="col-md-8 col-lg-8 cpy_right">


                <p>© 2020 Copyright:</p>


                <a href="https://www.riceonline.comw">
                  Dhaanyadhaare.co.in
</a>
              </div>

              <div class="col-md-4 col-lg-4">


                <div className="copyright">
                  <ul class="list-styled ">
                    <li class="list-inline-item">
                      <a class="btn-floating">
                        <a href="#"><SocialIcon className="icons" url="http://facebook.com/jaketrent" /></a>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating ">
                        <a href="#"><SocialIcon className="icons" url="http://instagram.com/jaketrent" /></a>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating">
                        <a href="#"><SocialIcon className="icons" url="http://twitter.com/jaketrent" /></a>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating ">
                        <a href="#"><SocialIcon className="icons" url="http://linkedin.com/jaketrent" /></a>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating ">
                        <a href="#"><SocialIcon className="icons" url="http://google.com/jaketrent" /></a>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>









            </div>












          </div>
        </footer>
      </div>






    );
  }
}

export default Footer;