import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import Modal from 'react-modal'
import loginimg from './login1.jpeg';
import paddy from '../Dashboard/paddy01.jpeg'
import paddy1 from '../Dashboard/paddy02.jpeg'
import paddy2 from '../Dashboard/paddy03.jpeg'
import paddy3 from '../Dashboard/paddy04.jpeg'

import BrowserHistory from '../utils/BrowserHistroy'
import paddylo from '../Navbar/paddylogo.jpeg';
import { Fade } from 'react-slideshow-image';


import { withRouter } from 'react-router-dom'
import { loginHandle } from '../../Actions/LoginActions';
import { salesHandle } from '../../Actions/SalesActions';

import { signup } from '../userFunction';
import axios from 'axios'


const fadeProperties = {
	duration: 2000,
	transitionDuration: 200,
	infinite: true,
	indicators: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`fade transition from ${oldIndex} to ${newIndex}`);
	},
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false,
			modalIsOpen: false,
			email: '',
			password: '',
			uerr: '',
			perr: '',
			salesno: ''

		};
	}
	onHandleChange = (event) => {

		this.setState({ [event.target.name]: event.target.value });

	}
	onHandleClicks = (e) => {

		BrowserHistory.push('/login');

	}
	onHandleClickRegister = (e) => {
		BrowserHistory.push('/register');

	}
	onHandleClicksCancel = (e) => {

		BrowserHistory.push('/login');

	}
	onHandleClickforgot = () => {
		sessionStorage.setItem('change', this.state.email)
		BrowserHistory.push('/fpsecond')
	}

	onHandleClick = (e) => {
		// openModal();
		e.preventDefault();
		const payload = {
			password: this.state.password,
			email: this.state.email

		}

		if (this.state.email.length === 0 && this.state.password.length === 0) {
			this.setState({

				uerr: "Email is required",
				perr: "Password is required",


			})
		}

		else if (this.state.email.length === 0) {
			this.setState({ uerr: "Email is required" })
		}
		else if (this.state.password.length === 0) {
			this.setState({ perr: "Password is required" })
		}

		else
			this.props.loginHandle(payload);
	}
	openModal = (e) => {
		e.preventDefault();
		const payload1 = {
			salesno: this.state.salesno
		}
		this.props.salesHandle(payload1);
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}
	onSubmit_sales = () => {
		this.setState()
	}

	render() {
		return (
			<div className="login">
				<div class="login_container">
					<div class="col-sm-5 col-lg-5 col-md-5 col-xs-5 frm_login">
						<img className='paddy_logo_login' src={paddylo} ></img><br />
						<span id="LoginTitle">Login</span><br />


						<label id="login_subtle" >Email ID:</label>
						<input type="text" name="email" className="one_login" onChange={this.onHandleChange} /><br />
						<p className="login_error">{this.state.uerr}</p>
						<label id="login_subtle"  >Password:</label>
						<input type="password" name="password" className="one_login_p" onChange={this.onHandleChange} /><br />
						<p className="login_error">{this.state.perr}</p>

						<button onClick={this.onHandleClick} className="btn1_login"><b>Login</b></button>
						<Modal className="modelbodydes"
							isOpen={this.state.modalIsOpen}
							onRequestClose={this.closeModal}
							contentLabel="Register Modal"
						>
							<form onSubmit={this.onSubmit} className="tablerowdes">
								<div>
									<label className="name">Do you want to sell crop?</label>
								</div>

								<div className="form-group">
									<button type="submit" value="send" className="rdsendbta" onClick={this.onSubmit_sales}>Update</button>

								</div>
							</form>

						</Modal>

						<button onClick={this.onHandleClickRegister} className="btn3_login"><b>Register</b></button>
						<br />
						<a id="btn4_login" onClick={this.onHandleClickforgot} >Forgot Password?</a><br />
						<a className="btn2_login" href="#" onClick={this.onHandleClicksCancel}>Cancel</a>
					</div>

				</div>

			</div>
		);
	}
}
const mapStateToProps = (state) => {
	debugger
	const { error } = state.RegisterReducer;
	return { error };
};

export default withRouter(connect(mapStateToProps, { loginHandle, salesHandle })(Login));


