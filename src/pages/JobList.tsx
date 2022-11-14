import { useEffect, useState } from "react";
import * as Api from "../services/Api";
import { JobCard } from "../components/JobCard";
import { IJob } from "../models";

interface JobListProps {
  setJobDetail: (selectedJob: IJob) => void;
}

export const JobList = ({ setJobDetail }: JobListProps) => {
  const [jobsList, setJobsList] = useState<any[]>();

  useEffect(() => {
    async function getJobsList() {
      try {
        const jobsList = await Api.getJobsList();
        setJobsList(jobsList);
      } catch (error) {}
    }
    getJobsList();
  }, []);

  const getById = (id: string) => {
    const selectedJob = jobsList?.find((job) => job.id === id);
    console.log(selectedJob);
    setJobDetail(selectedJob);
  };

  console.log(jobsList);
  return (
    <div className="bg-mainBg">
      <div className="max-w-[1400px] ml-auto mr-auto">
        <ul>
          {jobsList?.map((card) => (
            <JobCard key={card.id} card={card} getById={getById} />
          ))}
        </ul>
      </div>
    </div>
  );
};
