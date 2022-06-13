import React from 'react';
import {BsGithub} from 'react-icons/bs';
import Animation from '../images/programming.png';


const Header = () => {
  return (
    <header className="bg-bg-image w-full h-screen-80 bg-cover bg-center lg:h-screen">
        <nav className='w-full h-20 flex items-center'>
            <div className='flex items-center absolute right-16 text-xl'>
                <p className='mr-5 text-white hover:text-gray-300 cursor-pointer'>Contact</p>
                <BsGithub className='hover:animate-bounce hover:text-white'/>
            </div>
        </nav>
        <div>
          <div className='absolute top-36 left-20 right-20 lg:left-72 md:max-w-md sm:left-32'>
            <span className='text-xl text-gray-200'>Hi, I'm</span>
            <h2 className='mb-3 mt-1 text-3xl text-white font-lobster tracking-wider font-semibold'>Mith Chanmanoh</h2>
            <span className='text-2xl text-gray-200 font-semibold'>Font-end Developer</span>
            <p className='my-5'>I passionate and enjoy coding for mobile application and web development. The coding makes me think and handle in solving all kind of problems logically and reasonably.</p>
            <button className='border-2 border-gray-300 p-2 font-semibold text-white hover:bg-gray-300 hover:text-black hover:bg-opacity-30'>Download Resume</button>
          </div>
          {/* <img className='w-96 absolute right-28 top-32 opacity-30' src={Animation} alt="" /> */}
        </div>
    </header>
  )
}

export default Header