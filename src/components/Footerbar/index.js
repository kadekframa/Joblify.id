import React from 'react';

const Footerbar = () => {
  return (
    <footer class="p-4 bg-sky-800 shadow md:flex md:items-center md:justify-between md:p-5 dark:bg-gray-800">
        <div className='container flex flex-wrap justify-center items-center mx-auto'>
            <span class="text-sm text-center text-white sm:text-center dark:text-gray-400">
                © 2022 JOBLIFY.ID All Rights Reserved. | Created By: &nbsp;
                <a href="https://github.com/kadekframa" class="hover:underline" target='blank'>
                    Kadek Frama
                </a>
            </span>
        </div>
    </footer>
  )
}

export default Footerbar;