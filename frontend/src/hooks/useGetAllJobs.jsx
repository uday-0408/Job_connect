import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetAllJobs = () => {
  console.log("useGetAllJobs hook called");
  const dispatch = useDispatch(); // ✅ Fixed typo
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        console.info("Fetching all jobs...");
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs)); // ✅ Fixed typo
        }
        console.info("All jobs fetched successfully", res.data.jobs);
      } catch (error) {
        console.log("error from useGetAllJobs hook: " + error);
        // ✅ Fixed error handling
        if (error.response?.status === 401) {
          console.warn("Unauthorized access, redirecting to login");
          toast.warning("LOgin to continue");
          navigate("/login");
        }
      }
    };
    fetchAllJobs();
  }, [dispatch, navigate]); // ✅ Added dependencies
};
