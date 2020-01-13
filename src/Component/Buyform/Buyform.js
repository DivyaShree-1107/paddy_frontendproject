import React, { Component } from 'react';
import './Buyform.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { Navbar } from 'react-bootstrap';
import { buyHandle } from '../../Actions/BuyActions';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import BrowserHistory from '../utils/BrowserHistroy'
import { buyform } from '../userFunctions';
import axios from 'axios';


var totalgrnt = 0;



class Buyform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Address: '',
            RTCNumber: '',
            Quantity: '',
            Price: '',
            Type: '',
            AccName: '',
            budgetini: 1000,
            AccNumber: '',
            Users: [],

        };
    }


    // onHandleChangeBudget=()=>{
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // onHandleClicks = (e) => {
    //     BrowserHistory.push('/dashboard');
    // }

    // onHandleClicksCancel = (e) => {

    //     BrowserHistory.push('/dashboard');

    // }

    // onHandleClick = (e) => {
    //     debugger;
    //     e.preventDefault();
    //     const payload = {
    //         Firstname: this.state.Firstname,
    //         Username: this.state.Username,
    //         email: this.state.email,
    //         password: this.state.password,
    //         Confirmpassword: this.state.Confirmpassword,
    //         Mobnum: this.state.Mobnum

    //         }

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
        // buyform(reqst).then(res => {


        //     BrowserHistory.push('/dashboard')


        // })


        if (this.state.Name.length === 0 && this.state.Address.length === 0 && this.state.RTCNumber.length === 0 && this.state.Quantity.length === 0 && this.state.Price.length === 0 && this.state.Type.length === 0) {
            this.setState({
                nerr: "Name is required",
                rtcerr: "RTC Number is required",
                qerr: "Please mention the quantity",
                perr: "Enter the price",
                terr: "Mention the Type of Paddy"

            })
        }
        else if (this.state.Name.length === 0) {
            this.setState({ nerr: "Name is required" })
        }
        else if (this.state.RTCNumber.length === 0) {
            this.setState({ rtcerr: "RTC Number is Mandatory" })
        }
        else if (this.state.Quantity.length === 0) {
            this.setState({ qerr: "Please mention the quantity" })
        }
        else if (this.state.Price.length === 0) {
            this.setState({ perr: "Enter the price" })
        }
        else if (this.state.Type.length === 0) {
            this.setState({ terr: "Mention the Type of Paddy" })
        }

        //     else {
        //         BrowserHistory.push('/dashboard')
        //     this.Loginaction.props.success("Buy form filled")
        //     }

        this.props.buyHandle(payload);
    }

    componentDidMount() {
        axios.get('http://localhost:8191/Buyform')
            .then(res => {
                this.setState({ Users: res.data });
                console.log(this.state.Users);
            }
            )
    }

    render() {
        {
            this.state.Users.map(user => {
                totalgrnt = totalgrnt + user.Price
            })
        }


        // let itemList = this.state.Users.map(user => {
        //     return (
        //     <div className="card1" key={user.id}>
        //     <tr>
        //     {/* <td>{user.Name}</td>
        //     <td>{user.Address}</td>
        //     <td>{user.RTCNumber}</td>
        //     <td>{user.Quantity}</td> */}
        //     <td>{user.Price}</td>
        //     {this.setState({totalgrnt:this.state.totalgrnt+user.Price})}

        //     {/* <td>{user.Type}</td>            
        //     <td>{user.AccName}</td>
        //     <td>{user.AccNumber}</td> */}

        //     </tr>
        //     </div>
        //     )

        //     })
        return (
            <div className="register">
                <div class="container">

                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                            <div class="container one_card">
                                <div class="card" >
                                    <div class="card-body">
                                        <h4 class="card-title">Budget</h4>
                                        <p class="card-text">Budget Sanctioned:{this.state.budgetini}</p>
                                        <p class="card-text" name="budget" onChange={this.onHandleChangeBudget}>Budget Granted:  {totalgrnt}</p>
                                        <p class="card-text">Budget Remaining:{this.state.budgetini - totalgrnt}</p>
                                        <a href="https://timesofindia.indiatimes.com/city/bengaluru/karnataka-budget-2019-20-highlights/articleshow/67896950.cms" class="btn btn-primary">Updates about Budget</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
                            <h1>Buy form</h1>
                            <label><b>Name</b></label><br />
                            <input type="text" name="Name" className="one" onChange={this.onHandleChange} /><br />
                            <p >{this.state.nerr}</p>
                            <label><b>Address</b></label><br />
                            <input type="text" name="Address" className="one" onChange={this.onHandleChange} /><br />
                            <p >{this.state.aerr}</p>
                            <label ><b>RTCNumber</b></label><br />
                            <input type="number" name="RTCNumber" className="one" onChange={this.onHandleChange} /><br />
                            <p >{this.state.rtcerr}</p>
                            <label ><b>Quantity</b></label><br />
                            <input type="number" name="Quantity" className="one" onChange={this.onHandleChange} /><br /><br />
                            <p >{this.state.qerr}</p>
                            <label ><b>Price</b></label><br />
                            <input type="number" name="Price" className="one" onChange={this.onHandleChange} /><br /><br />
                            <p >{this.state.perr}</p>
                            <label ><b>Type</b></label><br />
                            <input type="text" name="Type" className="one" onChange={this.onHandleChange} /><br /><br />
                            <label ><b>Account Name</b></label><br />
                            <input type="text" name="AccName" className="one" onChange={this.onHandleChange} /><br /><br />
                            <label ><b>Account Number</b></label><br />
                            <input type="number" name="AccNumber" className="one" onChange={this.onHandleChange} /><br /><br />
                            <a href="" onClick={this.onHandleClicks}>you have already account</a>
                            <p >{this.state.phnerr}</p>
                            <button onClick={this.onHandleClick} className="btn1"><b>Submit</b></button><a href="#" onClick={this.onHandleClicksCancel}>Cancel</a>
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

export default withRouter(connect(mapStateToProps, { buyHandle })(Buyform));
