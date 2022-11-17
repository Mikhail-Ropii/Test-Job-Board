import { useEffect, useState } from "react";
import * as Api from "../services/Api";
import { JobCard } from "../components/JobCard";
import { IJob } from "../models";
import { useNavigate } from "react-router-dom";

export const JobList = () => {
  const [jobsList, setJobsList] = useState<IJob[]>();

  useEffect(() => {
    async function getJobsList() {
      try {
        const jobsList = await Api.getJobsList();
        setJobsList(jobsList);
      } catch (error) {}
    }
    getJobsList();
  }, []);

  console.log(jobsList);
  return (
    <div className="bg-mainBg">
      <div className="max-w-[1400px] ml-auto mr-auto">
        <ul>
          {jobsList?.map((card) => (
            <JobCard key={card.id} card={card} />
          ))}
        </ul>
      </div>
    </div>
  );
};
