import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import SideBar from "../sidebar/SideBar";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);
  // this useState is used for searching input
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  // this useState is used for searching location input
  const [query2, setQuery2] = useState("");
  const handleLocationInputChange = (e) => {
    setQuery2(e.target.value);
  };

  //filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //filter jobs by location
  const filteredItems2 = jobs.filter(
    (job) => job.jobLocation.toLowerCase().indexOf(query2.toLowerCase()) !== -1
  );
  // Radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  //pick button for filtering (2 ways binding)
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // process the index for splitting pages of cards with fixed amount of cards
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main function

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }
    if(query2){
      filteredJobs= filteredItems2;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase()=== selected.toLowerCase()||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }
    console.log(filteredItems);
    const { startIndex, endIndex } = calculatePageRange();
    // use slice function to slice data base on current page
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner
        query={query}
        handleInputChange={handleInputChange}
        query2={query2}
        handleInputChange2={handleLocationInputChange}
      />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left size */}
        <div className="bg-white p-4 rounded">
          <SideBar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* main */}

        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p>Loading Jobs...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="font-semibold text-xl ml-5">
                {result.length} Job Found !
              </h3>
            </>
          )}

          {/* front-end for page manipulation */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span>
                Page {currentPage} /{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">upload cv </div>
      </div>
    </div>
  );
};
