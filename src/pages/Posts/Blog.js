import React, { Component } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import BannerBlog from '../../components/sections/BannerBlog';
import BlogCategories from '../../components/sections/BlogCategories';
import ListPost from '../../components/posts/ListPost';
import SideBar from '../../layout/SideBar';

export default class Blog extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerBlog />
                <BlogCategories />
                <section className="blog_area">
                    <div className="container">
                        <div className="row">
                            <ListPost />
                            <SideBar />
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
