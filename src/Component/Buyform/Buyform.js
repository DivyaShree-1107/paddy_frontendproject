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
        // BrowserHistory.push('/stripeprovider')


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
                <Navbar/>
                <div id="container">

                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                            <div class="container one_card_buy">
                                <div class="card_buy" >
                                    <div class="card-body_buy">
                                        <h4 class="card-title_buy">Budget</h4>
                                        <p class="card-text_buy">Budget Sanctioned:{this.state.budgetini}</p>
                                        <p class="card-text_buy" name="budget" onChange={this.onHandleChangeBudget}>Budget Granted:  {totalgrnt}</p>
                                        <p class="card-text_buy">Budget Remaining:{this.state.budgetini - totalgrnt}</p>
                                        <a href="https://timesofindia.indiatimes.com/city/bengaluru/karnataka-budget-2019-20-highlights/articleshow/67896950.cms" class="btn btn-primary updates_btn_buy">Updates about Budget</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm_buy">
                            <h1 className="tle_buy">Buy form</h1>
                            <label className="label_buy1"><b>Name</b></label>
                            <input type="text" name="Name" className="one_buy" onChange={this.onHandleChange} /><br />
                            <p className="error_buy">{this.state.nerr}</p>
                            <label className="label_buy2"><b>Address</b></label>
                            <input type="text" name="Address" className="one_buy" onChange={this.onHandleChange} /><br />
                            <p className="error_buy">{this.state.aerr}</p>
                            <label className="label_buy3" ><b>RTCNumber</b></label>
                            <input type="number" name="RTCNumber" className="one_buy" onChange={this.onHandleChange} /><br />
                            <p className="error_buy">{this.state.rtcerr}</p>
                            <label className="label_buy4"><b>Quantity</b></label>
                            <input type="number" name="Quantity" className="one_buy" onChange={this.onHandleChange} /><br /><br />
                            <p className="error_buy">{this.state.qerr}</p>
                            <label className="label_buy5"><b>Price</b></label>
                            <input type="number" name="Price" className="one_buy" onChange={this.onHandleChange} /><br /><br />
                            <p className="error_buy" >{this.state.perr}</p>
                            <label className="label_buy6"><b>Date</b></label>
                            <input type="date" name="Type" className="one_buy" onChange={this.onHandleChange} /><br /><br />
                            <label className="label_buy7" ><b>Acc Name</b></label>
                            <input type="text" name="AccName" className="one_buy" onChange={this.onHandleChange} /><br /><br />
                            <label className="label_buy8" ><b>Acc Number</b></label>
                            <input type="number" name="AccNumber" className="one_buy" onChange={this.onHandleChange} /><br /><br />
                            <button onClick={this.onHandleClick} className="btn1_sub">Submit</button>
                            <button onClick={this.onHandleClicksCancel} className="btn1_cancel">Cancel</button>
                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        </div>
                    </div>
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

export default withRouter(connect(mapStateToProps, { buyHandle })(Buyform));
