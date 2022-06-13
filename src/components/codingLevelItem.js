import React from 'react'

const CodingLevelItem = ({isAverage, isLang}) => {
  return (
    <div className='mb-4 max-w-xl mx-auto'>
        <span className='ml-3 font-semibold'>{isLang}</span>
        <div className='mt-1 rounded-2xl bg-gray-400 font-semibold'>
            <div className='flex justify-center rounded-2xl bg-gradient-to-r from-red-300 to-orange-200 text-blue-600' style={{width: `${isAverage}%`}}>{isAverage} %</div>
        </div>
    </div>
  )
}

export default CodingLevelItem