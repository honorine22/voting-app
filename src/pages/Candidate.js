import React from 'react';
import "./forms.css";
import "../constants/colors.css";
import canImg from '../assets/canImg.jpg';
import Navigation from '../components/Navigation';

function Candidate(props) {
    return (
        <div className='forms'>
            <Navigation />
            <div class="d-md-flex mt-lg-5 d-lg-flex d-sm-block align-items-center justify-content-center">
                <div className='d-flex mt-lg-5 col-sm-12 col-md-5 col-lg-2'>
                    <img className='w-100 position-relative py-5' src={canImg} alt='header Image' />
                    <div className='position-absolute h-50 p-lg-4 pt-lg-5 col-md-4 col-lg-2 mt-4 d-flex'>
                        <p className='d-flex align-items-center fw-bolder text-white'>“By voting, we add our voice to
                            the chorus that forms opinions
                            and the basis for actions.”
                        </p>
                    </div>
                </div>
                <form class="bg-white mt-lg-5 col-sm-12 col-md-6 col-lg-3 rounded-3 shadow-lg">
                    <div className='d-flex py-1 justify-content-center flex-column align-items-center'>
                        <div className='row col-sm-12 col-md-12 col-lg-10 gap-4'>
                            <h5 class="lightmt pt-4">REGISTER TO START VOTING</h5>
                            <div class="mb-3">
                                <input type="text" placeholder='Username' class="form-control lightmbo" name="email" />
                            </div>
                            <div class="mb-3">
                                <input type="text" placeholder='Your full names' class="form-control lightmbo" name="pwd" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control lightmbo" placeholder='Tell about yourself' name='msg' rows="3"></textarea>
                            </div>
                            <div className='my-3'>
                                <button type="submit" class="btn text-white lightmb col-12 col-md-12 col-lg-12">Register as a candidate</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Candidate;