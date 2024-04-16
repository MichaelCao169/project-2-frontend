import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import Jobs from './Jobs';
import SideBar from '../sidebar/SideBar';

export const Home = () => {
 
  const[selectedCategory,setSelectedCategory]=useState(null);
  const[jobs, setJobs]=useState([]);
  
  useEffect(()=>{
      fetch("jobs.json").then(res=>res.json()).then(data=>{
      
        setJobs(data);
      })
  },[])
  
  const [query, setQuery]=useState('');
    const handleInputChange=(e)=>{
        setQuery(e.target.value);
       
    }
    //filter jobs by title 
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!== -1)
    // Radio filter
    const handleChange =(e)=>{
      setSelectedCategory(e.target.value);
    }
    //pick button for filtering
    const handleClick =(e)=>{
      setSelectedCategory(e.target.value);
    }
    //main function


    const filteredData =(jobs,selected,query) =>{
      let filteredJobs =jobs;
      if(query) {filteredJobs=filteredItems}
      if(selected) {filteredJobs =filteredJobs.filter(
        ({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
          jobLocation.toLowerCase() === selected.toLowerCase() || 
          parseInt(maxPrice) <=parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase()||
          employmentType.toLowerCase()===selected.toLowerCase()
      ));}


      return filteredJobs.map((data,i)=><Card key={i} data={data}/>)
    }

    const result =filteredData(jobs, selectedCategory, query);





  return (
    <div >
      <Banner query={query} handleInputChange={handleInputChange}/>
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* left size */}
        <div className='bg-white p-4 rounded'>
          <SideBar handleChange={handleChange} handleClick={handleClick}/></div>

      {/* main */}

        <div className='col-span-2 bg-white p-4 rounded'><Jobs result={result}/></div>


        {/* right side */}
        <div  className='bg-white p-4 rounded'>upload cv </div>
        
      </div>
    </div>
  )
}
