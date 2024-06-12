import React from 'react'
import Location from './Location'
import Salary from '../Components/Salary'
import JobpostingDate from '../Components/JobpostingDate'
import WorkExperience from '../Components/WorkExperience'
import EmploymentType from '../Components/EmploymentType'

const SideBar = ({handleClick,handleChange}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>
            Filters
        </h3>
        
        <Salary  handleChange={handleChange} handleClick={handleClick}/>
        <JobpostingDate  handleChange={handleChange}/>
        <WorkExperience  handleChange={handleChange}/>
        <EmploymentType  handleChange={handleChange}/>
    </div>
  )
}

export default SideBar