import React, { Component } from 'react';
import './Receipt.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { buyHandle } from '../../Actions/BuyActions';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';






class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            RTCNumber: '',
            nerr:'',
            rtcerr:'',
            Users:[],
            filtereddata:[]

        };
    }
    onHandleChangeReceipt =(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }

    // componentDidMount() {
    //     axios.get('http://localhost:8191/Buyform')
    //         .then(res => {
    //             this.setState({ Users: res.data });
                
    //         }
    //         )
    // }
    onHandleClickReceipt () {
        // e.preventDefault();
        axios.get('http://localhost:8191/Buyform')
        .then(res => {
            this.setState({ Users: res.data });
            console.log(this.state.Users)
        }
        )

    }
    
    render() {
        let itemList = this.state.Users.map(user => {
            // console.log("ghvf",user.RTCNumber, this.state.RTCNumber)
            if (user.RTCNumber == this.state.RTCNumber && user.Name ==this.state.name) {
            return (
                <div className="card1" key={user._id}>
                   <table>
                       <tr>
                        <td>Name</td>
                        <td>{user.Name}</td>
                        </tr>
                        <tr>
                       <td>Address</td>
                        <td>{user.Address}</td>
                        </tr>
                        <tr>
                       <td>RTCNumber</td>
                            
                        <td>{user.RTCNumber}</td>
                        </tr>
                        <tr>
                        <td>Quantity</td>

                        <td>{user.Quantity}</td>
                        </tr>
                        <tr>
                        <td>Price</td>
                        <td>{user.Price}</td>
                        </tr>
                        <tr>
                        <td>Type</td>
                        <td>{user.Type}</td>
                        </tr>
                        <tr>
                        <td>AccName</td>
                        <td>{user.AccName}</td>
                        </tr>
                        <tr>
                        <td>AccNumber</td>
                        <td>{user.AccNumber}</td>
                        </tr>
                        </table>
                </div>
            )
            }
        })
        return (
            <div>
                <Navbar/>
            
                <div >
             
                    <div class="row recep_body">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 ">
                            <h1 className="rec_tle">Login</h1>                       
                            <label className="rec_label">Name </label>
                            <input type="text" name="Name" className="recep_inp" onChange={this.onHandleChangeReceipt} /><br />
                            <p >{this.state.nerr}</p>
                            <label className="rec_label"><b>RTC Num</b></label>
                            <input type="number" name="RTCNumber" className="recep_inp2" onChange={this.onHandleChangeReceipt} /><br /><br />
                            <p >{this.state.rtcerr}</p>
                            <button className="login_receipt" onClick={this.onHandleClickReceipt.bind(this)} >Login</button>
                            <button className="login_receipt" onClick={this.onHandleClicksCancel} >Cancel</button>
                            
                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                         
                        </div>
                    </div>
                <div>{itemList}</div>
                
                </div>
            <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger
    const { error } = state.BuyReducer;
    return { error };
};

export default withRouter(connect(mapStateToProps, { buyHandle })(Receipt));