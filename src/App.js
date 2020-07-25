import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from './pages/Products/Shop';
import Blog from './pages/Posts/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Products/Cart';
import CheckOut from './pages/Products/CheckOut';

import ProductDetail from './pages/Products/ProductDetail';
import PostDetail from './pages/Posts/PostDetail';

import ScrollToTop from './components/ScrollToTop';
import Default from './pages/Default';


function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/checkout' exact component={CheckOut} />
        <Route path='/blog/:slug' exact component={PostDetail} />
        <Route path='/product/:slug' exact component={ProductDetail} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
