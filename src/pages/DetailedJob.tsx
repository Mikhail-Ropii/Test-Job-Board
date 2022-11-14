import { IJob } from "../models";
import { NavBlock } from "../components/NavBlock";
import { SalaryBlock } from "../components/SalaryBlock";
import { DescriptionBlock } from "../components/DescriptionBlock";
import { Button } from "../components/Button";
import { Line } from "../components/Line";
import { Gallery } from "../components/Gallery";
import { EmployType } from "../components/EmployType";
import { Benefits } from "../components/Benefits";

interface DetailedPageProps {
  jobDetail: IJob;
}

export const DetailedJob = ({ jobDetail }: DetailedPageProps) => {
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
  } = jobDetail;

  const createDate = new Date(createdAt.slice(0, 10));
  const dateNow = new Date();
  const daysAfter = Math.ceil(
    Math.abs(dateNow.getTime() - createDate.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <>
      <h1 className="text-xxl font-novaBold">Job Details</h1>
      <Line />
      <NavBlock />
      <p>{title}</p>
      <p>Posted {daysAfter} days ago</p>
      <SalaryBlock value={salary} />
      <DescriptionBlock description={description} />
      <Button>Apply now</Button>
      <p className="text-xxl font-novaBold">Attached images</p>
      <Line />
      <Gallery pictures={pictures} />
      <p className="text-xxl font-novaBold">Additional info</p>
      <Line />
      <p className="font-novaRegular text-m text-[rgba(56, 65, 93, 0.82);]">
        Employment type
      </p>
      <EmployType employTypeList={employment_type} />
      <p className="font-novaRegular text-m text-[rgba(56, 65, 93, 0.82);]">
        Benefits
      </p>
      <Benefits benefits={benefits} />
      <p className="text-xxl font-novaBold">Contacts</p>
      <Line />
      <ul>
        <li>{address}</li>
      </ul>
    </>
  );
};
