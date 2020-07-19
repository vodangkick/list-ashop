import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItemList() {
    return (
        <article className="row blog_item">
            <div className="col-md-3">
                <div className="blog_info text-right">
                    <div className="post_tag">
                        <Link to="/">Food,</Link>
                        <Link className="active" to="/">Technology,</Link>
                        <Link to="/">Politics,</Link>
                        <Link to="/">Lifestyle</Link>
                    </div>
                    <ul className="blog_meta list">
                        <li><Link to="/">Mark wiens<i className="lnr lnr-user" /></Link></li>
                        <li><Link to="/">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                        <li><Link to="/">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                        <li><Link to="/">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-9">
                <div className="blog_post">
                    <img src="img/blog/main-blog/m-blog-5.jpg" alt="" />
                    <div className="blog_details">
                        <Link href="single-blog.html"><h2>Telescopes 101</h2></Link>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                        <Link href="single-blog.html" className="white_bg_btn">View More</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
