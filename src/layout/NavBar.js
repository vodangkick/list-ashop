import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProductConsumer } from '../contexts/ProductProvider';

export default function NavBar() {
    const MENU_TOP = [
        { title: 'Home', slug: '/' },
        {
            title: 'Shop', slug: '/shop', child: [
                { title: 'child 1', slug: '/child-1' },
                { title: 'child 2', slug: '/child-2' }
            ]
        },
        { title: 'Blog', slug: '/blog' },
        { title: 'Contact', slug: '/contact' }
    ]

    return (
        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto">
                {MENU_TOP.map((item, index) => <li key={index} className="nav-item">
                    <NavLink exact={true} activeClassName="active" className="nav-link" to={item.slug} >{item.title}</NavLink></li>)}
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <ProductConsumer>
                    {value => <li className="nav-item">
                        <Link to="/cart" className="cart">({value.cart.length})<i className="lnr lnr lnr-cart" /></Link>
                    </li>
                    }
                </ProductConsumer>
                <li className="nav-item"><Link to="/blog" className="search"><i className="lnr lnr-magnifier" /></Link></li>
            </ul>
        </div >
    )
}
