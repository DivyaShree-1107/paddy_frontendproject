import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './RegisterPage.css';
import BrowserHistory from '../utils/BrowserHistroy'
import { signin } from '../userFunctions1';

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
    onHandleClicksCancel = (e) => {

        BrowserHistory.push('/');

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
            <div className="register">
                <div class=" ">
                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
                            <h1>Login</h1>


                            <label ><b>Mob Num</b></label><br />
                            <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /><br />
                            <p >{this.state.uerr}</p>
                            <label ><b>Password</b></label><br />
                            <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br />
                            <p >{this.state.perr}</p>

                            <button onClick={this.onHandleClick} className="btn1"><b>Login</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
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
