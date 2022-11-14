import { AiOutlineStar } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

export const NavBlock = () => {
  return (
    <>
      <p>
        <BsBookmark className="hidden lg:block" />
        <AiOutlineStar className="lg:hidden" color="#70778B" />
        Save to my list
      </p>
      <p>
        <BsFillShareFill color="#70778B" />
        Share
      </p>
    </>
  );
};
