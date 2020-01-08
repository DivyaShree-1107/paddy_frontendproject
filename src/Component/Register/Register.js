import React, { Component } from 'react';
import './Register.css';


class Register extends Component {
    constructor() {
        super();
        this.state = {
        fields: {},
        errors: {}
        }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
    fields
    });

    }

    submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
    let fields = {};
<<<<<<< HEAD
    fields["firstname"] = "";
=======
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
    fields["username"] = "";
    fields["emailid"] = "";
    fields["mobileno"] = "";
    fields["password"] = "";
<<<<<<< HEAD
    fields["cpassword"] = "";
=======
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
    this.setState({fields:fields});
    alert("Form submitted");
    }

    }

    validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
<<<<<<< HEAD
    
    if (!fields["firstname"]) {
        formIsValid = false;
        errors["firstname"] = "*Please enter your Name.";
        }
    
        if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
        }
        }
=======
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b

    if (!fields["username"]) {
    formIsValid = false;
    errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
    if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    formIsValid = false;
    errors["username"] = "*Please enter alphabet characters only.";
    }
    }

    if (!fields["emailid"]) {
    formIsValid = false;
    errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
    //regular expression for email validation
<<<<<<< HEAD
    var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
=======
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
    if (!pattern.test(fields["emailid"])) {
    formIsValid = false;
    errors["emailid"] = "*Please enter valid email-ID.";
    }
    }

    if (!fields["mobileno"]) {
    formIsValid = false;
    errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
    if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    formIsValid = false;
    errors["mobileno"] = "*Please enter valid mobile no.";
    }
    }

    if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    formIsValid = false;
    errors["password"] = "*Please enter secure and strong password.";
    }
    }

<<<<<<< HEAD
    // if (!fields["cpassword"]) {
    //     formIsValid = false;
    //     errors["cpassword"] = "*Please confirm password.";
    //     }
    
    //     if (typeof fields["cpassword"] !== "undefined") {
    //     if (fields["cpassword"]!== fields["password"]){
    //     formIsValid = false;
    //     errors["cpassword"] = "*Password is not matching.";
    //     }
    //     }

=======
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
    this.setState({
    errors: errors
    });
    return formIsValid;


    }
    render() {
        return (
<<<<<<< HEAD
            <div className="registration_container main_page_bck">
                <h3 className="sign_title" >Signup page</h3>
                <div className="register_form">
                    <form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
                        <label className="content">First Name  :</label>
                        <input className="content_field" type="text" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.firstname}</p>
                        <label className="content">User Name  :</label>
                        <input className="content_field" type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.username}</p>
                        <label className="content">Email ID  :</label>
                        <input className="content_field" type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.emailid}</p>
                        <label className="content">Mobile No  :</label>
                        <input className="content_field" type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.mobileno}</p>
                        <label className="content">Password  :</label>
                        <input className="content_field" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.password}</p>
                        <label className="contentc"> Confirm Password :</label>
                        <input className="content_field" type="password" name="cpassword" value={this.state.fields.cpassword} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.cpassword}</p>
                        <input  type="submit" className="button" value="Register"/>
                        <div><span class="already_user">Already an user?</span><input type="submit" class="button_login" value="Login"/></div>>
                        
=======
            <div className="registration_container">
                <h3 className="sign_title" >Signup page</h3>
                <div className="register_form">
                    <form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
                        <label className="content">First Name</label>
                        <input className="content_field" type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.username}</p>
                        <label className="content">User Name</label>
                        <input className="content_field" type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.username}</p>
                        <label className="content">Email ID:</label>
                        <input className="content_field" type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.emailid}</p>
                        <label className="content">Mobile No:</label>
                        <input className="content_field" type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.mobileno}</p>
                        <label className="content">Password:</label>
                        <input className="content_field" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.password}</p>
                        <label className="contentc"> Confirm Password:</label>
                        <input className="content_field" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <p className="errorMsg">{this.state.errors.password}</p>
                        <input  type="submit" className="button" value="Register"/>
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
                    </form>
                </div>
            </div>

         );
        }


    }

export default Register;