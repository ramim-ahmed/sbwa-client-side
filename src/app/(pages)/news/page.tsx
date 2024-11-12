import React from 'react';

import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

import { newsData } from '@/constant';
import NewsCard from './components/NewsCard';
import Wrapper from '@/components/wrapper/Wrapper';


const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Wrapper>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Scottish Bangladesh Welfare Association
          </h1>
          <div className="flex items-center justify-center gap-2 text-red-600 mb-8">
            <div className="h-px w-12 bg-red-600"></div>
            <span className="text-sm uppercase tracking-wider">Latest News</span>
            <div className="h-px w-12 bg-red-600"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-gray-600">Annual Events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-gray-600">Scottish Locations</p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default NewsPage;