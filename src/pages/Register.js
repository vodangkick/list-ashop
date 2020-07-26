import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import BannerSecond from '../components/sections/BannerSecond';
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <Header />
            <BannerSecond title="Register" link="/register" />
            {/*================Login Box Area =================*/}
            <section className="login_box_area p_120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src="img/login.jpg" alt="login" />
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                    <Link className="main_btn" href="#">Create an Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner reg_form">
                                <h3>Create an Account</h3>
                                <form className="row login_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="password" name="password" placeholder="Password" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" id="pass" name="pass" placeholder="Confirm password" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                            <label htmlFor="f-option2">Keep me logged in</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="btn submit_btn">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================End Login Box Area =================*/}

            <Footer />
        </div>
    )
}
