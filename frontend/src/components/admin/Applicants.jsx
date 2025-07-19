import React from 'react'
import ApplicantsTable from './ApplicantsTable'
import Navbar from '../shared/Navbar'

const Applicants = () => {
  return (
    <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
                <ApplicantsTable />
            </div>
        </div>
  )
}

export default Applicants
