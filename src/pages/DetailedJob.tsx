import { JobTypes } from "../../type";

export const DetailedJob = (jobDatail: JobTypes) => {
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
  } = jobDatail;

  return (
    <ul>
      <li>{address}</li>
    </ul>
  );
};
