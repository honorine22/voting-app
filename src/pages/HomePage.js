import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import OrgCard from '../components/OrgCard';
import "../App.css";
import Footer from '../components/Footer';
import { API_URL } from '../config';
import axios from 'axios';

function HomePage({isAuth}) {
    const [organs, setOrgans] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/organnames`)
            .then((res) => {
                setOrgans(res.data.orgsData)
            });
    }, []);

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='container mt-4 pt-4 pt-sm-4 pt-md-0 pt-lg-0'>
                <h1 className='text-center py-4 mt-4'>ORGANIZATIONS</h1>
                <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-0'>
                    {organs.map(organ => (
                        <OrgCard oid={organ._id} image={organ.organImg.image} name={organ.orgname} posNum="3" />
                    ))}
                    {organs.map(organ => (
                        <OrgCard keyId={organ._id} oid={organ._id} image={organ.organImg.image} name={organ.orgname} posNum="3" />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;