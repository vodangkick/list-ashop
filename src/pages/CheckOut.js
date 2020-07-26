import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import BannerSecond from '../components/sections/BannerSecond'

export default function CheckOut() {
    return (
        <>
            <Header />
            <BannerSecond title="Checkout" link="/checkout" />
            <div className="container">
                <div className="row">
                    CheckOut Here
                    </div>
            </div>
            <Footer />
        </>
    )
}
