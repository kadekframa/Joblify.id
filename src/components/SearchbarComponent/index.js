import React from 'react';

const SearchbarComponent = (props) => {
  const {
    search,
    setSearch,
    handleSearch,
  } = props;

  return (
    <div class="searchbar-wrapper grid grid-cols-1 gap-4 sm:grid-cols-10 w-full mt-20 mb-2 pt-6 px-3">
      <div className="col-span-2 location-visibility">
        <form class="flex items-center w-full">   
            <label for="simple-search" class="sr-only">Indonesia</label>
            <div class="relative w-full">
                <input type="text" aria-label="disabled input" class="mb-5 pl-5 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-700 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Indonesia" disabled />
            </div>
        </form>
      </div>
      <div className="col-span-8">
        <form onSubmit={handleSearch} class="flex items-center">   
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input onChange={(event) => setSearch(event.target.value)} value={search} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
            </div>
            <button type="submit" class="button-search-mobile-device inline-flex items-center py-2.5 px-6 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
            </button>
        </form>
      </div>
    </div>
  )
}

export default SearchbarComponent;