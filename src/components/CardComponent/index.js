import React from 'react';
import Logo from '../../assets/images/logo-joblify.png';

const CardComponent = (props) => {
  const { id, name, company_name, image_url, company_city, salary_min, salary_max, job_tenure, job_status, updated_at} = props;
  return (
    <a key={id} href={`/`} class="hover:shadow-lg hover:shadow-gray-200 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className='flex flex-row mb-3'>
            <img src={image_url !== null && image_url !== undefined ? image_url : {Logo}} className='py-2' alt='Company Logo' width={50}/>
            <div className='flex flex-col'>
                <h5 class="ml-2 mb-1 text-md font-bold tracking-tight text-gray-600 dark:text-white">{name}</h5>
                <p class="ml-2 text-md tracking-tight text-sky-700 dark:text-white">{company_name}</p>
            </div>
        </div>
        <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">{company_city}</p>
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