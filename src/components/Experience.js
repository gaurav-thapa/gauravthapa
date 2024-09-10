import React from "react";
import { experienceData } from "../data";

const Experience = () => {
  const fullTimeJobs = experienceData.filter((exp) => exp.type === "full-time");
  const internships = experienceData.filter((exp) => exp.type === "internship");
  return (
    <div className="mb-5">
      <div className="font-bold mb-1">Experience</div>
      <div>
      {fullTimeJobs.map((exp) => (
          <div
            className="bg-white first-of-type:border-orange-600 border-2 p-2 rounded-lg flex gap-2"
            key={exp.companyTitle + exp.jobTitle + exp.jobTime + exp.type}
          >
            <div>
                <img className="w-12 rounded" src={exp.logo} alt="company logo"/>
            </div>
            <div>
              <div className="font-bold">{exp.jobTitle}</div>
              <div>{exp.companyTitle}</div>
              <div className="text-gray-500">{exp.jobTime}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="font-bold my-1">Internships</div>
      <div>
        {internships.map((exp) => (
          <div
            className="bg-white p-2 rounded-lg flex gap-2"
            key={exp.companyTitle + exp.jobTitle + exp.jobTime + exp.type}
          >
            <div>
                <img className="w-14 rounded" src={exp.logo} alt="company logo"/>
            </div>
            <div>
              <div className="font-bold">{exp.jobTitle}</div>
              <div>{exp.companyTitle}</div>
              <div className="text-gray-500">{exp.jobTime}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
