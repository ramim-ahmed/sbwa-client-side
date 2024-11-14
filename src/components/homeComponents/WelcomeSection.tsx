import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div className="py-20">
      <Wrapper>
        <div className="px-4 grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <div className="text-white px-4 py-8 rounded bg-black text-center">
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
          <div className="mt-10 lg:mt-0">
            <div className="">
              <Image
                alt=""
                width={350}
                height={300}
                src="/images/welcome.png"
                style={{ width: "100%" }}
              />
            </div>

          </div>
        </div>
      </Wrapper >
    </div >
  );
};

export default WelcomeSection;
