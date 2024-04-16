import React from 'react'
import Location from './Location'

const SideBar = ({handleClick,handleChange}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>
            Filters
        </h3>
        <Location  handleChange={handleChange}/>
    </div>
  )
}

export default SideBar