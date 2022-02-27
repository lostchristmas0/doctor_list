import React from 'react'
import {Link} from 'react-router-dom'

function DoctorDetail({item}) {
  return (
    <div className='card'>
      <h1>{item.name}</h1>
      <br/>
      <h3>Specialty:</h3>
      <p>{item.specialty.join(', ')}</p>
      <br/>
      <h3>Department:</h3>
      <p>{item.department}</p>
      <br/>
      <h3>Biography:</h3>
      <p>{item.intro}</p>
      <br/>
      <h3>Contact info:</h3>
      <p>{item.location}</p>
      <p>{item.phone}</p>
      <div className='review'>Patients review: {item.review}</div>
      {/* <div className='contact'>Contact info: <br/>{item.location}<br/>{item.phone}</div> */}
      <div className='home_page'>
        <Link to='/'>Home</Link>
      </div>
    </div>
  )
}

export default DoctorDetail