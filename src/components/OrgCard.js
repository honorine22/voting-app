import React from 'react';
import { Link } from 'react-router-dom';

function OrgCard({ name, posNum }) {
    return (
        <div className='col-sm-1 col-md-4 col-lg-4'>

            <Link to="/candidates" className='text-black text-decoration-none'>
                <div className="card shadow p-4 mb-5 bg-body rounded border-0">
                    <div className='d-flex justify-content-between'>
                        <img src="https://picsum.photos/450/450" className="img-fluid rounded w-25" alt="..." />
                        <div className='d-flex align-content-center flex-column'>
                            <h5 className="card-title pt-3">{name}</h5>
                            <p>Positions: {posNum}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default OrgCard;