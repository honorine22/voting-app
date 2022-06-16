import React from 'react';
import CandidateCard from '../components/CandidateCard';
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
            <div className='container mt-5'>
                <h1 className='text-center py-5'>ORGANIZATIONS</h1>
                <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    {Array.from({ length: 6 }, (_, i) =>
                        <OrgCard key={i} name="The Masha Brand Company" posNum="3" />
                    )}
                </div>
                <h1 className='text-center py-5'>ORGANIZATION: THE MASH BRAND COMPANY.</h1>
                <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    {Array.from({ length: 6 }, (_, i) =>
                        <CandidateCard key={i} body="I couldn't have asked for more than this. Since 
        I invested in it I made over 100,000 dollars 
        profits. I would be lost without it." name="Arlene McCoy" />
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;