interface BenefitsProps {
  benefits: string[];
}

export const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <ul className="flex mb-16 lg:mb-[87px]">
      {benefits.map((item) => (
        <li
          key={item}
          className="mr-2 last:mr-0 border border-[#FFCF00] rounded-lg bg-[#FFCF00] bg-opacity-10  py-4 px-3"
        >
          <span className=" text-[#988B49] font-novaBold text-additional">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
