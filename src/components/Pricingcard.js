import "./Pricingcardstyle.css";

import React from 'react';
import { Link } from "react-router-dom";

const pricingcard = () => {
  return (
    <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>- Basic  -</h3>
            <span className="bar"></span>
            <p className="btc">$100</p>
            <p>- 3 Days -</p>
            <p>-3 Pages</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Purchase</Link>
        </div>

        <div className="card">
            <h3>- Basic  -</h3>
            <span className="bar"></span>
            <p className="btc">$100</p>
            <p>- 3 Days -</p>
            <p>-3 Pages</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Purchase</Link>
        </div>

        <div className="card">
            <h3>- Basic  -</h3>
            <span className="bar"></span>
            <p className="btc">$100</p>
            <p>- 3 Days -</p>
            <p>-3 Pages</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">Purchase</Link>
        </div>
    </div>
    </div>
  )
}

export default pricingcard