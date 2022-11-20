import { AiOutlineStar } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

export const NavBlock = () => {
  return (
    <div className="mb-8 mt-6 flex lg:mb-0">
      <BsBookmark className="hidden mr-4 lg:block" />
      <AiOutlineStar className="mr-3 lg:hidden" color="#70778B" size={25} />
      <p className="mr-9 text-[#38415D] text-opacity-80 font-novaRegular text-s">
        Save to my list
      </p>
      <BsFillShareFill className="mr-3" color="#70778B" size={20} />
      <p className="text-[#38415D] text-opacity-80 font-novaRegular text-s">
        Share
      </p>
    </div>
  );
};
