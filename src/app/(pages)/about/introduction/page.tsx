import Wrapper from "@/components/wrapper/Wrapper";
import React from "react";

const AboutPage = () => {
    return (
        <div>
            <Wrapper>
                <div className="py-20 px-6">
                    <div>
                        <div>
                            <h1 className="text-4xl font-light uppercase">About us</h1>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-2xl font-light uppercase">Introduction</h1>
                            <div className="mt-3">
                                <p className="text-gray-700">4 The organization's purposes are: (4.1) To promote social cohesion and cross-cultural awareness between the Scottish Bangladeshi community and other communities across Scotland by organizing regular national and cultural events throughout the year. (4.2) To promote health and wellbeing of the Scottish Bangladeshi community across Scotland by organizing activities covering physical sports and mindfulness sessions. (4.3) To provide social education to the young generations (under 16) from the Scottish Bangladeshi community across Scotland by organizing Bengali Language classes, educational excursions and activities on contemporary environmental issues.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutPage;
