import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'jquery';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './NavBar';


export default class Header extends Component {
    componentDidMount() {
        this.callBackBootstrap();
    }
    componentDidUpdate() {
        this.callBackBootstrap();
    }
    callBackBootstrap() {
        return (<Bootstrap />)
    }
    render() {
        return (
            <header className="header_area" >
                <div className="top_menu row m0">
                    <div className="container">
                        <div className="float-left">
                            <Link to="/">support@colorlib.com</Link>
                            <Link to="/">Welcome to Catalouge</Link>
                        </div>
                        <div className="float-right">
                            <ul className="header_social">
                                <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="/"><i className="fa fa-dribbble" /></Link></li>
                                <li><Link to="/"><i className="fa fa-behance" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            <Link className="navbar-brand logo_h" to="/"><img src="img/logo.png" alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <NavBar />
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}
