import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../../components/CardComponent";
import SearchbarComponent from "../../components/SearchbarComponent";
import SidebarComponent from "../../components/SidebarComponent";
import './styles.css';
import { GlobalContext } from "../../context/GlobalContext";
import SkeletonCardComponent from "../../components/SkeletonCardComponent";

const ExploreVacancyPage = () => {
  const {state, handleFunction} = useContext(GlobalContext);
  const {
    jobs, setJobs,
    fetchstatus,
    skeleton, setSkeleton,
  } = state;
  const [search, setSearch] = useState('');
  // const [filter, setFilter] = useState([]);
  const [jobTenure, setJobTenure] = useState([]);
  const [jobType, setJobType] = useState([]);

  const {
    fetch
  } = handleFunction;


  useEffect(() => {
    if (fetchstatus === true) {
      setSkeleton(true);
      fetch();
    }
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    let fetchDataJobVacancy = async () => {
      let { data } = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
      let dataJob = data.data;

      let searchData = dataJob.filter(value => {
        if (search === '') {
          return value;
        } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
          return value;
        }

        console.info("Valuenya: " + value);
      });

      setJobs(searchData);
    }

    fetchDataJobVacancy();
  }

  const handleFilterJobTenure = (event) => {
    let checked = event.target.checked;
    let value = event.target.value;
    
    console.info(`${value} is ${checked}`);

    if (checked) {
      setJobTenure([...jobTenure, value]);
    } else {
      // setJobTenure([jobTenure.filter(event => event !== value)]);
      jobTenure.splice(jobTenure.indexOf(value), 1)
      setJobTenure([...jobTenure]);
    }
  }
  console.info(jobTenure);

  const handleFilterJobType = (event) => {
    let checked = event.target.checked;
    let value = event.target.value;

    if (checked) {
      setJobType([...jobType, value]);
    } else {
      jobType.splice(jobType.indexOf(value), 1);
      setJobType([...jobType]);
    }
  }
  console.info(jobType);

  const handleFilter = async () => {
    // handleResetFilter();
    let joinJobTenure = jobTenure.join(' ');
    setJobTenure([joinJobTenure]);
    let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
    let dataJob = data.data;
    
    let filterJob = dataJob.filter(value => {
      if (jobTenure === '') {
        return value;
      } else if (value.job_tenure.toLowerCase().includes(jobTenure.toLowerCase())) {
        return value;
      }
      
      console.info(value)
    });
  }


  return (
    <div className="container flex flex-wrap justify-between items-center mx-auto mb-3 max-w-7xl">
      {/* Section searchbar */}
        <SearchbarComponent
          search={search}
          setSearch={setSearch}
          handleSearch={(event) => handleSearch(event)}
          handleFilter
        />
      {/* End section searchbar */}

      <div class="flex flex-row w-full explore-jobvacancy-wraper">
        {/* Sidebar */}
          <div className="mobile-sidebar w-1/5 max-h-full px-1">
                <SidebarComponent
                  jobTenure={jobTenure}
                  setJobTenure={setJobTenure}
                  handleFilterJobTenure={(event) => handleFilterJobTenure(event)}
                  handleFilterJobType={event => handleFilterJobType(event)}
                  handleFilter={handleFilter}
                />
          </div>
        {/* End Sidebar */}

        
        {/* List Jobs */}
        <div className="card-mobile-responsive w-4/5 0 px-4 overflow-auto height-vh">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10 mx-auto'>
            {skeleton && (
              <SkeletonCardComponent/>
            )}
            {jobs !== null && jobs.map((result) => {
              return (
                <CardComponent
                  key={result.id}
                  id={result.id}
                  name={result.title}
                  company_name={result.company_name}
                  image_url={result.company_image_url}
                  company_city={result.company_city}
                  salary_min={result.salary_min}
                  salary_max={result.salary_max}
                  job_type={result.job_type}
                  job_tenure={result.job_tenure}
                  job_status={result.job_status}
                  updated_at={result.updated_at}
                />
              )
            })}
          </div>
        </div>
        {/* End List Jobs */}

      </div>
    
    </div>
  )
};

export default ExploreVacancyPage;
