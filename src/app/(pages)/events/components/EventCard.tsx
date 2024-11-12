import React, { useState } from 'react';

import { Card, CardHeader, CardTitle, CardContent, } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { IEvents } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Props = {
    event: IEvents
    upcoming: boolean
}
export default function EventCard({ event, upcoming }: Props) {
    return (
        <Card className='grid lg:grid-cols-2 grid-cols-1'>
            <div className=''>
                <Image src={event.image} alt='event_image' width={500} height={400} style={{ width: "100%" }} />
            </div>
            <div>
                <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-2 mb-2">
                        <Calendar size={18} />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <MapPin size={18} />
                        <span>{event.location}</span>
                    </div>
                    <p>{event.description}</p>
                    <div className='mt-4 flex items-center space-x-6'>
                        <Button variant="outline">Read More...</Button>
                        {upcoming && <Button className='bg-[#ed3927] text-white'>Register Now</Button>}
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}