import { BsFillSquareFill } from "react-icons/bs";

interface DescriptionBlockProps {
  description: string;
}

export const DescriptionBlock = ({ description }: DescriptionBlockProps) => {
  const trimmedString = description.split("\n");
  const compensation = trimmedString[7].split(".");
  console.log(compensation);

  return (
    <>
      <p className=" mb-[43px] font-novaRegular text-m text-mobileMain">
        {trimmedString[1]}
      </p>
      <p className="mb-2 text-l text-mainText font-novaBold">
        {trimmedString[3]}
      </p>
      <p className="mb-5 font-novaRegular text-m text-mobileMain">
        {trimmedString[4]}
      </p>
      <p className="mb-4 text-l text-mainText font-novaBold">
        {trimmedString[6]}
      </p>
      <ul>
        {compensation.map((item, idx) => (
          <li
            key={idx}
            className=" list-disc mb-5 font-novaRegular text-m text-mobileMain"
          >
            <BsFillSquareFill />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
