import React, { Component } from 'react';
import './Buyform.css';
// import { Navbar } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


class Buyform extends Component {
    
    render() {
        return (
        <div>
            <Navbar/>
        
            <div className=" main_page_buy">
                <div className="register_form_buy">
                <div className="title_bg"><h3 className="buy_form_title">Buying Form</h3></div>
                    <form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
                        <div className="buy_form_grid">
                            <div><label className="content_buy"> Name  :</label></div>
                            <div><input className="content_field_buy" type="text"  /></div>
                            
                            <div><label className="content_buy">Address :</label></div>
                            <div><input className="content_field_buy" type="text" /></div>
                        
                            <div><label className="content_buy">RTC Number  :</label></div>
                            <div><input className="content_field_buy" type="text"/></div>
                            
                            <div><label className="content_buy">Quantity :</label></div>
                            <div><input className="content_field_buy" type="number"  /></div>
                            
                            <div><label className="content_buy">Price :</label></div>
                            <div><input className="content_field_buy" type="number"  /></div>
                        
                            <div><label className="content_buy"> Type of paddy:</label></div>
                            <div><input className="content_field_buy" type="text"/></div>

                            <div><label className="content_buy">Account Name :</label></div>
                            <div><input className="content_field_buy" type="text"  /></div>
                        
                            <div><label className="content_buy">Account Number:</label></div>
                            <div><input className="content_field_buy" type="text"  /></div>
                        
                        </div>
                        <input  type="submit" className="button" value="Submit"/>
                        
                    </form>
                </div>
         </div>
         <Footer/>
         </div>
            );
        }


    }

export default Buyform;