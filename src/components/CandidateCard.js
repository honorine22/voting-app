import React, { useState } from 'react';
import Button from './Button';
import "../constants/colors.css";
import { vote } from '../services/candidate.service';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function CandidateCard({ body, name, image, votes, cid }) {
    const navigate = useNavigate();
    let { oid } = useParams();
    const [requestError, setRequestError] = useState(false);
    const voteCandidate = async () => {
        setRequestError(false);
        const res = await vote(oid, cid);
        if (!res?.success)
            return setRequestError(res?.message || 'Something went wrong')
        toast.success("Voted successfully");
        console.log("VOTED!!!!!!!");
        navigate('/');
    };
    return (
        <div className='col-sm-1 col-md-4 col-lg-4'>
            <div className="card shadow p-4 mb-5 bg-body rounded border-0">
                <div className='d-flex justify-content-between'>
                    <img src={image} className="img-fluid mainbo w-25 rounded-circle img-thumbnail border-4" alt="..." />
                    <div className='d-flex flex-column'>
                        <h5 className="card-title">{name}</h5>
                        <span> Running to be: <span className='lightmt'>president</span></span>
                        <span className='lightmt'> The Mash Brand Company</span>
                        <span>{votes} votes</span>
                    </div>
                </div>
                <div className="pt-5">
                    <p className="card-text text-center">{body}</p>
                    <div className='d-flex justify-content-between mt-5'>
                        <Button text="Vote" onClick={voteCandidate} className="lightmb text-white py-1 px-4" />
                        <Link to={`/:oid/candidates/${cid}`}><Button text="View details" className="lightmbo lightmt py-1 px-2" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateCard;