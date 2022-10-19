import React, { useContext, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import { GlobalContext } from '../../context/GlobalContext';
import SkeletonCardComponent from '../../components/SkeletonCardComponent';
import CardComponent from '../../components/CardComponent';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {state, handleFunction} = useContext(GlobalContext);
  const {
      jobs,
      skeleton, setSkeleton,
  } = state;
  const {
      fetch,
  } = handleFunction;

  useEffect(() => {
    setSkeleton(true);
    fetch();
  }, []);

  return (
    <div className='container max-w-7xl justify-center items-center mx-auto h-full py-28'>
        <div className="sm:h-64 xl:h-80 2xl:h-96 mx-auto">
            <Carousel>
                <img
                    src={require('../../assets/images/foto1.jpg')}
                    alt="..."
                />
                <img
                    src={require('../../assets/images/foto2.jpg')}
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                />
            </Carousel>
        </div>
        <div className='pt-10'>
            <h1 className='text-2xl font-semibold font-sans'>Lowongan Kerja Yang Tersedia:</h1>
        </div>
        <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 pt-10'>
            {skeleton && (
                <>
                    <SkeletonCardComponent/>
                </>
            )}
            {jobs !== null && jobs.filter((value, index) => {
                return index < 6;
            })
            .map((result) => {
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
        <div className='pt-10'>
        <Link to='/explore-vacancy'>
            <button className='font-bold text-gray-600 bg-white border border-1 border-gray-100 shadow-md shadow-gray-100 hover:shadow-lg hover:shadow-gray-200 rounded-lg py-4 w-full'>
                View More..
            </button>
        </Link>
        </div>
    </div>
  )
}

export default HomePage;