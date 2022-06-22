import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import OrgCard from '../components/OrgCard';
import "../App.css";
import Footer from '../components/Footer';

function HomePage(props) {
    return (
        <>
            <div className='header'>
                <Navigation />
                <Header />
            </div>
            <div className='container mt-5 pt-5 pt-sm-5 pt-md-0 pt-lg-0'>
                <h1 className='text-center py-5 mt-5'>ORGANIZATIONS</h1>
                <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-0'>
                    {Array.from({ length: 6 }, (_, i) =>
                        <OrgCard key={i} name="The Masha Brand Company" posNum="3" />
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;