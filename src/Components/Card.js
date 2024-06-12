import React from 'react'
import {Link} from 'react-router-dom'
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from 'react-icons/fi'
const Card = ({data}) => {
    const {_id,jobTitle,companyName, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel,
        employmentType, description}=data;
  return (
    <div>
        <section className='card'>
            <Link to={`/job/${_id}`} className="flex gap-4 flex-col sm:flex-row items-start">
                <img src={companyLogo} alt='' className='w-20 h-20 object-contain'></img>
                <div>
                    <h4 className='text-primary mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                

                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2 justify-around'>
                    <span><FiMapPin className='flex items-center gap-2'/>{jobLocation}</span>
                    <span><FiClock className='flex items-center gap-2'/>{employmentType}</span>
                    <span><FiDollarSign className='flex items-center gap-2'/>{minPrice}-{maxPrice}K</span>
                    <span><FiCalendar className='flex items-center gap-2'/>{postingDate}</span>   
                </div>
                <p className='text-base text-primary/70'>{description}</p>
                </div>
            </Link>
        </section>
    </div>
  )
}

export default Card