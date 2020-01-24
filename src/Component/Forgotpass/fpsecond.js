import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { withRouter } from 'react-router-dom';
import { emailHandles } from '../../Actions/RemailsActions';

class fpsecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            Confirmpassword:''
        
        };
    }
    onhandlepassword=(event)=>{
        this.setState({
            password:event.target.value 
        })
    }
    onhandleconfpassword1=(event)=>{
        this.setState({
            Confirmpassword:event.target.value 
        })
    }
    onhandlerecoverysubmit=(e)=>{
        debugger
        e.preventDefault();
        const payload = {
            password: this.state.password,
            Confirmpassword: this.state.Confirmpassword
    }
    this.props.emailHandle(payload);
          
    axios.put(`http://localhost:4090/reset`,payload)
    .then(console.log('update'))
    .catch(err => console.log(err))
  window.location.reload();

  }
  

  render() {
        return (
            <div>
                <div >
                <label>New password</label>
                  <input type="password" onChange={this.onhandlepassword}></input> 
                  <label>Confirm password</label>
                  <input type="password" onChange={this.onhandleconfpassword}></input> 
                  <button value="submit" onClick={this.onhandlerecoverysubmit}>submit</button>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger
    const { error } = state.RemailsReducer;
    return { error };
  };
  
  export default withRouter(connect(mapStateToProps, { emailHandles })(fpsecond));