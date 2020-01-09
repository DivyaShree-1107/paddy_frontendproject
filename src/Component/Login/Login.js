import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './RegisterPage.css';
import browserHistory from '../../Component/utils/browserHistroy'
import { signup } from '../userFunction';

class Login extends Component {
constructor(props) {
super(props);
this.state = {

email: '',
password: '',


uerr: '',
perr: '',



};
}
onHandleChange = (event) => {

this.setState({ [event.target.name]: event.target.value });

}
onHandleClicks = (e) => {

browserHistory.push('/login');

}
onHandleClicksCancel = (e) => {

browserHistory.push('/');

}


onHandleClick = (e) => {

e.preventDefault();
const reqst = {
Firstname: this.state.Firstname,
UserName: this.state.UserName,
email: this.state.email,
password: this.state.password,
Confirmpassword: this.state.Confirmpassword,
Mobnum: this.state.Mobnum

}
signup(reqst).then(res => {
if (res.data === "User Created Succesfully") {
alert("UserCreated Successfully")
browserHistory.push('/login')
}

})

if (this.state.Firstname.length === 0 && this.state.Username.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
this.setState({

uerr: "Email is required",
perr: "Password is required"


})
}

else if (this.state.email.length === 0) {
this.setState({ uerr: "email is required" })
}
else if (this.state.password.length === 0) {
this.setState({ perr: "Password is required" })
}


else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
this.setState({ uerr: "Please enter the valid email" })
}
else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
this.setState({ perr: "Please enter the valid password" })
}

else {
browserHistory.push('/login')

}
}


render() {
return (
<div className="register">
<div class="container">
<div class="row">
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
<h1>Login</h1>


<label ><b>Email</b></label><br />
<input type="text" name="email" className="one" onChange={this.onHandleChange} /><br />
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
// const mapStoreToProps = (state) => {
// const { message } = state.Registerreducer;


// return { message };

export default Login;