import DoctorDetail from "../components/DoctorDetail"
import DoctorList from "../components/DoctorList"
import {useLocation, useParams} from 'react-router-dom'

function DetailPage(props) {
  const params = useParams()
  const {state} = useLocation()
  // console.log(state)
  return (
    <div>
      <DoctorDetail item={state.current} />
      <h2>Similar doctors:</h2>
      <div>
        <DoctorList list={state.similar} />
      </div>
    </div>
  )
}

export default DetailPage