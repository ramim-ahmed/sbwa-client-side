import React from "react";
import Wrapper from "../wrapper/Wrapper";

const EngageSection = () => {
  return (
    <div className="engage-wrapper">
      <Wrapper>
        <div className="md:flex justify-between pb-36 pt-44 items-center mx-2 md:mx-0">
          <div className="text-white">
            <h2 className="text-4xl font-bold py-3">Engage your community</h2>
            <p className="text-2xl font-bold">
              Connect to news, events and information you care about.
            </p>
          </div>
          <div>
            <button className="text-white bg-orange-400 text-sm font-bold p-4 md:mt-0 mt-4">
              GET INVOLVED
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EngageSection;
