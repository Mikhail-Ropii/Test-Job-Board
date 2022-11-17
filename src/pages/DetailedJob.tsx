import * as Api from "../services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IJob } from "../models";
import { NavBlock } from "../components/NavBlock";
import { SalaryBlock } from "../components/SalaryBlock";
import { DescriptionBlock } from "../components/DescriptionBlock";
import { Button } from "../components/Button";
import { Line } from "../components/Line";
import { Gallery } from "../components/Gallery";
import { EmployType } from "../components/EmployType";
import { Benefits } from "../components/Benefits";

export const DetailedJob = () => {
  const [jobDetail, setJobDetail] = useState<IJob>();
  const { id } = useParams();

  useEffect(() => {
    async function getJobDetail() {
      try {
        const jobsList = await Api.getJobsList();
        const selectedJob = jobsList?.find((job: IJob) => job.id === id);
        if (selectedJob) {
          setJobDetail(selectedJob);
        }
      } catch (error) {}
    }
    getJobDetail();
  }, [id]);

  const {
    address,
    benefits,
    createdAt,
    description,
    email,
    employment_type,
    location,
    name,
    phone,
    pictures,
    salary,
    title,
  } = jobDetail || ({} as IJob);

  const createDate = new Date(createdAt?.slice(0, 10));
  const dateNow = new Date();
  const daysAfter = Math.ceil(
    Math.abs(dateNow.getTime() - createDate.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <>
      {jobDetail && (
        <div className="py-6 px-[15px]">
          <h1 className="text-xxl text-mainText font-novaBold mb-3">
            Job Details
          </h1>
          <Line />
          <NavBlock />
          <p className="text-mainText text-xl font-novaBold mb-[5px]">
            {title}
          </p>
          <div className="flex justify-between mb-[14px]">
            <p className=" my-auto font-novaLight text-xs text-[#38415D] text-opacity-60 text-center">
              Posted {daysAfter} days ago
            </p>
            <SalaryBlock value={salary} />
          </div>
          <DescriptionBlock description={description} />
          <Button>Apply now</Button>
          <p className="text-xxl font-novaBold">Attached images</p>
          <Line />
          <Gallery pictures={pictures} />
          <p className="text-xxl font-novaBold">Additional info</p>
          <Line />
          <p className="font-novaRegular text-m text-[rgba(56, 65, 93, 0.82)]">
            Employment type
          </p>
          <EmployType employTypeList={employment_type} />
          <p className="font-novaRegular text-m text-[rgba(56, 65, 93, 0.82)]">
            Benefits
          </p>
          <Benefits benefits={benefits} />
          <p className="text-xxl font-novaBold">Contacts</p>
          <Line />
          <ul>
            <li>{address}</li>
          </ul>
        </div>
      )}
    </>
  );
};
