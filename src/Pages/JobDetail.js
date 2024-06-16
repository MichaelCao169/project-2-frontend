import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobOverview from '../components/jobdetails/JobOverview';
import JobDescription from '../components/jobdetails/JobDescription';
import CompanyInfo from '../components/jobdetails/CompanyInfo';
import axios from 'axios';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        setJob(response.data);
      } catch (err) {
        console.error('Error fetching job', err);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="job-detail-container">
      <div className="job-detail-main">
        <JobOverview job={job} />
        <JobDescription description={job.description} requirements={job.requirements} />
      </div>
      <div className="job-detail-sidebar">
        <CompanyInfo company={job.company} />
      </div>
    </div>
  );
};

export default JobDetail;