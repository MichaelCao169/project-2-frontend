import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
    const {id}=useParams();
    const [job, setJob]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    },[])
  return (
    <div>JobDetail:{id}</div>
  )
}

export default JobDetail