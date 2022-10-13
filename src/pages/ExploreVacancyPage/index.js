import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../../components/CardComponent";
import SearchbarComponent from "../../components/SearchbarComponent";
import SidebarComponent from "../../components/SidebarComponent";
import './styles.css';
import { GlobalContext } from "../../context/GlobalContext";

const ExploreVacancyPage = () => {
  const {state, handleFunction} = useContext(GlobalContext);
  const {
    jobs, setJobs,
    fetchstatus,
  } = state;
  const [search, setSearch] = useState('');

  const {
    fetch
  } = handleFunction;


  useEffect(() => {
    if (fetchstatus === true) {
      fetch();
    }
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    console.info("Semangat!");

    let fetDataJobVacancy = async () => {
      let { data } = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
      let dataJob = data.data;

      let searchData = dataJob.filter(value => {
        if (search === '') {
          return value;
        } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
          return value;
        }

        console.info(value);
      });

      setJobs(searchData);
    }

    fetDataJobVacancy();
  }

  return (
    <div className="container flex flex-wrap justify-between items-center mx-auto mb-3">
      {/* Section searchbar */}
        <SearchbarComponent
          jobs={jobs}
          search={search}
          setSearch={setSearch}
          handleSearch={(event) => handleSearch(event)}
        />
      {/* End section searchbar */}

      <div class="flex flex-row w-full explore-jobvacancy-wraper">
        {/* Sidebar */}
          <div className="mobile-sidebar w-1/5 max-h-screen px-1">
                <SidebarComponent/>
          </div>
        {/* End Sidebar */}

        
        {/* List Jobs */}
        <div className="card-mobile-responsive w-4/5 0 px-4 overflow-auto height-vh">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10 mx-auto'>
            {jobs.map((result) => {
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
