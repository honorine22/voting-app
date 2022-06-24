import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import "./forms.css";
import "../constants/colors.css";
import formImg from '../assets/form_img.jpg';
import Navigation from '../components/Navigation';
import { register } from '../services/auth';

function Register(props) {
    const navigate = useNavigate();
    const [requestError, setRequestError] = useState(false);

    const errorInputStyle = {
        border: '1px solid red'
    }

    const initialValues = {
        username: '',
        email: '',
        password: '',
        profileImg: ''
    }

    const schema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
        profileImg: Yup.string().required("profile Image is required")
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema
    });

    const { values, errors, touched, getFieldProps, isValid, setFieldValue } = formik

    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const changeHandler = (event) => {
        console.log("EVENT: ", event.target.files[0])
        setSelectedFile(event.target.files[0]);
        event.target.files[0] && setIsFilePicked(true);
    };

    const registerSubmit = async (e) => {
        e.preventDefault();
        setRequestError(false);
        console.log(values);
        const formData = new FormData();
        if (!selectedFile) return;
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("profileImg", selectedFile);
        const res = await register(formData);
        if (!res?.success)
            return setRequestError(res?.message || 'Something went wrong')
        console.log(res.data);
        toast.success("Account created successfully");
        navigate('/login');
    };

    return (
        <div className='forms'>
            <Navigation />
            <div className="d-md-flex mt-lg-5 d-lg-flex d-sm-block align-items-center justify-content-center">
                <div className='d-flex mt-lg-5 col-sm-12 col-md-5 col-lg-2'>
                    <img className='w-100 position-relative py-5' src={formImg} alt='Register Image' />
                    <div className='position-absolute col-md-4 col-lg-2 mt-4 d-flex'>
                        <p className='pt-5 pt-md-5 pt-lg-5 p-lg-4 fw-bolder yellowt'>“By voting, we add our voice to
                            the chorus that forms opinions
                            and the basis for actions.”
                        </p>
                    </div>
                </div>
                <form encType="multipart/form-data" className="bg-white mt-lg-5 col-sm-12 col-md-6 col-lg-3 rounded-3 shadow-lg">
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div className='row col-sm-12 col-md-12 col-lg-10 gap-4'>
                            <div className='text-danger'>{requestError && <div className='error-message'>{requestError}</div>}</div>
                            <h5 className="maint">REGISTER TO START VOTING</h5>
                            <div>
                                <input type="text" name="username" placeholder='Username' className='form-control form-border'
                                    {...getFieldProps('username')} style={errors.username && touched.username ? errorInputStyle : {}} />
                                {touched.username && errors.username && <label>{errors.username}</label>}
                            </div>
                            <div className="mb-2">
                                <input type="email" name="email" placeholder='Email' className='form-control form-border'
                                    {...getFieldProps('email')} style={errors.email && touched.email ? errorInputStyle : {}} />
                                {touched.email && errors.email && <label>{errors.email}</label>}
                            </div>
                            <div className="mb-2">
                                <input type="text" name="password" placeholder='Password' className='form-control form-border'
                                    {...getFieldProps('password')} style={errors.password && touched.password ? errorInputStyle : {}} />
                                {touched.password && errors.password && <label>{errors.password}</label>}
                            </div>

                            <div className="mb-2">
                                <input onChange={(e) => { setFieldValue('profileImg', e.currentTarget.files[0]); changeHandler(e) }} type="file" accept='image/*' name="profileImg" className="form-control form-border image"
                                    style={errors.profileImg && touched.profileImg ? errorInputStyle : {}} />
                                {touched.profileImg && errors.profileImg && <label>{errors.profileImg}</label>}
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className={`${!isValid || Object.values(touched).every(e => e === '') ? 'form-b' : 'mainb'} btn text-white col-12 col-md-12 col-lg-12`}
                                    disabled={!isValid || Object.values(touched).every(e => e === '')}
                                    onClick={registerSubmit}
                                >REGISTER</button>
                            </div>
                            <span className='pb-2'>Don't have an account? <Link to="/login" className='yellowt text-decoration-none'>Sign in</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;