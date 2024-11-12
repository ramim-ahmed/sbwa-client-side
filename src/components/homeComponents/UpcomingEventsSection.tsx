import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";

const UpcomingEventsSection = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-3 gap-4 my-20">
        <div className="col-span-2">
          <div className="mb-3 border-b  ps-2">
            <h2 className="text-3xl py-2 font-bold text-gray-600">
              Upcoming Events
            </h2>
          </div>
          <div className="mb-6">
            <div>
              <Image
                alt=""
                src="/images/event-picnic.jpg"
                width={800}
                height={100}
              />
            </div>
            <div className="flex items-center bg-white mb-3">
              <div className="bg-orange-400 text-white py-12 px-8">
                <span>August 31, 2026</span>
              </div>
              <div className="px-6 ">
                <h3 className="text-gray-700 text-2xl font-bold">
                  Brookton Picnic & BBQ
                </h3>
                <p className="text-gray-500">
                  Brooktondale Rd, Brooktondale, NY 14817, USA
                </p>
                <p className="text-gray-500">
                  August 31, 2026 – to – August 1, 2026
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div>
              <Image
                alt=""
                src="/images/event-run.jpg"
                width={800}
                height={100}
              />
            </div>
            <div className="flex items-center bg-white mb-3">
              <div className="bg-orange-400 text-white py-12 px-8">
                <span>August 31, 2026</span>
              </div>
              <div className="px-6 ">
                <h3 className="text-gray-700 text-2xl font-bold">
                  Brookton Picnic & BBQ
                </h3>
                <p className="text-gray-500">
                  Brooktondale Rd, Brooktondale, NY 14817, USA
                </p>
                <p className="text-gray-500">
                  August 31, 2026 – to – August 1, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 border-b  ps-2">
            <h2 className="text-3xl py-2 font-bold text-gray-600">Feeds</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UpcomingEventsSection;
