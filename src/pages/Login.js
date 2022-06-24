import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./forms.css";
import "../constants/colors.css";
import formImg from '../assets/form_img.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import toast from 'react-hot-toast';
import { login } from '../services/auth';

const Login = () => {
    const navigate = useNavigate();
    const [requestError, setRequestError] = useState(false);

    const errorInputStyle = {
        border: '1px solid red'
    }

    const initialValues = {
        email: '',
        password: '',
    }

    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema
    });

    const { handleChange, values, errors, touched, getFieldProps, isValid } = formik

    const loginSubmit = async (e) => {
        e.preventDefault();
        setRequestError(false);
        const res = await login(values);
        if (!res?.success)
            return setRequestError(res?.message || 'Something went wrong')
        localStorage.setItem('token', res.message);
        toast.success("Logged in successfully");
        navigate('/candidates');
    };

    return (
        <div className='forms'>
            <Navigation />
            <div className="d-md-flex mt-lg-5 d-lg-flex d-sm-block align-items-center justify-content-center">
                <div className='d-flex mt-lg-5 col-sm-12 col-md-5 col-lg-2'>
                    <img className='w-100 position-relative py-5' src={formImg} alt='' />
                    <div className='position-absolute col-md-4 col-lg-2 mt-4 d-flex'>
                        <p className='pt-5 pt-md-5 pt-lg-5 p-lg-4 fw-bolder yellowt'>“By voting, we add our voice to
                            the chorus that forms opinions
                            and the basis for actions.”
                        </p>
                    </div>
                </div>
                <form className="bg-white h-100 mt-lg-5 col-sm-12 col-md-6 col-lg-3 rounded-3 shadow-lg">
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div className='row col-sm-12 col-md-12 col-lg-10 gap-4 py-3'>
                            <div className='text-danger'>{requestError && <div className='error-message'>{requestError}</div>}</div>
                            <h5 className="maint pt-5">LOGIN AND START VOTING</h5>
                            <div className="mb-4">
                                <input type="email" name="email" placeholder='Email' className='form-control form-border'
                                    {...getFieldProps('email')} style={errors.email && touched.email ? errorInputStyle : {}} />
                                {touched.email && errors.email && <label>{errors.email}</label>}
                            </div>
                            <div className="mb-4">
                                <input type="text" name="password" placeholder='Password' className='form-control form-border'
                                    {...getFieldProps('password')} style={errors.password && touched.password ? errorInputStyle : {}} />
                                {touched.password && errors.password && <label>{errors.password}</label>}
                            </div>
                            <div className='mt-3'>
                                <button
                                    type='submit'
                                    className={`${!isValid || Object.values(touched).every(e => e === '') ? 'form-b' : 'mainb'} btn text-white col-12 col-md-12 col-lg-12`}
                                    disabled={!isValid || Object.values(touched).every(e => e === '')}
                                    onClick={loginSubmit}
                                >LOGIN</button>
                            </div>
                            <span className='py-2'>Don't have an account? <Link to="/register" className='yellowt text-decoration-none'>Sign up</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;