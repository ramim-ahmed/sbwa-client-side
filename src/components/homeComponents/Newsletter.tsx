import React from "react";
import Wrapper from "../wrapper/Wrapper";

const Newsletter = () => {
  return (
    <div className="bg-gray-300 py-10">
      <Wrapper>
        <div className="md:flex text-center lg:text-left justify-between items-center mx-2 md:mx-0">
          <div>
            <h2 className="text-3xl">
              Sign up for our newsletter & stay updated!
            </h2>
            <p>Don&apos;t worry! We don&apos;t spam.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="space-y-2 flex lg:flex-row flex-col items-center">
              <input
                placeholder="Your email address..."
                type="text"
                className="py-3 px-2 w-full"
              />
              <button className="text-white px-10 py-3 bg-orange-400 w-full">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Newsletter;
