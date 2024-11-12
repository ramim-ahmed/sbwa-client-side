import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <Wrapper>
      <div className="pt-36 pb-10 gap-4 grid grid-cols-8">
        <div className="lg:col-span-2 col-span-8">
          <ul className="border bg-gray-100  font-bold">
            <li className="py-2 px-4 border border-gray-200">GET INVOLVED</li>
            <li className="py-2 px-4 border border-gray-200">NEWS</li>
            <li className="py-2 px-4 border border-gray-200">ABOUT</li>
            <li className="py-2 px-4 border border-gray-200">EVENTS</li>
            <li className="py-2 px-4 border border-gray-200">GALLERY</li>
            <li className="py-2 px-4 border border-gray-200">CONTACT US</li>
          </ul>
          <div>
            <div className="p-1 my-3">
              <Image
                width={500}
                height={500}
                alt=""
                src="/images/community-sidebar.jpg"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-8">
          <h3 className="font-bold px-2 text-3xl border-b-2 border-gray-300 pb-2">
            Community Info
          </h3>
          <p className="pt-2 px-2">& Recent Happenings</p>
          <div className="mt-3 ms-3 p-3 bg-gray-100">
            <div className="flex lg:flex-row flex-col items-center gap-3">
              <div>
                <Image
                  width={600}
                  height={600}
                  alt=""
                  src="/images/community.jpg"
                />
              </div>
              <div>
                <h2 className="font-bold text-4xl mb-3">
                  Summer restrictions in our neighborhood
                </h2>
                <p>
                  <span>
                    <b>Feb 21, 17 </b>
                  </span>
                  By Order of the Fire Marshal: The following restrictions shall
                  apply to all open fires and the use of fireworks. The
                  restrictions will be in effect through July 31, 2016, or
                  until...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommunitySection;
