import Wrapper from "@/components/wrapper/Wrapper";
import React from "react";
import Events from "./components/Events";

const EventPage = () => {
  return <div>
    <Wrapper>
      <div className="py-16 px-4">
        <div>
          <h1 className="text-3xl font-medium">Events</h1>
        </div>
        <div className="mt-8">
          <Events />
        </div>
      </div>
    </Wrapper>
  </div>;
};

export default EventPage;
