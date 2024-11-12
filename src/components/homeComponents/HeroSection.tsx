import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Header from "../Header";
import { FaRegLightbulb } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import MobileHeader from "../MobileHeader";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <Wrapper>
        <div className="grid grid-cols-2 py-10 md:py-36 text-center lg:text-left ">
          <div className="col-span-2 md:col-span-1">
            <div className="my-2 mx-2 md:mx-0">
              <h2 className="text-white lg:text-5xl md:text-4xl text-3xl my-6">
                Learn about activities and concerns in the Brookton neighborhood
              </h2>
              <p className="my-6 text-white text-xl leading-tight">
                The purpose of the Brookton Civic Association is to promote the
                civic welfare (to include, but not be limited to, social,
                economic, environmental, public safety, quality of life, and
                heritage issues/concerns).
              </p>
            </div>

            <div className="flex items-center gap-3 my-16 justify-center md:justify-start">
              <button className="flex items-center text-white gap-1 bg-sky-600 text-sm font-bold p-4">
                <FaInfoCircle />
                LEARN MORE
              </button>
              <button className="flex items-center text-white gap-1 bg-orange-400 text-sm font-bold p-4">
                <FaRegLightbulb /> GET INVOLVED
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
