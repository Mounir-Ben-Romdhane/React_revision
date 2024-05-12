/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

function Competition(props) {
  return (
<>
      <tr>
              <td>{props.data.id}</td>
              <td>{props.data.name}</td>
              <td>{props.data.fees}</td>
              <td>{props.data.date}</td>
              <td><Link to={`/competition/${props.data.id}`}>Details</Link></td>
      </tr>
      </>
  )
}

export default Competition