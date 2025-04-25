import React from 'react'
import Dashboard from './Dashboard'
import TaskForm from '../components/TaskForm'

function AddTask() {
  return (
    <div className='flex bg-[#F9F5EE] h-screen '>

        <Dashboard/>
    
        <TaskForm/>
    </div>
  )
}

export default AddTask