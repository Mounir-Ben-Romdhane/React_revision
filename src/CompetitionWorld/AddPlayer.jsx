/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, populateComps } from '../redux/compsSlice';
import { addComp, editComp } from '../service/api';

function AddPlayer(props) {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();
    
  const Competitions = useSelector((state) => state.comps.comps); // Adjust according to your state structure

  useEffect(() => {
    dispatch(fetchEvents());
    // Hide welcome message after 3 seconds

   
}, [dispatch]);

useEffect(() => {
    console.log("Competitions",Competitions);
}, [dispatch]);
   

const handleSubmit = async (e) => {
    e.preventDefault();

    // Find the competition by ID and clone it to ensure immutability
    const competitionIndex = Competitions.findIndex(comp => comp.id === props.competitionId);
    if (competitionIndex === -1) {
        console.error('Competition not found');
        return;
    }
    
    // Clone the competition object to modify
    let competition = {...Competitions[competitionIndex]};

    // Clone the players array and add the new player if it doesn't already include them
    if (!competition.players.some(player => player.name === username)) {
        competition.players = [...competition.players, {name: username}];
        competition.participants -= 1;  // Decrement the participants count

        // Update the competition in the Competitions array
        const updatedCompetitions = Competitions.map((comp, index) => 
            index === competitionIndex ? competition : comp
        );

        // Dispatch the update to Redux
        dispatch(populateComps(updatedCompetitions));

        // Assuming addComp updates the backend
        await editComp(props.competitionId,competition);

        props.onCloseForm();
        
    } else {
        alert('Player already exists');
    }
};


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddPlayer;
