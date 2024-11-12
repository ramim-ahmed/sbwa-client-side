import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { IFeature } from '@/types';

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


export default FeatureCard