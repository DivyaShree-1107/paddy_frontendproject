import React, { Component } from 'react';
import axios from 'axios';
import './fpsecond.css';

class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            password: ''
        }
    }

    handlechange = (e) => {
        debugger
        this.setState({ password: e.target.value })
    }
    changepassw = () => {
        debugger
        const payload = {
            email: sessionStorage.getItem('change'),
            password: this.state.password
        }
        console.log(payload)

        axios.put(`http://localhost:8191/reset`, payload)
            .then(console.log('update'))
            .catch(err => console.log(err))
        window.location.reload();
    }


    render() {

        return (
            <div className="forgot">
                <div className="forgot_cont">
                    <div id="frgtpassw">
                        <label className="forgt_label" >New Password</label>
                        <input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br />
                        <button onClick={this.changepassw} name="password" className="btn btn-danger frgt_sub">Change Password</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Forgetpassword;

