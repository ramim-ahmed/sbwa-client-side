import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function NewsCard({ news }: any) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="relative">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {news.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-white/90">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="h-48 rounded-t-lg w-full relative overflow-hidden">
                    <Image
                        src={news.image}
                        alt={news.title}
                        layout="fill"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <CardTitle className="text-xl mt-4 group-hover:text-red-600 transition-colors">
                    {news.title}
                </CardTitle>
                <CardDescription className="flex flex-col gap-2 mt-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {news.location}
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <Button variant="outline" className="group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
            </CardContent>
        </Card>
    );
};