/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import competitionns from "../json/competitionWorld.json";
import Competition from './Competition';
import { Container, Table } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { getallComp } from '../service/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/compsSlice';

function Competitions() {

  //const [Competitions, setCompetitions] = useState([]);

  const dispatch = useDispatch();
  const Competitions = useSelector((state) => state.comps.comps); // Adjust according to your state structure

  useEffect(() => {
    dispatch(fetchEvents());
    // Hide welcome message after 3 seconds
   
}, [dispatch]);

  /*
  useEffect(() => {
    const fetchComps = async () => {
      try {
          const comps = await getallComp();
          setCompetitions(comps.data);
      } catch (err) {
          console.log('Error:', err);
      }
  };
  fetchComps();

  }, [])
  */

  return (
    <div>
      
      <NavigationBar />
      <h1>Competitions</h1>
      <Container>
            <Table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Fees</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {Competitions?.map((competition) => (
                       <Competition data={competition}/>
                    ))}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default Competitions