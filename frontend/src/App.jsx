import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AllTasks } from './pages/AllTasks'
import { Ongoing } from './pages/Ongoing'
import { Completed } from './pages/Completed'
import { Upcoming } from './pages/Upcoming'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-400 m-0 p-0 text-white h-full p-2 relative'>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Home/>} />
          <Route index element={<AllTasks/>} />
          <Route path='/ongoingEvents' element={<Ongoing/>} />
          <Route path='/completedEvents' element={<Completed/>} />
          <Route path='/upcomingEvents' element={<Upcoming/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
