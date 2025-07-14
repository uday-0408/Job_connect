import React, { use } from "react";
import axios from "axios";
import { useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";
const useGetAllJobs = () => {
  const dispath = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispath(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
};

export default useGetAllJobs;
