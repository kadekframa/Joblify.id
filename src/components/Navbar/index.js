import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import Logo from '../../assets/images/logo-joblify.png';

const Navbar = () => {

  return (
    <nav class="bg-white shadow-lg shadow-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed w-full z-50">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Joblify.id Logo" width={65}/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">JOBLIFY.ID</span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-2 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center">
              <a href="/" class="block py-2 pr-4 pl-3 text-white bg-sky-800 rounded md:bg-transparent md:text-sky-800 md:p-0 dark:text-white" aria-current="page">Explore Jobs Vacancy</a>
            </li>
            {Cookies.get('token') &&
              <li className="flex items-center">
                <a href="/dashboard" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-800 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
              </li>
            }
            <li className="flex items-center">
              <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-800 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
            </li>
            {!Cookies.get('token') && 
            <>
              <li className="flex items-center"> 
                <a href="/login">
                  <button type="button" class="text-black border border-gray-300 hover:bg-sky-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </a>
              </li>
              <li className="flex items-center">
                <a href="/register">
                  <button type="button" class="text-white bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                </a>
              </li>
            </>
            }
            {Cookies.get('token') &&
              <li className="flex items-center">
                <span
                  onClick={() => {
                    swal({
                      title: 'Are you sure want to Logout?',
                      text: 'Once you click OK, you will logout from the system!',
                      icon: 'warning',
                      buttons: true,
                      dangerMode: true,
                    })
                      .then(willLogout => {
                        if (willLogout) {
                          swal('Logout Success!', {
                            icon: 'success',
                          })
                          .then(result => {
                            Cookies.remove('token');
                            Cookies.remove('UserLogin');
                            window.location.href = '/';
                          })

                        } else {
                          swal('Logout failed!', {
                            icon: 'warning',
                          })
                        }
                      })

                  }}
                >
                  <button type="button" class="text-black border border-gray-300 hover:bg-sky-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{Cookies.get('UserLogin')}</button>
                </span>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;