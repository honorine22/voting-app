import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config';
import CandidateCard from '../components/CandidateCard';
import "../App.css";
import "../constants/colors.css";
import EmptyData from '../components/EmptyData';
function Candidates(props) {
    const [candidates, setCandidates] = useState([]);
    const [orgname, setOrgname] = useState([]);
    let { oid } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/candidates/${oid}`)
            .then((res) => {
                setCandidates(res.data[0].candidates)
            });
        axios.get(`${API_URL}/organs/${oid}`)
            .then((res) => {
                setOrgname(res.data.organ_name)
            })
    }, []);
    if (candidates.length === 0)
        return <EmptyData />
    return (
        <div className='can'>
            <div className='container'>
                <h1 className='text-center py-4'>ORGANIZATION: {orgname}</h1>
                <div className='d-flex d-md-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-0'>
                    {candidates.map(candidate => (
                        <CandidateCard cid={candidate._id}
                            votes={candidate.votes}
                            body={candidate.description} name={candidate.fullname}
                            image={candidate.canImg.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Candidates;