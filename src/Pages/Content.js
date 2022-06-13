import React from 'react'
import { CaseStudy } from '../components/caseStudy'
import CodingLevel from '../components/codingLevel'
import Contact from '../components/contact'

const Content = () => {
  return (
    <div className='max-w-7xl mx-auto px-5'>
        <CaseStudy />
        <CodingLevel />
        <Contact />
    </div>
  )
}

export default Content