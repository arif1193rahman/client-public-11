import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
           <div className="header-main">
           <nav>
                <Link to="/">Home</Link>
                <Link to="/ourServices">Our Services</Link>
                <Link to="/login">Log In</Link>
            </nav>
           </div>
        </div>
    );
};

export default Header;