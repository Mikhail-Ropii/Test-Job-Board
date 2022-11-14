interface EmployTypeProps {
  employTypeList: string[];
}

export const EmployType = ({ employTypeList }: EmployTypeProps) => {
  return (
    <ul className="flex">
      {employTypeList.map((item) => (
        <li
          key={item}
          className=" bg-[rgba(161, 177, 219, 0.317343);] rounded py-4 px-3"
        >
          <span className=" text-[#55699E] font-novaBold text-additional">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
