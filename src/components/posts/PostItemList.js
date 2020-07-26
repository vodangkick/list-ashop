import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItemList({ item, value }) {
    const { name, slug, images, date, description } = item;
    const urlThub = images.thubnail;

    return (
        <article className="row blog_item">
            <div className="col-md-3">
                <div className="blog_info text-right">
                    <div className="post_tag">
                        <Link to="/">Food,</Link>
                        <Link className="active" to="/">Technology,</Link>
                        {/* <Link to="/">Politics,</Link>
                        <Link to="/">Lifestyle</Link> */}
                    </div>
                    <ul className="blog_meta list">
                        <li><Link to="/">Mark wiens<i className="lnr lnr-user" /></Link></li>
                        <li><Link to="/">{date}<i className="lnr lnr-calendar-full" /></Link></li>
                        <li><Link to="/">1.2M Views<i className="lnr lnr-eye" /></Link></li>
                        <li><Link to="/">06 Comments<i className="lnr lnr-bubble" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-9">
                <div className="blog_post">
                    <Link to={`/blog/${slug}`}>
                        <img src={urlThub} alt={name} />
                    </Link>
                    <div className="blog_details">
                        <Link to={`/blog/${slug}`}><h2>{name}</h2></Link>
                        <p>{description}</p>
                        <Link to={`/blog/${slug}`} className="white_bg_btn">View More</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
