import React, { Component } from 'react';






class Dummy extends Component {

    render() {
        return (
            <div>
                <div className="dummymain">
                    <p>Farmers , "The backbone of the country"</p>
                </div>
                <div className="dummymain2">
                    <span>Login</span><br />
                    <label  >Mob Number</label>
                    <input type="text" name="Mobnum"  onChange={this.onHandleChange} /><br />
                    {/* <p >{this.state.uerr}</p> */}
                    <label>Password</label>
                    <input type="password" name="password"  onChange={this.onHandleChange} /><br /><br />
                    {/* <p >{this.state.perr}</p> */}

                    <button onClick={this.onHandleClick} ><b>Login</b></button>
                    <button onClick={this.onHandleClickRegister}><b>Register</b></button>
                    <br />
                    <a className="btn2_login" href="#" onClick={this.onHandleClicksCancel}>Cancel</a>
                </div>

            </div>
        );
    }
}

export default Dummy;