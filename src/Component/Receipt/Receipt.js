import React, { Component } from 'react';
// import './Receipt.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { buyHandle } from '../../Actions/BuyActions';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import BrowserHistory from '../utils/BrowserHistroy'
import { buyform } from '../userFunctions';
import axios from 'axios';
import { ListItem } from 'react-bootstrap/lib/Media';





class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            RTCNumber: '',
            Users:[]

        };
    }
    onHandleChangeReceipt = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        axios.get('http://localhost:8191/Buyform')
            .then(res => {
                this.setState({ Users: res.data });
                console.log(this.state.Users);
            }
            )
    }
    onHandleClick = (e) => {
        e.preventDefault();
        const payload = {
            Name: this.state.Name,
            Address: this.state.Address,
            RTCNumber: this.state.RTCNumber,
            Quantity: this.state.Quantity,
            Price: this.state.Price,
            Type: this.state.Type,
            AccName: this.state.AccName,
            AccNumber: this.state.AccNumber

        }

    }
    render() {
        let itemList = this.state.Users.map(user => {
            return (
                <div className="card1" key={user.id}>
                    <tr>
                        <td>{user.Name}</td>
                        <td>{user.Address}</td>
                        <td>{user.RTCNumber}</td>
                        <td>{user.Quantity}</td>
                        <td>{user.Price}</td>
                        <td>{user.Type}</td>
                        <td>{user.AccName}</td>
                        <td>{user.AccNumber}</td>

                    </tr>
                </div>
            )

        })
        return (
            <div>
                {/* <Navbar /> */}
            
                <div >
                {itemList}
                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 ">
                            <h1>Login</h1>


                            <label ><b>Name </b></label><br />
                            <input type="text" name="Name" className="recep" onChange={this.onHandleChangeReceipt} /><br />
                            <p >{this.state.nerr}</p>
                            <label ><b>RTC Number</b></label><br />
                            <input type="number" name="RTCNumber" className="recep" onChange={this.onHandleChangeReceipt} /><br /><br />
                            <p >{this.state.rtcerr}</p>

                            <button onClick={this.onHandleClickReceipt} ><b>Login</b></button><a href="#" onClick={this.onHandleClicksCancel}>Cancel</a>
                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        </div>
                    </div>
                </div>

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