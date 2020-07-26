import React, { Component } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import BannerSecond from '../../components/sections/BannerSecond';
import { Link } from 'react-router-dom';

export default class CheckOut extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerSecond title="Check Out" link="/checkout" />
                {/*================Checkout Area =================*/}
                <section className="checkout_area p_120">
                    <div className="container">
                        <div className="returning_customer">
                            <div className="check_title">
                                <h2>Returning Customer? <Link to="/">Click here to login</Link></h2>
                            </div>
                            <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                            <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="name" name="name" />
                                    <span className="placeholder" data-placeholder="Username or Email" />
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="password" className="form-control" id="password" name="password" />
                                    <span className="placeholder" data-placeholder="Password" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <button type="submit" value="submit" className="btn submit_btn">Send Message</button>
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option" name="selector" />
                                        <label htmlFor="f-option">Remember me</label>
                                    </div>
                                    <Link className="lost_pass" to="/">Lost your password?</Link>
                                </div>
                            </form>
                        </div>
                        <div className="cupon_area">
                            <div className="check_title">
                                <h2>Have a coupon? <Link to="/">Click here to enter your code</Link></h2>
                            </div>
                            <input type="text" placeholder="Enter coupon code" />
                            <Link className="tp_btn" to="/">Apply Coupon</Link>
                        </div>
                        <div className="billing_details">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3>Billing Details</h3>
                                    <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="first" name="name" />
                                            <span className="placeholder" data-placeholder="First name" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="last" name="name" />
                                            <span className="placeholder" data-placeholder="Last name" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" id="company" name="company" placeholder="Company name" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="number" name="number" />
                                            <span className="placeholder" data-placeholder="Phone number" />
                                        </div>
                                        <div className="col-md-6 form-group p_star">
                                            <input type="text" className="form-control" id="email" name="compemailany" />
                                            <span className="placeholder" data-placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <select className="country_select">
                                                <option value={1}>Country</option>
                                                <option value={2}>Country</option>
                                                <option value={4}>Country</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="add1" name="add1" />
                                            <span className="placeholder" data-placeholder="Address line 01" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="add2" name="add2" />
                                            <span className="placeholder" data-placeholder="Address line 02" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="city" name="city" />
                                            <span className="placeholder" data-placeholder="Town/City" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <select className="country_select">
                                                <option value={1}>District</option>
                                                <option value={2}>District</option>
                                                <option value={4}>District</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <input type="checkbox" id="f-option2" name="selector" />
                                                <label htmlFor="f-option2">Create an account?</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <h3>Shipping Details</h3>
                                                <input type="checkbox" id="f-option3" name="selector" />
                                                <label htmlFor="f-option3">Ship to a different address?</label>
                                            </div>
                                            <textarea className="form-control" name="message" id="message" rows={1} placeholder="Order Notes" defaultValue={""} />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4">
                                    <div className="order_box">
                                        <h2>Your Order</h2>
                                        <ul className="list">
                                            <li><Link to="/">Product <span>Total</span></Link></li>
                                            <li><Link to="/">Fresh Blackberry <span className="middle">x 02</span> <span className="last">$720.00</span></Link></li>
                                            <li><Link to="/">Fresh Tomatoes <span className="middle">x 02</span> <span className="last">$720.00</span></Link></li>
                                            <li><Link to="/">Fresh Brocoli <span className="middle">x 02</span> <span className="last">$720.00</span></Link></li>
                                        </ul>
                                        <ul className="list list_2">
                                            <li><Link to="/">Subtotal <span>$2160.00</span></Link></li>
                                            <li><Link to="/">Shipping <span>Flat rate: $50.00</span></Link></li>
                                            <li><Link to="/">Total <span>$2210.00</span></Link></li>
                                        </ul>
                                        <div className="payment_item">
                                            <div className="radion_btn">
                                                <input type="radio" id="f-option5" name="selector" />
                                                <label htmlFor="f-option5">Check payments</label>
                                                <div className="check" />
                                            </div>
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                        <div className="payment_item active">
                                            <div className="radion_btn">
                                                <input type="radio" id="f-option6" name="selector" />
                                                <label htmlFor="f-option6">Paypal </label>
                                                <img src="img/product/single-product/card.jpg" alt="card" />
                                                <div className="check" />
                                            </div>
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                        <div className="creat_account">
                                            <input type="checkbox" id="f-option4" name="selector" />
                                            <label htmlFor="f-option4">I’ve read and accept the </label>
                                            <Link to="/">terms &amp; conditions*</Link>
                                        </div>
                                        <Link className="main_btn" to="/">Proceed to Paypal</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Checkout Area =================*/}

                <Footer />
            </>
        )
    }
}
