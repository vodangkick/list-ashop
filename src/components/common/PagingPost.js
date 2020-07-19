import React from 'react';
import { Link } from 'react-router-dom';


export default function PagingPost() {
    return (
        <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
                <li className="page-item">
                    <Link to="/" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                            <span className="lnr lnr-chevron-left" />
                        </span>
                    </Link>
                </li>
                <li className="page-item"><Link to="/" className="page-link">01</Link></li>
                <li className="page-item active"><Link to="/" className="page-link">02</Link></li>
                <li className="page-item"><Link to="/" className="page-link">03</Link></li>
                <li className="page-item"><Link to="/" className="page-link">04</Link></li>
                <li className="page-item"><Link to="/" className="page-link">09</Link></li>
                <li className="page-item">
                    <Link to="/" className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                            <span className="lnr lnr-chevron-right" />
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
