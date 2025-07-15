import React, { use } from "react";
import axios from "axios";
import { useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

export const useGetAllJobs = () => {
  console.log("useGetAllJobs hook called");
  const dispath = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        console.info("Fetching all jobs...");
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispath(setAllJobs(res.data.jobs));
        }
        console.info("All jobs fetched successfully", res.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);
};

// export default useGetAllJobs;
