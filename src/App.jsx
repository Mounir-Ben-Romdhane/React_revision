import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Competitions from './CompetitionWorld/Competitions'
import Home from './CompetitionWorld/Home'
import NotFound from './CompetitionWorld/NotFound'
import CompetitionDetails from './CompetitionWorld/CompetitionDetails'

function App() {

  return (
    <>
      <Routes>
        {/**exament competitions */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path='/home'
          element={<Home />}
        />
        <Route path="/competition/:id" element={<CompetitionDetails />} />

        <Route path="/competitions" element={<Competitions />} />
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
