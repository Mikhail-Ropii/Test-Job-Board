import { ImLocation } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

import { Link } from "react-router-dom";

type JobCardProps = {
  card: {
    id: string;
    pictures: string[];
    title: string;
    name: string;
    address: string;
    createdAt: string;
  };
};

export const JobCard = ({ card }: JobCardProps) => {
  const { id, pictures, title, name, address, createdAt } = card;

  const createDate = new Date(createdAt.slice(0, 10));
  const dateNow = new Date();
  const daysAfter = Math.ceil(
    Math.abs(dateNow.getTime() - createDate.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <li className="flex justify-end flex-col-reverse lg:flex-row lg:justify-between h-52 rounded bg-cardModBg mx-2 my-2 px-4 py-4 shadow-3xl lg:bg-cardDescBg lg:px-4 lg:py-6 lg:h-[164px]">
      <div className="flex lg:mr-28">
        <div className="mr-5 lg:mr-6">
          <img
            className="max-w-none rounded-full w-[66px] h-[66px] lg:w-[85px] lg:h-[85px] lg:mt-0"
            src={pictures[0]}
            alt={title}
          />
        </div>
        <div>
          <div className="mb-[5px]">
            <Link
              to={`/${id}`}
              className="font-novaRegular text-m text-mainText"
            >
              {title}
            </Link>
          </div>

          <p className="mb-[7px] font-novaRegular text-s text-secondaryText">
            Department name &#x2022; {name}
          </p>
          <p className="flex font-novaRegular text-s text-secondaryText">
            <ImLocation className="mr-2" color="#878D9D" size={18} />
            {address}
          </p>
        </div>
      </div>
      <div className="flex mb-4 ml-[86px] justify-between lg:mb-0 lg:ml-0">
        <ul className="flex self-center lg:mr-8">
          <li>
            <AiFillStar color="#384564" />
          </li>
          <li>
            <AiFillStar color="#384564" />
          </li>
          <li>
            <AiFillStar color="#384564" />
          </li>
          <li>
            <AiFillStar color="#384564" />
          </li>
          <li>
            <AiFillStar color="#384564" />
          </li>
        </ul>
        <div className="flex flex-col justify-between">
          <BsBookmark color="#70778B" className="hidden lg:block ml-auto" />
          <p className="whitespace-nowrap font-novaLight text-xs text-secondaryText lg:align-bottom">
            Posted {daysAfter} days ago
          </p>
        </div>
      </div>
    </li>
  );
};
