import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

const EditJobVacancy = () => {
    const [vacancy, setVacancy] = useState({});

    let {id} = useParams();

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            .then(result => {
                // console.info(result.data);
                setVacancy(result.data);
            })
    }, []);

    const handleInputVacancy = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setVacancy({...vacancy, [name]: value});
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            salary_min,
            salary_max,
            company_name,
            company_city,
            company_image_url,
        } = vacancy;

        axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
            title: title,
            job_description: job_description,
            job_qualification: job_qualification,
            job_type: job_type,
            job_tenure: job_tenure,
            job_status: job_status,
            salary_min: salary_min,
            salary_max: salary_max,
            company_name: company_name,
            company_city: company_city,
            company_image_url: company_image_url,
        }, {
            headers: {"Authorization": "Bearer" + Cookies.get('token')}
        })
        .then(result => {
            console.info(result);
            swal({
              title: 'Congratulation!',
              text: 'Job Vacancy Was Successfully Updated!',
              icon: 'success',
            })
            .then(result => {
                setVacancy({
                    title: '',
                    job_description: '',
                    job_qualification: '',
                    job_type: '',
                    job_tenure: '',
                    job_status: '',
                    salary_min: '',
                    salary_max: '',
                    company_name: '',
                    company_city: '',
                    company_image_url: '',
                });
                window.location.href = '/';
            })
        })
        .catch(error => {
            console.info(`Errornya adalah: ${error}`)
        });
    }

    console.info(vacancy);
  return (
    <div className='container flex flex-wrap justify-center items-center mx-auto h-full flex-1 mb-6'>
        <main class=" dark:bg-gray-800 rounded-2xl h-full overflow-hidden relative container pt-24 pb-4">
            <div class="flex items-center justify-center">

                <div class="flex flex-col w-2/3 px-4 py-8 bg-white rounded-2xl shadow-md dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 overflow-auto h-screen">
                    <div class="self-center mb-2 text-xl font-semibold text-gray-800 sm:text-2xl dark:text-white">
                        Edit Job Vacancy
                    </div>
                    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                        Fill the require for your job vacancy!
                    </span>
                    <div class="p-6 mt-2">
                        <form onSubmit={handleUpdate}>
                            <div className='p-4'>
                                <div class="flex flex-col mb-4">
                                    <label className='text-sm'>Job Section</label>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                                        </span>
                                        <input value={vacancy.title} onInput={handleInputVacancy} name='title' type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Job Title"/>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                        </span>
                                        <textarea value={vacancy.job_description} onInput={handleInputVacancy} name='job_description' rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Description..."></textarea>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
                                        </span>
                                        <input value={vacancy.job_qualification} onInput={handleInputVacancy} name='job_qualification' type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Job Requirement"/>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </span>
                                        <select value={vacancy.job_type} onInput={handleInputVacancy} name="job_type" class="w-full rounded-r-lg text-gray-600 bg-white hover:bg-white focus:ring-2 focus:border-none focus:outline-none focus:ring-sky-200 border-gray-200 font-normal text-sm px-4 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-400">
                                            <option value="">
                                                Job Type
                                            </option>
                                            <option value="Onsite">
                                                Onsite
                                            </option>
                                            <option value="Remote">
                                                Remote
                                            </option>
                                            <option value="Hybrid">
                                                Hybrid
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                        </span>
                                        <select value={vacancy.job_tenure} onInput={handleInputVacancy} name="job_tenure" class="w-full rounded-r-lg text-gray-600 bg-white hover:bg-white focus:ring-2 focus:border-none focus:outline-none focus:ring-sky-200 border-gray-200 font-normal text-sm px-4 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-400">
                                            <option value="">
                                                Job Level
                                            </option>
                                            <option value="Fulltime">
                                                Fulltime
                                            </option>
                                            <option value="Part-time">
                                                Part-time
                                            </option>
                                            <option value="Internship">
                                                Internship
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>
                                        </span>
                                        <select value={vacancy.job_status} onInput={handleInputVacancy} name="job_status" class="w-full rounded-r-lg text-gray-600 bg-white hover:bg-white focus:ring-2 focus:border-none focus:outline-none focus:ring-sky-200 border-gray-200 font-normal text-sm px-4 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-400">
                                            <option value="">
                                                Job Status
                                            </option>
                                            <option value="1">
                                                Dibuka
                                            </option>
                                            <option value="0">
                                                Ditutup
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </span>
                                        <input value={vacancy.salary_min} onInput={handleInputVacancy} name='salary_min' type="number" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Salary Minimum"/>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </span>
                                        <input value={vacancy.salary_max} onInput={handleInputVacancy} name='salary_max' type="number" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Salary Maximum"/>
                                    </div>
                                </div>
                            </div>

                            <div className='p-4'>
                                <div class="flex flex-col mb-4">
                                    <label className='text-sm'>Company Section</label>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        </span>
                                        <input value={vacancy.company_name} onInput={handleInputVacancy} name='company_name' type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Company Name"/>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </span>
                                        <input value={vacancy.company_city} onInput={handleInputVacancy} name='company_city' type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Company City"/>
                                    </div>
                                </div>
                                <div class="flex flex-col mb-3">
                                    <div class="flex relative ">
                                        <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </span>
                                        <input value={vacancy.company_image_url} onInput={handleInputVacancy} name='company_image_url' type="text" class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent" placeholder="Company Profile Image URL"/>
                                    </div>
                                </div>
                            </div>

                            <div className='p-4 mb-4'>
                                <div class="flex w-1/2 my-4 mx-auto">
                                    <button type="submit" class="py-2 px-4 bg-sky-700 hover:bg-sky-800 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    </div>
  )
}

export default EditJobVacancy;