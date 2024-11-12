"use client"

import EventCard from './EventCard';
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from '@/components/ui/tabs';
import { events, upcomingEvents } from '@/constant';

const Events = () => {

    return (
        <div>
            <Tabs defaultValue="recent" className="space-y-8">
                <TabsList className="">
                    <TabsTrigger value="recent">Recent Events</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                </TabsList>

                <TabsContent value="recent" className="grid grid-cols-1 gap-y-5">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} upcoming={false} />
                    ))}
                </TabsContent>

                <TabsContent value="upcoming" className="grid grid-cols-1 gap-y-5">
                    {upcomingEvents.map((event, index) => (
                        <EventCard key={index} event={event} upcoming={true} />
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Events;