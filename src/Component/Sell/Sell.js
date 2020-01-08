import React, { Component } from 'react';
// import browserHistroy from '../../Component/utils/browserHistroy'

class Sell extends Component {

  render() {
    return (
            <div >
                <h3 className="sign_title" >Please fill in details</h3>
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
                        
                    </form>
                </div>
                
            </div>
          
    );
  }
}

export default Sell;