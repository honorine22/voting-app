import React, { useEffect, useState } from 'react';
import '../constants/colors.css';
import { Link } from 'react-router-dom';
import '../constants/colors.css';
import "../App.css";
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { Init } from '../store/Auth';
import { SyncLoader } from 'react-spinners';
function Navigation({ isAuth }) {
    const [isOpen, setIsOpen] = useState(false);

    const token = useSelector(state => state.Reducers.token);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const init = async () => {
        dispatch(Init(token));
        setLoading(false);
    }
    useEffect(() => {
        init()
    }, [])
    console.log("USER: " + token);
    if (loading) {
        return (
            <SyncLoader />
        )
    }

    return (
        <nav className="navbar pb-2 navBack navbar-expand-lg navbar-light bg-transparent">
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
                <div className={`${token == null} ? nav-item : 'visually-hidden'`}>
                    <Link to="/login" className='nav-link'>Login</Link>
                </div>
                <div className={`${token == null} ? nav-item : 'visually-hidden'`}>
                    <Link to="/register" className='nav-link'>
                        <Button text="Register" className="lightmbo px-5 lightmt" />
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/registercan" className='nav-link'>
                        <Button text="Register as a candidate" className="lightmbo px-5 lightmt" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;