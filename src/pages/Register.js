import React from 'react';
import "./forms.css";
import "../constants/colors.css";
import formImg from '../assets/form_img.jpg';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Register(props) {
    return (
        <div className='forms'>
            <Navigation />
            <div class="d-md-flex mt-lg-5 d-lg-flex d-sm-block align-items-center justify-content-center">
                <div className='d-flex mt-lg-5 col-sm-12 col-md-5 col-lg-2'>
                    <img className='w-100 position-relative py-5' src={formImg} alt='Register Image' />
                    <div className='position-absolute col-md-4 col-lg-2 mt-4 d-flex'>
                        <p className='pt-5 pt-md-5 pt-lg-5 p-lg-4 fw-bolder yellowt'>“By voting, we add our voice to
                            the chorus that forms opinions
                            and the basis for actions.”
                        </p>
                    </div>
                </div>
                <form class="bg-white mt-lg-5 col-sm-12 col-md-6 col-lg-3 rounded-3 shadow-lg">
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div className='row col-sm-12 col-md-12 col-lg-10 gap-4'>
                            <h5 class="maint pt-4">REGISTER TO START VOTING</h5>
                            <div class="mb-3">
                                <input type="text" placeholder='Username' class="form-control form-border" name="email" />
                            </div>
                            <div class="mb-3">
                                <input type="email" placeholder='Email' class="form-control form-border" name="email" />
                            </div>
                            <div class="mb-3">
                                <input type="password" placeholder='Password' class="form-control form-border" name="pwd" />
                            </div>

                            <div className='mt-3'>
                                <button type="submit" class="btn text-white form-b col-12 col-md-12 col-lg-12">Register</button>
                            </div>
                            <span className='pb-4'>Don't have an account? <Link to="/login" className='yellowt text-decoration-none'>Sign in</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;