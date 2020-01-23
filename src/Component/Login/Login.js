import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import loginimg from './login1.jpeg';
import paddy from '../Dashboard/paddy01.jpeg'
import paddy1 from '../Dashboard/paddy02.jpeg'
import paddy2 from '../Dashboard/paddy03.jpeg'
import paddy3 from '../Dashboard/paddy04.jpeg'

import BrowserHistory from '../utils/BrowserHistroy'
import paddylo from '../Navbar/paddylogo.jpeg';
import { Fade } from 'react-slideshow-image';


import { withRouter } from 'react-router-dom'
import { loginHandle } from '../../Actions/LoginActions';
// import { signup } from '../userFunction';
import axios from 'axios'


const fadeProperties = {
    duration: 2000,
    transitionDuration: 200,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    },
  }

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Mobnum: '',
            password: '',
            uerr: '',
            perr: ''

        };
    }
    onHandleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }
    onHandleClicks = (e) => {

        BrowserHistory.push('/login');

    }
    onHandleClickRegister = (e) => {
        BrowserHistory.push('/register');

    }
    onHandleClicksCancel = (e) => {

        BrowserHistory.push('/login');

    }


    onHandleClick = (e) => {

        e.preventDefault();
        const payload = {
            password: this.state.password,
            Mobnum: this.state.Mobnum

        }

        this.props.loginHandle(payload);
    }


    render() {
        return (
            <div className="login">
                <div class="login_container">
                            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5 frm_login">
                            <img className='paddy_logo_login' src={paddylo} ></img><br />
                            <span id="LoginTitle">Login</span><br />


                            <label id="login_subtle" >Mob Number</label>
                            <input type="text" name="Mobnum" className="one_login" onChange={this.onHandleChange} /><br />
                            <p >{this.state.uerr}</p>
                            <label id="login_subtle"  >Password</label>
                            <input type="password" name="password" className="one_login_p" onChange={this.onHandleChange} /><br />
                            <p >{this.state.perr}</p>

                            <button onClick={this.onHandleClick} className="btn1_login"><b>Login</b></button>
                            <button onClick={this.onHandleClickRegister} className="btn3_login"><b>Register</b></button>
                            <br /><br/>
                            <a className="btn2_login" href="#" onClick={this.onHandleClicksCancel}>Cancel</a>
                        </div>
                   
                </div>
                {/* <div className="slide-container">
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
                </div> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    debugger
    const { error } = state.RegisterReducer;
    return { error };
};

export default withRouter(connect(mapStateToProps, { loginHandle })(Login));
