import React from 'react'
import DoctorData from '../data/DoctorData'
import {Link} from 'react-router-dom'

function Doctor({item}) {
  let dpt = item.department

  const findSimilar = (entry) => {
    return entry.id !== item.id && entry['department'] === dpt && entry['specialty'].filter((x) => (item.specialty.indexOf(x) > -1)).length > 0
  }
  let similar = DoctorData.filter(findSimilar)

  const sortByReview = (list) => {
    return list.review
  }
  similar.sort(sortByReview)
  // console.log(similar)

  return (
    <div className='card'>
      <h1>{item.name}</h1>
      <br/>
      <h3>Specialty:</h3>
      <p>{item.specialty.join(', ')}</p>
      <div className='detail'>
        <Link to={`/${item.id}`} state={{
          current: item,
          similar: similar,
        }}>Detail</Link>
        {/* <Link to={{
          pathname: `/${item.id}`,
          state: {
            dpt: dpt,
            similar: similar,
          }
        }}>Detail</Link> */}
      </div>
    </div>
  )
}

export default Doctor