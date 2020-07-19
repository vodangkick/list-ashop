import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BannerSecond from '../components/sections/BannerSecond';
import ContactContainer from '../components/sections/ContactContainer';

export default class Contact extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerSecond title="Contact Us" link="/contact" />
                <ContactContainer />
                <Footer />
            </>
        )
    }
}
