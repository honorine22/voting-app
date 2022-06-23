import React from 'react';
import '../constants/colors.css';
import hero from '../hero.png';
import Button from './Button';
function Header() {
    return (
        <div className='d-sm-block d-md-flex d-lg-flex mt-5 mx-sm-0 mx-md-5 mx-lg-5 justify-content-around'>
            <div className='d-flex col-sm-12 col-md-6 col-lg-3 pt-5 mt-5 flex-column'>
                <h1 className='fw-bolder px-2'>Online Voting</h1>
                <p className='fw-normal pt-4 px-2'>Nulla Lorem mollit cupidatat irure. Laborum magna
                    nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt.
                </p>
                <div className='mt-5 mx-2 d-flex justify-content-start'>
                    <Button text="Start Voting" className="yellowb text-white" />
                </div>
            </div>
            <img className='img-fluid col-sm-12 col-md-6 col-lg-3 mt-sm-5' src={hero} alt='header Image' />
        </div>
    );
}

export default Header;