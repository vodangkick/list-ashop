import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerBlog() {
    return (
        <section className="home_banner_area blog_banner">
            <div className="banner_inner d-flex align-items-center">
                <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset={0} data-background />
                <div className="container">
                    <div className="blog_b_text text-center">
                        <h2>Dude You’re Getting <br /> a Telescope</h2>
                        <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
                        <Link className="white_bg_btn" to="#">View More</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}
