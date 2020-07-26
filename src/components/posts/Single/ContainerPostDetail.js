import React from 'react';
import { Link } from 'react-router-dom';

export default function ContainerPostDetail({ item }) {
    const { name, description, images } = item;
    return (
        <div className="col-lg-8 posts-list">
            <div className="single-post row">
                <div className="col-lg-12">
                    <div className="feature-img">
                        <img className="img-fluid" src={images.banner} alt="" />
                    </div>
                </div>
                <div className="col-lg-3  col-md-3">
                    <div className="blog_info text-right">
                        <div className="post_tag">
                            <Link to="/">Food,</Link>
                            <Link className="active" to="/">Technology,</Link>
                            {/* <Link to="/">Politics,</Link>
                            <Link to="/">Lifestyle</Link> */}
                        </div>
                        <ul className="blog_meta list">
                            <li><Link to="/">Mark wiens<i className="lnr lnr-user" /></Link></li>
                            <li><Link to="/">12 Dec, 2017<i className="lnr lnr-calendar-full" /></Link></li>
                            <li><Link to="/">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                            <li><Link to="/">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                        </ul>
                        {/* <ul className="social-links">
                            <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                            <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                            <li><Link to="/"><i className="fa fa-github" /></Link></li>
                            <li><Link to="/"><i className="fa fa-behance" /></Link></li>
                        </ul> */}
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 blog_details">
                    <h2>{name}</h2>
                    {description}
                </div>
            </div>

        </div>
    )
}
