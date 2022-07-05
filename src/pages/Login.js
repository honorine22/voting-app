import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./forms.css";
import "../constants/colors.css";
import formImg from '../assets/form_img.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginService } from '../store/Auth';
import { SyncLoader } from 'react-spinners';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const dispatch = useDispatch();

    const reducer = useSelector(state => state.Reducers);
    console.log("STATES: " + reducer);
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

    // const loginSubmit = async (e) => {
    // e.preventDefault();
    //     setRequestError(false);
    //     setLoading(true);
    //     const res = await login(values);
    //     if (!res?.success)
    //         return setRequestError(res?.message || 'Something went wrong')
    //     localStorage.setItem('token', JSON.stringify({ token: res.message }));
    //     toast.success("Logged in successfully");
    // navigate('/');
    // };

    const loginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            dispatch(loginService(values));
            // navigate('/');
        } catch (err) {
            setRequestError(err.message);
            setLoading(false);
        }
    };

    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red'
    }

    return (
        <div className='forms'>
            <SyncLoader
                css={override}
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={loading}
            />
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