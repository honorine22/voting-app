import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./forms.css";
import "../constants/colors.css";
import canImg from '../assets/canImg.jpg';
import Navigation from '../components/Navigation';
import { registerAsCandidate } from '../services/candidate.service';

function Candidate(props) {
    const navigate = useNavigate();
    const [requestError, setRequestError] = useState(false);

    const errorInputStyle = {
        border: '1px solid red'
    }

    const initialValues = {
        username: '',
        email: '',
        password: '',
        canImg: ''
    }

    const schema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
        canImg: Yup.string().required("profile Image is required")
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
        formData.append("fullnames", values.fullnames);
        formData.append("password", values.de);
        formData.append("canImg", selectedFile);
        const res = await registerAsCandidate(formData);
        if (!res?.success)
            return setRequestError(res?.description || 'Something went wrong')
        console.log(res.data);
        toast.success("Account created successfully");
        navigate('/login');
    };

    return (
        <div className='forms'>
            <Navigation />
            <div className="d-md-flex mt-lg-5 d-lg-flex d-sm-block align-items-center justify-content-center">
                <div className='d-flex mt-lg-5 col-sm-12 col-md-5 col-lg-2'>
                    <img className='w-100 position-relative py-5' src={canImg} alt='header Image' />
                    <div className='position-absolute h-50 p-lg-4 pt-lg-5 col-md-4 col-lg-2 mt-4 d-flex'>
                        <p className='d-flex align-items-center fw-bolder text-white'>“By voting, we add our voice to
                            the chorus that forms opinions
                            and the basis for actions.”
                        </p>
                    </div>
                </div>
                <form className="bg-white mt-lg-5 col-sm-12 col-md-6 col-lg-3 rounded-3 shadow-lg">
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div className='row col-sm-12 col-md-12 col-lg-10 gap-4'>
                            <div className='text-danger'>{requestError && <div className='error-message'>{requestError}</div>}</div>
                            <h5 className="lightmt pt-3">REGISTER TO START VOTING</h5>
                            <div className="mb-3">
                                <input onChange={(e) => { setFieldValue('canImg', e.currentTarget.files[0]); changeHandler(e) }} type="file" accept='image/*' name="canImg" className="form-control form-border image"
                                    style={errors.canImg && touched.canImg ? errorInputStyle : {}} />
                                {touched.canImg && errors.canImg && <label>{errors.canImg}</label>}
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Your full names' className="form-control lightmbo" name="fullnames"
                                    {...getFieldProps('fullnames')} style={errors.fullnames && touched.fullnames ? errorInputStyle : {}}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control lightmbo" placeholder='Tell about yourself' name='description' rows="3"
                                    {...getFieldProps('description')} style={errors.description && touched.description ? errorInputStyle : {}}></textarea>
                            </div>
                            <div className='my-3'>
                                <button type='submit'
                                    className={`${!isValid || Object.values(touched).every(e => e === '') ? 'form-b' : 'mainb'} btn text-white col-12 col-md-12 col-lg-12`}
                                    disabled={!isValid || Object.values(touched).every(e => e === '')}
                                    onClick={registerSubmit}
                                >Register as a candidate</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Candidate;