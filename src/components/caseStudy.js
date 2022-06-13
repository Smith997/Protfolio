import React from 'react'
import MyImage from '../images/bg.jpg';
import { BsGithub } from 'react-icons/bs';
import { CaseStudyItem } from './caseStudyItem';

export const CaseStudy = () => {
  return (
    <div>
      <div className='my-16 mx-auto flex flex-col items-center text-center max-w-lg'>
        <h2 className='mb-5 text-white text-3xl font-semibold'>Case Studies &amp; Projects</h2>
        <p>This is some of my projects i've done. I used html and css components to create responsive design and some project also use an API to call data.</p>
      </div>  
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-center my-5'>        
        <CaseStudyItem img={MyImage} Icon={BsGithub} name='Computer Shop' lang='HTML' lang1='CSS' lang2='Javascript' desc='This is the website design using HTML, CSS and Javascript' />
        <CaseStudyItem Icon={BsGithub} name='Travel in Laos' lang='HTML' lang1='CSS' lang2='Javascript' desc='This is the website design using HTML, CSS and Javascript' />
        <CaseStudyItem Icon={BsGithub} name='Food Restaurant' lang='ReactJS' lang1='Style component' lang2='API' desc='This is the website design using ReactJs and API'/>
      </div>
    </div>
  )
}
