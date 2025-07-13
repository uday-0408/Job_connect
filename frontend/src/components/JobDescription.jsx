import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-xl">FrontEnd devloper</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge className="text-blue-700 bg-blue-100 font-bold px-3 py-1 rounded-full">
              12 Positions
            </Badge>
            <Badge className="text-green-700 bg-green-100 font-bold px-3 py-1 rounded-full">
              Part Time
            </Badge>
            <Badge className="text-purple-700 bg-purple-100 font-bold px-3 py-1 rounded-full">
              25 LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : "applyJobHandler"}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5e0791]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role: <span className="pl-4 font-normal text-gray-800"></span>
        </h1>
        <h1 className="font-bold my-1">
          Location: <span className="pl-4 font-normal text-gray-800"></span>
        </h1>
        <h1 className="font-bold my-1">
          Description: <span className="pl-4 font-normal text-gray-800"></span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">experience yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">salary LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">
            applications length
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">createdAt</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
