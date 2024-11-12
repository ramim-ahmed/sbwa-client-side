
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users, Calendar, Landmark, Phone
} from 'lucide-react';
import { features } from '@/constant';
import { IFeature } from '@/types';
import Wrapper from '@/components/wrapper/Wrapper';




const FeatureCard: React.FC<{ feature: IFeature }> = ({ feature }) => (
  <Card className="group hover:shadow-lg transition-all duration-300">
    <CardHeader>
      <div className="mb-4 rounded-full w-16 h-16 bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
        {feature.icon}
      </div>
      <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
        {feature.title}
      </CardTitle>
      <CardDescription>{feature.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {feature.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <Wrapper>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Community Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting and enriching the Bengali-Scottish community through comprehensive services and programs
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Users />, label: "Community Members", value: "1000+" },
            { icon: <Calendar />, label: "Annual Events", value: "50+" },
            { icon: <Landmark />, label: "Service Centers", value: "5" },
            { icon: <Phone />, label: "Help Requests", value: "200+" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Tabbed Features Section */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="flex justify-center">
            <TabsTrigger value="all">All Services</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="welfare">Welfare</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </TabsContent>

          {['community', 'cultural', 'welfare', 'education'].map(category => (
            <TabsContent
              key={category}
              value={category}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features
                .filter(feature => feature.category === category)
                .map(feature => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Need Support?</h2>
          <p className="text-gray-600 mb-6">
            We're here to help you. Contact us to learn more about our services and how we can support you.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              View Programs
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturesPage;