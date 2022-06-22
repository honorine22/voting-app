import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function AuthNav(props) {
    return (
        <div className="container-fluid justify-content-around d-sm-block d-md-flex d-lg-flex mt-sm-1 mt-md-3 mt-lg-3">
            <div>
                <Link to="/" className='nav-link text-black active' aria-current="page">Home</Link>
            </div>
            <div>
                <Link to="/about" className='nav-link text-black'>About</Link>
            </div>
            <div>
                <Link to="/howitworks" className='nav-link text-black'>How it works</Link>
            </div>
            <div className="nav-item">
                <Link to="/login" className='nav-link text-black'>Login</Link>
            </div>
            <div>
                <Link to="/register" className='nav-link text-black'>
                    <Button text="Register as a voter" className="lightmbo fw-bolder py-1 px-2 lightmt" />
                </Link>
            </div>
        </div>
    );
}

export default AuthNav;