import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useGetAllJobs } from '@/hooks/useGetAllJobs';

const filterJobs = [1, 2, 3,]
const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  if (allJobs.length <= 0) {
    console.log("No jobs found, fetching all jobs...");
    useGetAllJobs(); // Fetch all jobs if not already fetched
  }
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5' >

          <div className='w-20%' >
            <FilterCard />

          </div>
          {
            allJobs.length <= 0 ? <span>Job not found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  {
                    allJobs.map((job) => (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        key={job?._id}>
                        <Job job={job} />
                      </motion.div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>

      </div>



    </div>
  )
}

export default Jobs
