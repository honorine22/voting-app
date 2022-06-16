import React, { useState } from 'react';
import '../constants/colors.css';
import { Link } from 'react-router-dom';
import '../constants/colors.css';
import Button from './Button';
function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar py-4 navbar-expand-lg navbar-light bg-transparent">
            <div className="container navbar-nav">
                <div>
                    <Link className='navbar-brand text-warning' to="/">VOTE</Link>
                </div>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav-item">
                    <Link to="/" className='nav-link active' aria-current="page">Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/about" className='nav-link'>About</Link>
                </div>
                <div className="nav-item">
                    <Link to="/howitworks" className='nav-link'>How it works</Link>
                </div>
                <div className="nav-item">
                    <Link to="/login" className='nav-link'>Login</Link>
                </div>
                <div className="nav-item">
                    <Link to="/register" className='nav-link'>
                        <Button text="Register" className="lightmbo px-5 lightmt" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;