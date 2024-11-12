import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div className="py-20">
      <Wrapper>
        <div className="grid grid-cols-12 gap-10 justify-between">
          <div className="lg:col-span-5 col-span-12">
            <div className="text-white p-4 rounded bg-black text-center">
              <div>
                <h3 className="text-3xl font-bold mb-3">
                  Welcome to the Brookton Civic Association
                </h3>
                <h4 className="text-2xl font-bold">
                  where “Caring for Our Community” matters
                </h4>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 relative flex justify-center">
            <div className="flex">
              <div className="">
                <Image
                  alt=""
                  width={350}
                  height={300}
                  src="/images/welcome-1.jpg"
                />
              </div>
              <div className="">
                <Image
                  alt=""
                  width={400}
                  height={300}
                  src="/images/welcome-2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WelcomeSection;
