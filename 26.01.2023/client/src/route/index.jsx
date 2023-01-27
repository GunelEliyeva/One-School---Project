import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTeacher from '../pages/add-teacher'
import Courses from '../pages/courses'
import Details from '../pages/details'
import HomePages from '../pages/home'
import Programs from '../pages/programs'
import Teachers from '../pages/teachers'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/' element={<Courses/>}/>
            <Route path='/' element={<Programs/>}/>
            <Route path='/' element={<Teachers/>}/>
            <Route path='/add' element={<AddTeacher/>}/>
            <Route path='/detail-page/:_id' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default Routing