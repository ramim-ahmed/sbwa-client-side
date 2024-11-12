import Wrapper from "@/components/wrapper/Wrapper";
import React from "react";
import GalleryCard from "./components/GalleryCard";

const Gallery = () => {
  return <div className="bg-gray-50 py-16">
    <Wrapper>
      <div className="px-4">
        <div>
          <h1 className="text-3xl font-medium">Gallery</h1>
        </div>
        <div className="mt-10">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
            <GalleryCard title="Donation Camp" photo="/images/g_1.jpg" />
            <GalleryCard title="Best Welfare" photo="/images/g_2.jpg" />
            <GalleryCard title="Members Memories" photo="/images/g_3.jpg" />
            <GalleryCard title="Charity Welfare" photo="/images/charity.jpg" />
          </div>
        </div>
      </div>
    </Wrapper>
  </div>;
};

export default Gallery;
