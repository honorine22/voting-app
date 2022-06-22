import React from 'react';
import CandidateCard from '../components/CandidateCard';
import "../App.css";
import "../constants/colors.css";
import Navigation from '../components/Navigation';
function Candidates(props) {
    return (
        <div className='can'>
            <Navigation />
                <div className='container mt-4'>
                    <h1 className='text-center py-4'>ORGANIZATION: THE MASH BRAND COMPANY.</h1>
                    <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-0'>
                        {Array.from({ length: 6 }, (_, i) =>
                            <CandidateCard key={i} body="I couldn't have asked for more than this. Since 
        I invested in it I made over 100,000 dollars 
        profits. I would be lost without it." name="Arlene McCoy" />
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Candidates;