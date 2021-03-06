import React, { Component } from 'react';
import './Buyform.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { Navbar } from 'react-bootstrap';
import { buyHandle } from '../../Actions/BuyActions';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import BrowserHistory from '../utils/BrowserHistroy'
// import { buyform } from '../userFunctions';
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
      Mail: '',
      budgetini: 100000,
      AccNumber: '',
      Users: []
    };
  }
  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onHandleClicksCancel=(e)=>{
    BrowserHistory.push('/buy')
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
      AccNumber: this.state.AccNumber,
      Email: this.state.Email

    }
    if (this.state.Name.length === 0 && this.state.Address.length === 0 && this.state.RTCNumber.length === 0 && this.state.Quantity.length === 0 && this.state.Price.length === 0 && this.state.Type.length === 0) {
      this.setState({
        nerr: "Name is required",
        rtcerr: "RTC Number is required",
        qerr: "Please mention the quantity",
        perr: "Enter the price",
        terr: "Mention the Type of Paddy",
        merr: "Enter the mail Id"

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
    else{
     this.props.buyHandle(payload);
    BrowserHistory.push('/stripeprovider')
    }
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
    return (
      <div className="register">
        <Navbar />
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
              <label className="label_buy1"><b>Name:</b></label>
              <input type="text" name="Name" className="one_buy" onChange={this.onHandleChange} />
              <p className="error_buy">{this.state.nerr}</p>
              <label className="label_buy2"><b>Address:</b></label>
              <input type="text" name="Address" className="one_buy" onChange={this.onHandleChange} />
              <p className="error_buy">{this.state.aerr}</p>
              <label className="label_buy3" ><b>RTCNumber:</b></label>
              <input type="number" name="RTCNumber" className="one_buy" onChange={this.onHandleChange} />
              <p className="error_buy">{this.state.rtcerr}</p>
              <label className="label_buy4"><b>Quantity:</b></label>
              <input type="number" name="Quantity" className="one_buy" onChange={this.onHandleChange} />
              <p className="error_buy">{this.state.qerr}</p>
              <label className="label_buy5"><b>Price:</b></label>
              <input type="number" name="Price" className="one_buy" onChange={this.onHandleChange} />
              <p className="error_buy" >{this.state.perr}</p>
              <label className="label_buy51"><b>MailId:</b></label>
              <input type="email" name="Email" className="one_buy" onChange={this.onHandleChange} />
              <p className="error_buy" >{this.state.merr}</p>
              <label className="label_buy6"><b>Date:</b></label>
              <input type="date" name="Type" className="one_buy_calendar" onChange={this.onHandleChange} /><br />
              <label className="label_buy7" ><b>Acc Name:</b></label>
              <input type="text" name="AccName" className="one_buy" onChange={this.onHandleChange} /><br />
              <label className="label_buy8" ><b>Acc Number:</b></label>
              <input type="number" name="AccNumber" className="one_buy" onChange={this.onHandleChange} /><br /><br />
              <button onClick={this.onHandleClick} className="btn1_sub">Submit</button>
              <button onClick={this.onHandleClicksCancel} className="btn1_cancel">Cancel</button>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            </div>
          </div>
        </div>
        <Footer />
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
