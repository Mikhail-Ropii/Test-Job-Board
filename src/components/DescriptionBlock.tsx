import { BsFillSquareFill } from "react-icons/bs";

interface DescriptionBlockProps {
  description: string;
}

export const DescriptionBlock = ({ description }: DescriptionBlockProps) => {
  const trimmedString = description.split("\n");
  const compensation = trimmedString[7].split(".");
  compensation.splice(-1, 1);

  return (
    <div className="mb-8">
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
      <p className="font-novaRegular text-m text-mobileMain">
        Our physicians enjoy a wide range of benefits, including:
      </p>
      <ul>
        {compensation.map((item, idx) => (
          <li
            key={idx}
            className="flex mb-5 last:mb-0 marker:text-bgButton text-opacity-60"
          >
            <div className="flex items-center mr-3">
              <BsFillSquareFill
                size={10}
                color={"rgba(56, 69, 100, 0.632594)"}
              />
            </div>
            <span className=" list-decimal inline-block font-novaRegular text-m text-mobileMain">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
