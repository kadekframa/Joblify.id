import React from 'react';
import Logo from '../../assets/images/logo-joblify.png';

const CardComponent = (props) => {
  const { id, name, company_name, image_url, company_city, salary_min, salary_max, job_type, job_tenure, job_status, updated_at} = props;
  return (
    <a key={id} href={`/`} class="hover:shadow-lg hover:shadow-gray-200 p-4 max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className='flex flex-row mb-3'>
            <img src={image_url !== null && image_url !== undefined ? image_url : {Logo}} className='py-2' alt='Company Logo' width={50}/>
            <div className='flex flex-col'>
                <h5 class="ml-2 mb-1 text-md font-bold tracking-tight text-gray-600 dark:text-white">{name} <span className='text-sm font-normal'>({job_type})</span></h5>
                <p class="ml-2 text-md tracking-tight text-sky-700 dark:text-white">{company_name}</p>
            </div>
        </div>
        <div className='flex'>
            <svg class="w-5 h-5" color='gray' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">{company_city}</p>
        </div>
        <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">$ IDR {salary_min}-{salary_max}</p>
        <p class="font-normal text-sm text-gray-700 dark:text-gray-400">{job_tenure}</p>
        {job_status === 1 ? (
            <p class="mt-6 font-bold text-sm text-green-500 dark:text-gray-400">{job_status === 1 ? 'Dibuka' : 'Ditutup'}</p>
        ) : (
            <p class="mt-6 font-bold text-sm text-red-600 dark:text-gray-400">{job_status === 1 ? 'Dibuka' : 'Ditutup'}</p>
        )}
        <p class="font-normal text-xs text-gray-400 dark:text-gray-400">Diperbarui {updated_at}</p>
    </a>
  )
}

export default CardComponent;