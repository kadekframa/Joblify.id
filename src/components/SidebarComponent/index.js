import React from 'react';
import { Accordion, Button } from 'flowbite-react';

const SidebarComponent = (props) => {
  const {
    jobTenure,
    setJobTenure,
    handleFilterJobTenure,
    handleFilterJobType,
    handleFilter
  } = props;
  return (
    <aside class="w-full" aria-label="Sidebar">
      <div class="overflow-y-auto px-1 bg-white rounded dark:bg-white-800">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            Salary
          </Accordion.Title>
          <Accordion.Content>
            <p>Test</p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Job Type
          </Accordion.Title>
          <Accordion.Content>
            <div class="flex items-center h-5">
              <input type="checkbox" onChange={handleFilterJobType} value="onsite" name='onsite' class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Onsite</label>
            </div>
            <div class="flex items-center h-5">
              <input type="checkbox" onChange={handleFilterJobType} value="remote" name='remote' class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Remote</label>
            </div>
            <div class="flex items-center h-5">
              <input type="checkbox" onChange={handleFilterJobType} value="hybrid" name='hybrid' class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Hybrid</label>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Job Tenure
          </Accordion.Title>
          <Accordion.Content>
            <div class="flex items-center h-5">
              <input type="checkbox" onChange={handleFilterJobTenure} value="fulltime" name='fulltime' class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Fulltime</label>
            </div>
            <div class="flex items-center h-5">
              <input type="checkbox" onChange={handleFilterJobTenure} value="part-time" name='parttime' class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Part-time</label>
            </div>
            <div class="flex items-center h-5">
              <input type="checkbox" onChange={handleFilterJobTenure} value="internship" name='internship' class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Internship</label>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <button onClick={handleFilter} type="submit" class="w-full inline-flex items-center justify-center my-4 py-2.5 px-6 text-sm font-medium text-white bg-sky-700 rounded-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
        Apply Filter
      </button>
          
      </div>
    </aside>
  )
}

export default SidebarComponent;