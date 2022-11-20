interface EmployTypeProps {
  employTypeList: string[];
}

export const EmployType = ({ employTypeList }: EmployTypeProps) => {
  return (
    <ul className="flex mb-[22px]">
      {employTypeList.map((item) => (
        <li
          key={item}
          className=" mr-2 last:mr-0 border border-opacity-10 border-[#000000] rounded-lg bg-[#a1b1db] bg-opacity-30  py-4 px-3"
        >
          <span className="text-[#55699E] font-novaBold text-additional">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
