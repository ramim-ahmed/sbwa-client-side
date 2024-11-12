"use client";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";
import CountUp from "react-countup";

const ReviewSection = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-3 pt-20 -mb-12 relative">
        <span
          style={{ fontSize: "300px" }}
          className="text-gray-200 absolute -mt-20"
        >
          ”
        </span>
        <div className="bg-white md:col-span-2 col-span-3 px-12 py-20">
          <p className="font-bold text-2xl leading-9 text-justify">
            Brookton is amazing. We can’t imagine raising our family anywhere
            else. We love the friends we’ve made over the years living here, and
            we look forward to many more memories in the years to come!
          </p>
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full my-6"
              alt=""
              src="/images/human.jpg"
              width={50}
              height={50}
            />
            <div>
              <h2 className="text-gray-600">John Doe</h2>
              <p className="text-gray-600">Happy Resident</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-3 bg-gray-400 text-center py-3 px-20 w-100">
          <div className="py-3">
            <span className="text-white text-6xl font-bold">
              <CountUp end={85} />%
            </span>
            <p className="text-white  leading-4">
              of residents has positive experience
            </p>
          </div>
          <div className="py-3">
            <span className="text-white text-6xl font-bold">
              <CountUp end={81} />%
            </span>
            <p className="text-white  leading-4">
              of residents had direct contact with community manager
            </p>
          </div>
          <div className="py-3">
            <span className="text-white text-6xl font-bold">
              <CountUp end={92} />%
            </span>
            <p className="text-white leading-4">
              of residents say their association’s rules protect property values
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReviewSection;
