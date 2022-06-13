import React from 'react'
import CodingLevelItem from './codingLevelItem'
import ImageLang from '../images/programming.png'
import {TiArrowForward} from 'react-icons/ti'
import RightIcon from '../images/right-icon.png'

const CodingLevel = () => {
  return (
    <div className='my-14 grid gap-5 lg:grid-cols-2 lg:my-20'>
        <div className='relative'>
            <img className='h-96 mx-auto lg:mx-0' src={ImageLang} alt="" />
            <div className='py-10 px-5 mx-auto max-w-xl lg:absolute bottom-10 right-20 lg:translate-x-10 lg:max-w-sm rounded-xl shadow-lg bg-gradient-to-br from-green-300 to-teal-500'>
                <h2 className='text-3xl mb-5 font-semibold text-white'>Programming skills</h2>
                <p className='text-gray-200'>This is the part of computer languages i've learned and i'm not expertise all of them. there are many things i need to learn more.</p>
            </div>
            <img className='w-32 absolute bottom-72 right-0 hidden lg:block' src={RightIcon} alt="" />
        </div>
        <div className='py-20 px-5 max-w-full lg:max-w-2xl lg:mt-20 rounded-tl-3xl rounded-tr-4xl rounded-br-3xl rounded-bl-4xl shadow-xl bg-gradient-to-br from-blue-300 to-sky-500 text-white'>           
            <CodingLevelItem isAverage='80' isLang='HTML'/>       
            <CodingLevelItem isAverage='70' isLang='CSS'/>
            <CodingLevelItem isAverage='40' isLang='Javascript'/>
            <CodingLevelItem isAverage='50' isLang='ReactJS'/>
        </div>
    </div>
  )
}

export default CodingLevel