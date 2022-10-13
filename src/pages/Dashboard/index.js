import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import SidebarDashboardComponent from '../../components/SidebarDashboardComponent';
import { GlobalContext } from '../../context/GlobalContext';

const Dashboard = () => {
  const {state, handleFunction} = useContext(GlobalContext);
  const {
    jobs,
  } = state;
  const [searchDashboard, setSearchDashboard] = useState('');

  const {
    fetch
  } = handleFunction;

  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleDeleteJobVacancy = (event) => {
    let id = event.target.value;
    swal({
      title: 'Are you sure want to delete this item?',
      text: 'Once you click Ok, the vancancy will deleted!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(willLogout => {
        if (willLogout) {
          swal('Job Vacancy Deleted!', {
            icon: 'success',
          })
          .then(result => {
            axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
                headers: {"Authorization": "Bearer" + Cookies.get('token')}
            })
            .then(result => {
                console.info(result);
            });
            
            window.location.href = '/dashboard';
          })

        } else {
          swal('Delete Cancel!', {
            icon: 'warning',
          })
        }
      })
  }

  return (
    <div className='container flex flex-wrap justify-center items-center mx-auto h-full flex-1 mb-6'>
        
        <main class="bg-slate-50 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative container py-20">
            <div class="flex items-start justify-between">
                {/* Sidebar */}
                    <SidebarDashboardComponent/>
                {/* End Sidebar */}
                <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                        <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                            <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-0 sm:ml-0">
                                <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                    <div class="relative flex items-center w-full h-full group">
                                        <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                            <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                            </path>
                                        </svg>
                                        <input onChange={(event) => setSearchDashboard(event.target.value)} value={searchDashboard} type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
                                    </div>
                                </div>
                                <div class="relative flex items-center justify-end w-2/4 mr-0 sm:mr-0 sm:right-auto">
                                    <a href="/add-jobvacancy" class="block relative flex my-auto justify-center items-center">
                                        <button type="button" class="text-white bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-small rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Jobs</button>
                                    </a>
                                </div>
                                </div>
                            </div>
                    </header>
                    <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                        <div class="flex flex-col flex-wrap sm:flex-row">
                            <div class="container mx-auto w-full mb-16">
                                <div class="sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                                    <div class="inline-block min-w-full shadow rounded-2xl overflow-hidden">
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        No.
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Company
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Role
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        City
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Job Type
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Created at
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Job Status
                                                    </th>
                                                    <th scope="col" class="px-5 py-3 bg-white font-semibold border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                                    <tbody>
                                                        {jobs.filter(value => {
                                                            if (searchDashboard === '') {
                                                                return value;
                                                            } else if (value.title.toLowerCase().includes(searchDashboard.toLowerCase())) {
                                                                return value;
                                                            }
                                                        })
                                                        .map((result, index) => {
                                                            return (
                                                                <tr>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <p class="font-semibold text-gray-900 whitespace-no-wrap">
                                                                            {index + 1}
                                                                        </p>
                                                                    </td>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <div class="flex items-center">
                                                                            <div class="flex-shrink-0">
                                                                                <a href="#" class="block relative">
                                                                                    <img alt="profil" src={result.company_image_url} class="mx-auto object-cover rounded-full h-8 w-8 "/>
                                                                                </a>
                                                                            </div>
                                                                            <div class="ml-2">
                                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                                    {result.company_name}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {result.title}
                                                                        </p>
                                                                    </td>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {result.company_city}
                                                                        </p>
                                                                    </td>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {result.job_type}
                                                                        </p>
                                                                    </td>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {result.created_at}
                                                                        </p>
                                                                    </td>
                                                                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                                            </span>
                                                                            <span class="relative">
                                                                                {result.job_status === 1 ? 'Dibuka' : 'Ditutup'}
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                    <td class="py-3 border-b border-gray-200 bg-white text-sm flex justify-center">
                                                                        <div className='py-5'>
                                                                            <button type="button" class="text-white text-sm bg-white border border-gray-300 focus:outline-none hover:bg-yellow-200 focus:ring-2 focus:ring-gray-200 font-small rounded-lg px-2 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mr-1 bg-yellow-300">
                                                                                <Link to={`/edit-jobvacancy/${result.id}`}>
                                                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                                                </Link>
                                                                            </button>
                                                                            <button onClick={handleDeleteJobVacancy} value={result.id} type="button" class="text-white text-sm bg-white border border-gray-300 focus:outline-none hover:bg-red-400 focus:ring-2 focus:ring-gray-200 font-small rounded-lg px-2 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 m-r1 bg-red-500">
                                                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Dashboard;