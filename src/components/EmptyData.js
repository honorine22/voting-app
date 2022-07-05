import React from 'react';
import Navigation from './Navigation';
import "../constants/colors.css";

function EmptyData(props) {
    return (
        <div className="nodata">
            <Navigation />
            <div className='container w-100 h-50 align-items-center justify-content-center d-flex'>
                <h1>NO CANDIDATES FOUND!</h1>

            </div>
        </div>
    );
}

export default EmptyData;