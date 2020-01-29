import React, { Component } from 'react';

import './Register.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import BrowserHistroy from '../utils/BrowserHistroy';
import regimg from './bg2.jpeg';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { registerHandle } from '../../Actions/RegisterActions';
import BrowserHistory from '../../Component/utils/BrowserHistroy'
// import { signup } from '../userFunction';
import axios from 'axios'



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Username: '',
      password: '',
      Confirmpassword: '',
      email: '',
      Mobnum: '',
      // Admin: '',
      ferr: '',
      lerr: '',
      uerr: '',
      perr: '',
      cperr: '',
      phnerr: ''
    };
  }

  onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });

  }
  onHandleClicks = (e) => {

    BrowserHistroy.push('/login');

  }
  onHandleClicksCancel = (e) => {

    BrowserHistroy.push('/register');

  }
  onHandleLogin() {
    BrowserHistroy.push('/login')
  }


  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const payload = {
      Firstname: this.state.Firstname,
      Username: this.state.Username,
      email: this.state.email,
      password: this.state.password,
      Confirmpassword: this.state.Confirmpassword,
      Mobnum: this.state.Mobnum,
      // Admin:this.state.Admin

    }


    if (this.state.Firstname.length === 0 && this.state.Username.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
      this.setState({
        ferr: "Firstname is required",
        lerr: "Lastname is required",
        uerr: "Email is required",
        perr: "Password is required",
        cperr: "ConrimPassword is required",
        phnerr: "Phonumber is required"

      })
    }
    else if (this.state.Firstname.length === 0) {
      this.setState({ ferr: "Firstname is required" })
    }
    else if (this.state.Username.length === 0) {
      this.setState({ lerr: "Lastname is required" })
    }
    else if (this.state.email.length === 0) {
      this.setState({ uerr: "Username is required" })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.Confirmpassword.length === 0) {
      this.setState({ Cperr: "Password is required" })
    }
    else if (this.state.Mobnum.length === 0) {
      this.setState({ phnerr: "Password is required" })
    }

    else if (!this.state.Firstname.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ ferr: "Please enter the valid fname" })
    }
    else if (!this.state.Username.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ lerr: "Please enter the valid lname" })
    }
    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
      this.setState({ uerr: "Please enter the valid email" })
    }
    else if (!this.state.password.match(/^[A-Za-z0-9]{6,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
    else if (!this.state.Confirmpassword.match(/^[A-Za-z0-9]{6,11}$/)) {
      this.setState({ cperr: "Please enter the valid password" })
    }
    else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
      this.setState({ phnerr: "Please enter the valid number" })
    }

    // else {
    // BrowserHistory.push('/login')
    // this.Loginaction.props.success("Register Successfully")
    // }
    this.props.registerHandle(payload);


  }


  render() {
    return (
      <div >
        <div className="row reg_body">
          <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6">
         
          </div>
          <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm_reg">

            <h4 className="card-title">Signup</h4>
            <div className="regcont">
              <div>
                <span><label className="register_fields_1">First Name:</label></span>
                <span><input type="text" name="Firstname" className="one_input" onChange={this.onHandleChange} /></span>
                <span><p className="error_reg" >{this.state.ferr}</p></span>
              </div>
              <div>
                <span><label className="register_fields_1">Last Name:</label></span>
                <span><input type="text" name="Username" className="one_input" onChange={this.onHandleChange} /></span>
                <span> <p className="error_reg">{this.state.lerr}</p></span>
              </div>
              <div>
                <span><label className="register_fields_2" >Email:</label></span>
                <span> <input type="text" name="email" className="one_input" onChange={this.onHandleChange} /></span>
                <span> <p className="error_reg">{this.state.uerr}</p></span>
              </div>
              <div>
                <span><label className="register_fields_3">Password:</label></span>
                <span> <input type="password" name="password" className="one_input" onChange={this.onHandleChange} /></span>
                <span> <p className="error_reg" >{this.state.perr}</p></span>
              </div>
              <div>
                <span> <label className="register_fields_4" >Confirm password:</label></span>
                <span> <input type="password" name="Confirmpassword" className="one_input" onChange={this.onHandleChange} /></span>
                <span> <p className="error_reg">{this.state.cperr}</p></span>
              </div>
              <div>
                <span> <label className="register_fields_5">Mobilenumber:</label></span>
                <span> <input type="text" name="Mobnum" className="one_input" onChange={this.onHandleChange} /></span>
                <p className="error_reg">{this.state.phnerr}</p>
              </div>
            </div>
            <button onClick={this.onHandleClick} className="btn1_reg"><b>Register</b></button><br />
            <a href="#" className="already" onClick={this.onHandleClicks}>Already have an Account ? </a><button onClick={this.onHandleLogin} className="btn2_reg"><b>Login</b></button><br /><br/>
            <span className="cancel_reg" onClick={this.onHandleClicksCancel}>Cancel</span>
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

export default withRouter(connect(mapStateToProps, { registerHandle })(Register));
