import * as Api from "../services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import circle from "../images/circle.svg";
import { IJob } from "../models";
import { NavBlock } from "../components/NavBlock";
import { SalaryBlock } from "../components/SalaryBlock";
import { DescriptionBlock } from "../components/DescriptionBlock";
import { Button } from "../components/Button";
import { Line } from "../components/Line";
import { Gallery } from "../components/Gallery";
import { EmployType } from "../components/EmployType";
import { Benefits } from "../components/Benefits";
import { BlockTitle } from "../components/BlockTitle";
import { Map } from "../components/Map";

import { ImLocation } from "react-icons/im";

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
        <div className="py-6 px-[15px] max-w-[1306px] ml-auto mr-auto lg:px-6 lg:flex justify-between">
          <div className="lg:mr-[115px]">
            <div className="lg:flex justify-between lg:mb-[9px] items-baseline">
              <h1 className="text-xxl text-mainText font-novaBold mb-3 lg:mb-0">
                Job Details
              </h1>
              <div className="hidden lg:block">
                <NavBlock />
              </div>
            </div>
            <Line />
            <div className="hidden mt-[39px] mb-8 lg:block">
              <Button>Apply now</Button>
            </div>
            <div className="lg:hidden">
              <NavBlock />
            </div>
            <div className="lg:flex justify-between lg:mb-[7px]">
              <p className="text-mainText text-xl font-novaBold mb-[5px] lg:mr-[60px]">
                {title}
              </p>
              <div className="hidden lg:block">
                <SalaryBlock value={salary} />
              </div>
            </div>
            <div className="flex justify-between mb-[14px] lg:mb-[7px]">
              <p className="my-auto font-novaLight text-xs text-[#38415D] text-opacity-60 text-center">
                Posted {daysAfter} days ago
              </p>
              <div className="lg:hidden">
                <SalaryBlock value={salary} />
              </div>
            </div>
            <DescriptionBlock description={description} />
            <div className="flex justify-center mb-[135px] lg:block lg:mb-[86px]">
              <Button>Apply now</Button>
            </div>
            <div className="lg:flex lg:flex-col-reverse">
              <div>
                <BlockTitle>Attached images</BlockTitle>
                <Line />
                <Gallery pictures={pictures} />
              </div>
              <div>
                <BlockTitle>Additional info</BlockTitle>
                <Line />
                <p className="mt-[15px] mb-[10px] font-novaRegular text-m text-[rgba(56, 65, 93, 0.82)]">
                  Employment type
                </p>
                <EmployType employTypeList={employment_type} />
                <p className="mb-[10px] font-novaRegular text-m text-[rgba(56, 65, 93, 0.82)]">
                  Benefits
                </p>
                <Benefits benefits={benefits} />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <BlockTitle>Contacts</BlockTitle>
            <Line />
          </div>
          <div className="-z-20 relative mt-5 rounded-lg bg-[#2A3047] lg:h-[415px] lg:min-w-[402px]">
            <img className="-z-10 absolute" src={circle} alt="circle" />
            <div className="py-8 px-16 z-10">
              <p className=" text-[#E7EAF0] font-novaSemiBold leading-5 text-[16px]">
                Department name.
              </p>
              <p className=" mb-4 text-[#E7EAF0] font-novaSemiBold leading-5 text-[16px]">
                {name}
              </p>
              <div className="flex mb-[6px]">
                <ImLocation size={18} color="#D8D8D8" className="mr-2" />
                <p className="text-[#E7EAF0] font-novaRegular text-s tracking-tight">
                  {address}
                </p>
              </div>
              <div className=" text-[#FFFFFF] text-opacity-60 font-novaRegular text-s tracking-tight">
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            </div>
            <Map location={location} address={address} />{" "}
          </div>
        </div>
      )}
    </>
  );
};
