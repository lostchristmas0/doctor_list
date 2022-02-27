import React from 'react'
import Header from './components/Header'
import Doctor from './components/Doctor'
import DoctorData from './data/DoctorData'
import DoctorList from './components/DoctorList'
import DetailPage from './page/DetailPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route exact path='/' element={<DoctorList list={DoctorData} />}>
          </Route>
          <Route path='/:id' element={<DetailPage />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;