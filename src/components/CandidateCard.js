import React from 'react';
import Button from './Button';

function CandidateCard({ body, name }) {
    return (
        <div className='col-sm-1 col-md-4 col-lg-4'>
            <div className="card shadow p-4 mb-5 bg-body rounded border-0">
                <div className='d-flex justify-content-between'>
                    <img src="https://picsum.photos/250/250" className="img-fluid rounded-circle w-25" alt="..." />
                    <div className='d-flex flex-column'>
                        <h5 className="card-title">{name}</h5>
                        <span> Running to be: <span className='lightmt'>president</span></span>
                        <span className='lightmt'> The Mash Brand Company</span>
                    </div>
                </div>
                <div className="pt-5">
                    <p className="card-text text-center">{body}</p>
                    <div className='d-flex justify-content-between mt-5'>
                        <Button text="Start voting" className="lightmbo lightmt py-1 px-2" />
                        <Button text="Vote" className="px-3 lightmb text-white py-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateCard;