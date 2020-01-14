import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import loginimg from './login1.jpeg';

import BrowserHistory from '../utils/BrowserHistroy'
import paddy from '../Navbar/paddylogo.jpeg';

import { withRouter } from 'react-router-dom'
import { loginHandle } from '../../Actions/LoginActions';
// import { signup } from '../userFunction';
import axios from 'axios'

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
    onHandleClickRegister=(e) => {
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
                    <div class="row">
                        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <img className='loginimg' src={loginimg} ></img>
                        </div>
                        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm_login">
                        <img className='paddy_logo' src={paddy} ></img><br/><br/>
                            <span id="LoginTitle">Login</span><br/>


                            <label id="login_subtle" >Mob Number</label>
                            <input type="text" name="Mobnum" className="one_login" onChange={this.onHandleChange} /><br />
                            <p >{this.state.uerr}</p>
                            <label id="login_subtle"  >Password</label>
                            <input type="password" name="password" className="one_login_p" onChange={this.onHandleChange} /><br /><br />
                            <p >{this.state.perr}</p>

                            <button onClick={this.onHandleClick} className="btn1_login"><b>Login</b></button>
                            <button onClick={this.onHandleClickRegister} className="btn3_login"><b>Register</b></button>
                            <br/>
                            <a className="btn2_login" href="#" onClick={this.onHandleClicksCancel}>Cancel</a>
                        </div>
                    </div>
                </div>
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
