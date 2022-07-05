import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config';
import "../App.css";
import CandidateCard from './CandidateCard';

function AllCandidates(props) {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/candidates`)
            .then((res) => {
                setCandidates(res.data[0])
            });
    }, []);
    return (
        <div className='can'>
            <Navigation />
            <div className='container'>
                <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-0'>
                    {candidates.map(candidate => (
                        <CandidateCard key={candidate._id}
                            votes={candidate.votes}
                            body={candidate.description} name={candidate.fullname}
                            image={candidate.canImg.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllCandidates;