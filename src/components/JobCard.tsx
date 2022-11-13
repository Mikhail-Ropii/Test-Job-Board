import { ImLocation } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

type JobCardProps = {
  card: {
    id: string;
    pictures: string[];
    title: string;
    name: string;
    address: string;
    createdAt: string;
  };
  getById: (id: string) => void;
};

export const JobCard = ({ card, getById }: JobCardProps) => {
  const { id, pictures, title, name, address, createdAt } = card;

  const createDate = new Date(createdAt.slice(0, 10));
  const dateNow = new Date();
  const daysAfter = Math.ceil(
    Math.abs(dateNow.getTime() - createDate.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <li className="h-52 rounded bg-cardModBg mx-2 my-2 px-4 py-4 shadow-3xl lg:bg-cardDescBg lg:px-4 lg:py-6 lg:h-[164px]">
      <div className="flex">
        <div className="mr-5 lg:mr-6">
          <img
            className="max-w-none rounded-full w-16 h-16 mt-10 lg:w-[85px] lg:h-[85px] lg:mt-0"
            src={pictures[0]}
            alt={title}
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div>
            <p
              onClick={() => getById(id)}
              className="font-novaRegular text-m pb-1.5 text-mainText"
            >
              {title}
            </p>
            <p className="pb-1.5 font-novaRegular text-s text-secondaryText">
              Department name &#x2022; {name}
            </p>
            <p className="flex font-novaRegular text-s text-secondaryText">
              <ImLocation className="mr-2" color="#878D9D" size={18} />
              {address}
            </p>
          </div>
          <div className="flex mb-4 justify-between lg:mb-0 lg:mr-auto">
            <ul className="flex lg:mr-8">
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
              <p className="font-novaLight text-xs text-secondaryText lg:align-bottom">
                Posted {daysAfter} days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
