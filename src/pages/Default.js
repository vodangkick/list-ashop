import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BannerSecond from '../components/sections/BannerSecond';
import { Link } from 'react-router-dom';

export default function Default(props) {
    return (
        <>
            <Header />
            <BannerSecond title="404 ERROR" link="/" />
            <section class="order_details p_120">
                <div class="container text-center">
                    <h1 >Page not request URL {props.location.pathname}</h1>
                    <Link to="/" className="btn btn-danger" >Return Home</Link>
                </div>
            </section>
            <Footer />
        </>
    )
}
