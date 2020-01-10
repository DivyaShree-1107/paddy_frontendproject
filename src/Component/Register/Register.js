import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../Register.css';
import BrowserHistroy from '../utils/BrowserHistroy'

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {registerHandle} from '../../Actions/RegisterActions';
import BrowserHistory from '../../Component/utils/BrowserHistroy'
// import { signup } from '../userFunction';
// import axios from 'axios'



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
    onHandleLogin(){
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
        Mobnum: this.state.Mobnum

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
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
    this.setState({ perr: "Please enter the valid password" })
    }
    else if (!this.state.Confirmpassword.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
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
    // BrowserHistroy.push('/login')
    // const url = "http://localhost:4013/Signup"
    // return axios({
    // method: 'POST',
    // url,
    // data: payload
    // }).then(async (res) => {
    // console.log(res);
    // BrowserHistory.push('/login')
    // })

    }


    render() {
        return (
                <div className="register">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                            </div>
                            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">

                            <div class="container one_card">
                                <div class="card" >
                                  <div class="card-body">
                                    <h4 class="card-title">Signup</h4>
                                    <div className="regcont">
                                        <div>
                                            <span><label ><b>First Name</b></label></span>
                                            <span><input type="text" name="Firstname" className="one" onChange={this.onHandleChange} /></span>
                                            <span><p >{this.state.ferr}</p></span>
                                        </div>
                                        <div> 
                                            <span><label><b>Last Name</b></label></span>
                                            <span><input type="text" name="Username" className="one" onChange={this.onHandleChange} /></span>
                                            <span> <p >{this.state.lerr}</p></span>
                                        </div>
                                        <div>
                                            <span><label ><b>Email</b></label><br/></span>
                                            <span> <input type="text" name="email" className="one" onChange={this.onHandleChange} /></span>
                                            <span> <p >{this.state.uerr}</p></span>
                                        </div>
                                        <div>
                                            <span><label ><b>Password</b></label></span>
                                            <span> <input type="password" name="password" className="one" onChange={this.onHandleChange} /></span>
                                            <span> <p >{this.state.perr}</p></span>
                                        </div>
                                        <div>
                                            <span> <label ><b>Confirmpassword</b></label></span>
                                            <span> <input type="password" name="Confirmpassword" className="one" onChange={this.onHandleChange} /></span>
                                            <span> <p >{this.state.cperr}</p></span>
                                        </div>
                                        <div>
                                            <span> <label ><b>Mobilenumber</b></label></span>
                                            <span> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /></span>
                                            <p >{this.state.phnerr}</p>
                                        </div>
                                        </div>
                                        <a href="" onClick={this.onHandleClicks}>Already have an Account ? </a><button onClick={this.onHandleLogin} className="btn1"><b>Login</b></button>
                                        
                                        <button onClick={this.onHandleClick} className="btn1"><b>Register</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
                                    
                                  </div>
                                </div>
                            </div>

                     
                            
                            </div>
                            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                            </div>
                        </div>
                </div>
                
                </div>
                );
            }
        }
const mapStateToProps=(state)=>{
const {Firstname,Username,email,password,Confirmpassword,Mobnum }=state.RegisterReducer
return {Firstname,Username,email,password,Confirmpassword,Mobnum }
}
export default connect(mapStateToProps,{registerHandle}) (Register);
