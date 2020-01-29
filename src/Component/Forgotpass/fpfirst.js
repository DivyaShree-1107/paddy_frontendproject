import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { emailHandle } from '../../Actions/RemailActions';
import BrowserHistroy from '../utils/BrowserHistroy';




class fpfirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: ''
        };
    }

    onrecoverymail=(event)=>{
        this.setState({
            Email:event.target.value 
                })
    }
    confirmmail=(e)=>{
        sessionStorage.setItem('change',this.state.email)
        BrowserHistroy.push('/fpsecond');
    }
//     onhandlerecoverysubmit=(e)=>{
//         debugger
//         e.preventDefault();
//         const payload = {
//             Email: this.state.Email
//     }
//     this.props.emailHandle(payload);
    
//   }
    render() {
        return (
            <div>
                <div>
                    <h2>Please enter the recovery Email Id</h2>
                    <input type="email" onChange={this.onrecoverymail}></input>
                    <button value="submit" onClick={this.confirmmail}>submit</button>
    
                </div>
                    
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    debugger
    const { error } = state.RemailReducer;
    return { error };
  };
  
  export default withRouter(connect(mapStateToProps, { emailHandle })(fpfirst));
  