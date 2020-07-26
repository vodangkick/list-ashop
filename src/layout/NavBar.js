import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProductConsumer } from '../contexts/ProductProvider';
import classnames from 'classnames';

export default function NavBar() {
    const MENU_TOP = [
        { title: 'Home', slug: '/' },
        { title: 'Shop', slug: '/shop' },
        { title: 'Blog', slug: '/blog' },
        {
            title: 'Pages', slug: '/pages', child: [
                { title: 'Login', slug: '/login' },
                { title: 'Register', slug: '/register' },
                { title: 'Checkout', slug: '/checkout' },
            ]
        },
        { title: 'Contact', slug: '/contact' }
    ]

    return (
        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto">
                {MENU_TOP.map((item, index) => <li key={index} className={classnames('nav-item', { submenu: item.child !== null, dropdown: item.child !== null })}>
                    <NavLink exact={true} activeClassName="active" data-toggle={item.child ? 'dropdown' : ''} className="nav-link" to={item.slug} >{item.title}</NavLink>
                    {item.child ?
                        <ul className="dropdown-menu">
                            {item.child.map((itemChild, iChild) =>
                                <li className="nav-item">
                                    <Link className="nav-link" to={itemChild.slug} >{itemChild.title}</Link>
                                </li>)}
                        </ul>
                        : ''}
                </li>)}
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
