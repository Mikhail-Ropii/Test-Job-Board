interface BenefitsProps {
  benefits: string[];
}

export const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <ul>
      {benefits.map((item) => (
        <li
          key={item}
          className=" bg-[rgba(255, 207, 0, 0.15););] rounded py-4 px-3"
        >
          <span className=" text-[#988B49] font-novaBold text-additional">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
