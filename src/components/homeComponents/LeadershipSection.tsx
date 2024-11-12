import React from "react";
import Wrapper from "../wrapper/Wrapper";

const LeadershipSection = () => {
  return (
    <div className="leadership-wrapper">
      <Wrapper>
        <div className="flex items-center md:justify-between flex-wrap py-12 md:py-40 justify-center">
          <div className="text-left ">
            <h2 className="text-white max-w-96 text-4xl">
              Leadership Begins With Our Citizens Residential Membership
            </h2>
          </div>
          <div className="mt-12">
            <ul className="bg-white font-bold text-center border-r-4 border-sky-500 border-b-4 max-w-96">
              <li className="border-b px-12 py-4">GET INVOLVED</li>
              <li className="px-12 py-4 border-b">GIVING BACK TO BROOKTON</li>
              <li className="px-12 py-4 border-b">RESIDENTIAL MEMBERSHIP</li>
              <li className="px-12 py-4 border-b">CORPORATE MEMBERSHIP</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LeadershipSection;
