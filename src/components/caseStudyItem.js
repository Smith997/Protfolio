import React from 'react'
import NoImage from '../images/no-image.jpg';

export const CaseStudyItem = ({img, Icon, name, lang, lang1, lang2, desc}) => {
  return (
    <div className='relative bg-gray-200 max-w-md rounded-md overflow-hidden cursor-pointer shadow-lg hover:scale-95 duration-200'>
      {
        img ? <img className='h-64 w-full object-cover' src={img} alt="No image to show" /> : 
        <img className='h-64 w-full object-cover' src={NoImage} alt="No image to show" />
      }
      <Icon className='absolute top-5 right-5 text-xl text-gray-200 hover:scale-110 hover:text-gray-300'/>
      <div className='mx-5 my-8'>
        <h2 className='text-gray-500 text-2xl font-semibold'>{name}</h2>
        <div className='flex flex-wrap gap-3 text-gray-500 text-lg font-medium my-5'>
          <p className='rounded-lg px-3 bg-teal-300 shadow-lg shadow-blue-500/50'>{lang}</p>
          <p className='rounded-lg px-3 bg-teal-300 shadow-lg shadow-blue-500/50'>{lang1}</p>
          <p className='rounded-lg px-3 bg-teal-300 shadow-lg shadow-blue-500/50'>{lang2}</p>
        </div>
        <p className='text-gray-500'>{desc}</p>
      </div>      
    </div>
  )
}
