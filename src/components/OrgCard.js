import React from 'react';
import { Link } from 'react-router-dom';

function OrgCard({ name, keyId, posNum, image, oid }) {
    return (
        <div key={keyId} className='col-sm-1 col-md-3 col-lg-3'>

            <Link to={`${oid}/candidates`} className='text-black text-decoration-none'>
                <div className="card shadow h-75 p-4 mb-5 bg-body rounded border-0">
                    <div className='d-flex justify-content-between'>
                        <img src={image} className="img-fluid rounded w-25" alt="..." />
                        <div className='d-flex text-truncate flex-column'>
                            <h6 className="card-title pt-3">{name}</h6>
                            <p>Positions: {posNum}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default OrgCard;