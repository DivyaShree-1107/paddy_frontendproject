import React, { Component } from 'react';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';



class Footer extends Component {
   
  render() {
    return (
        <div className="footer">
            <footer class="page-footer font-small blue">
              <div class="row footer-copyright py-3">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" >
                 Vishweshwaraiah Canal (V.C) Farm, Mandya-Melkote Road, Mandya, Karnataka 571405 
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                | 080 2333 0153 
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                |  mandyaagri@gmail.com
                </div>  
              </div>                
                  <div className="row ">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 " >
                    <span><a href="#"><SocialIcon className="icons" url="http://facebook.com/jaketrent" /></a></span>
                    <span><a href="#"><SocialIcon className="icons" url="http://instagram.com/jaketrent"/></a></span>
                    <span><a href="#"><SocialIcon className="icons" url="http://twitter.com/jaketrent" /></a></span>
                    <span><a href="#"><SocialIcon className="icons" url="http://linkedin.com/jaketrent" /></a></span>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                      <span>@2020 DhaanyaDhare</span>
                    </div>
                  </div>          
            </footer>
        </div>
    );
  }
}

export default Footer;
