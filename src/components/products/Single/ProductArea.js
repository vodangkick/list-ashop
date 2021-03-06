import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductArea({ product, value }) {
    const { deCrement, inCrement, addToCart, quanlity } = value;
    const { sys, category, fields } = product;
    const { price, name, short_desction, availibility, images } = fields;
    const urlProduct = images[0].fields.file.url;
    return (
        <div className="product_image_area">
            <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-5">
                        <div className="s_product_img">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">
                                        <img src={urlProduct} alt="" />
                                    </li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={urlProduct} alt="First slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="s_product_text">
                            <h3>{name}</h3>
                            <h2>${price}</h2>
                            <ul className="list">
                                <li><Link className="active" to="/"><span>Category</span> : {category.name}</Link></li>
                                <li><Link to="/"><span>Availibility</span> : {availibility === true ? 'In Stock' : 'Out Stock'}</Link></li>
                            </ul>
                            <p>{short_desction}</p>
                            <div className="product_count">
                                <label htmlFor="qty">Quantity:</label>
                                <input type="number" name="qty" value={quanlity} className="input-text qty" />
                                <button onClick={() => inCrement()} className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                                <button onClick={() => deCrement()} className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                            </div>
                            <div className="card_area">
                                <button onClick={() => addToCart(sys.id)} className="main_btn" to="/">Add to Cart</button>
                                {/* <Link className="icon_btn" to="/"><i className="lnr lnr lnr-diamond" /></Link>
                                <Link className="icon_btn" to="/"><i className="lnr lnr lnr-heart" /></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
