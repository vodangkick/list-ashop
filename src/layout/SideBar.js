import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="col-lg-4">
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Posts" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier" /></button>
                        </span>
                    </div>{/* /input-group */}
                    <div className="br" />
                </aside>
                {/* <aside className="single_sidebar_widget author_widget">
                    <img className="author_img rounded-circle" src="img/blog/author.png" alt="" />
                    <h4>Charlie Barber</h4>
                    <p>Senior blog writer</p>
                    <div className="social_icon">
                        <Link to="/"><i className="fa fa-facebook" /></Link>
                        <Link to="/"><i className="fa fa-twitter" /></Link>
                        <Link to="/"><i className="fa fa-github" /></Link>
                        <Link to="/"><i className="fa fa-behance" /></Link>
                    </div>
                    <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                    <div className="br" />
                </aside> */}
                {/* <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Popular Posts</h3>
                    <div className="media post_item">
                        <img src="img/blog/popular-post/post1.jpg" alt="post" />
                        <div className="media-body">
                            <Link href="blog-details.html"><h3>Space The Final Frontier</h3></Link>
                            <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="img/blog/popular-post/post2.jpg" alt="post" />
                        <div className="media-body">
                            <Link href="blog-details.html"><h3>The Amazing Hubble</h3></Link>
                            <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="img/blog/popular-post/post3.jpg" alt="post" />
                        <div className="media-body">
                            <Link href="blog-details.html"><h3>Astronomy Or Astrology</h3></Link>
                            <p>03 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="img/blog/popular-post/post4.jpg" alt="post" />
                        <div className="media-body">
                            <Link href="blog-details.html"><h3>Asteroids telescope</h3></Link>
                            <p>01 Hours ago</p>
                        </div>
                    </div>
                    <div className="br" />
                </aside> */}
                <aside className="single_sidebar_widget ads_widget">
                    <Link to="/"><img className="img-fluid" src="img/blog/add.jpg" alt="" /></Link>
                    <div className="br" />
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Post Catgories</h4>
                    <ul className="list cat-list">
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Technology</p>
                                <p>37</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Lifestyle</p>
                                <p>24</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Fashion</p>
                                <p>59</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Art</p>
                                <p>29</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Food</p>
                                <p>15</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Architecture</p>
                                <p>09</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="d-flex justify-content-between">
                                <p>Adventure</p>
                                <p>44</p>
                            </Link>
                        </li>
                    </ul>
                    <div className="br" />
                </aside>
                <aside className="single-sidebar-widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <p>
                        Here, I focus on a range of items and features that we use in life without
                        giving them a second thought.
                    </p>
                    <div className="form-group d-flex flex-row">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true" /></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" />
                        </div>
                        <Link to="/" className="bbtns">Subcribe</Link>
                    </div>
                    <p className="text-bottom">You can unsubscribe at any time</p>
                    <div className="br" />
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                        <li><Link to="/">Technology</Link></li>
                        <li><Link to="/">Fashion</Link></li>
                        <li><Link to="/">Architecture</Link></li>
                        <li><Link to="/">Fashion</Link></li>
                        <li><Link to="/">Food</Link></li>
                        <li><Link to="/">Technology</Link></li>
                        <li><Link to="/">Lifestyle</Link></li>
                        <li><Link to="/">Art</Link></li>
                        <li><Link to="/">Adventure</Link></li>
                        <li><Link to="/">Food</Link></li>
                        <li><Link to="/">Lifestyle</Link></li>
                        <li><Link to="/">Adventure</Link></li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}
