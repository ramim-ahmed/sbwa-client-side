import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { FaTree } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

const ActivitySection = () => {
  return (
    <div className="py-16">
      <Wrapper>
        <div className="mx-2 md:mx-0">
          <h1 className="font-bold text-3xl border-b-2 border-gray-300 pb-2">
            Activities and Concerns
          </h1>
          <p className="pt-2">In Scotland and Bangladesh</p>
        </div>
        <div className="pt-6 grid md:grid-cols-3 gap-3 mx-2 md:mx-0">
          <div className="md:my-0 my-4">
            <div className="bg-orange-500 text-2xl text-white hover:text-gray-600 p-4 mb-3 w-14">
              <FaTree />
            </div>
            <h2 className="my-3 text-2xl font-bold">BEAUTIFICATION</h2>
            <ol className="list-disc ms-4">
              <li className="pb-2 border-dashed border-b">
                Fort bunker hill park
              </li>
              <li className="pb-2 border-dashed border-b">
                Metropolitan branch trail
              </li>
              <li className="pb-2 border-dashed border-b">
                Neighborhood clean-ups
              </li>
              <li className="pb-2 border-dashed border-b">
                Historic preservation
              </li>
            </ol>
          </div>

          <div className="md:my-0 my-4">
            <div className="bg-orange-500 text-2xl text-white hover:text-gray-600 p-4 mb-3 w-14">
              <FaBalanceScale />
            </div>
            <h2 className="my-3 text-2xl font-bold">BEAUTIFICATION</h2>
            <ol className="list-disc ms-4">
              <li className="pb-2 border-dashed border-b">
                Fort bunker hill park
              </li>
              <li className="pb-2 border-dashed border-b">
                Metropolitan branch trail
              </li>
              <li className="pb-2 border-dashed border-b">
                Neighborhood clean-ups
              </li>
              <li className="pb-2 border-dashed border-b">
                Historic preservation
              </li>
            </ol>
          </div>

          <div className="md:my-0 my-4">
            <div className="bg-orange-500 text-2xl text-white hover:text-gray-600 p-4 mb-3 w-14">
              <FaCalendarCheck />
            </div>
            <h2 className="my-3 text-2xl font-bold">BEAUTIFICATION</h2>
            <ol className="list-disc ms-4">
              <li className="pb-2 border-dashed border-b">
                Fort bunker hill park
              </li>
              <li className="pb-2 border-dashed border-b">
                Metropolitan branch trail
              </li>
              <li className="pb-2 border-dashed border-b">
                Neighborhood clean-ups
              </li>
              <li className="pb-2 border-dashed border-b">
                Historic preservation
              </li>
            </ol>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ActivitySection;
