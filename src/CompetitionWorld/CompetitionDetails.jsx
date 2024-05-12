/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getallComp } from '../service/api';
import AddPlayer from './AddPlayer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/compsSlice';

function CompetitionDetails() {
    const { id } = useParams();
    const [comp, setComp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);

    const dispatch = useDispatch();
  const Competitions = useSelector((state) => state.comps.comps); // Adjust according to your state structure

  useEffect(() => {
    dispatch(fetchEvents());
    // Hide welcome message after 3 seconds
   
}, [dispatch]);

    useEffect(() => {
        const competition = Competitions.find(comp => comp.id === id);
        setComp(competition);
        setLoading(false);
        setError('');
    }, [dispatch,id,Competitions]);

    const handleParticipateClick = () => {
        setShowForm(!showForm); // Toggle the AddPlayer form visibility
    };

    if (loading) return <p>Loading competition details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {comp ? (
                <div>
                    <h2>{comp.name}</h2>
                    <p>Date: {comp.date}</p>
                    <p>Fees: ${comp.fees}</p>
                    <p>Participants: {comp.participants}</p>
                    <p>Description: {comp.description}</p>
                    <button onClick={handleParticipateClick} disabled={comp.participants === 0}>Participate</button>
                    {showForm && <AddPlayer competitionId={id} onCloseForm={handleParticipateClick} />}
                    <h3>Participant List:</h3>
                    {comp.players && comp.players.length > 0 ? (
                        <ul>
                            {comp.players.map((participant, index) => (
                                <li key={index}>{participant.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No participants yet.</p>
                    )}
                </div>
            ) : (
                <p>No competition details available.</p>
            )}
        </div>
    );
}

export default CompetitionDetails;
