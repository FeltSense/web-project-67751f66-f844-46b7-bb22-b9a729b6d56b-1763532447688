'use client';

import { TrendingUp, Users, Star, Download, Share2, Award } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Rating & Voting System',
    description: 'Share your opinions and rate products with our intuitive 5-star rating system. Your voice matters in shaping what's popular.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Users,
    title: 'Social Discovery',
    description: 'Connect with like-minded shoppers, follow taste-makers, and discover products through your community's recommendations.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Trending Content',
    description: 'Stay ahead of the curve with real-time trending products, viral items, and what's hot in your favorite categories.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Share2,
    title: 'Social Sharing',
    description: 'Share your favorite finds across all social platforms. Build your influence and help others discover amazing products.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Download,
    title: 'Mobile Experience',
    description: 'Download our app for iOS and Android. Shop on the go with seamless sync across all your devices.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Award,
    title: 'Verified Reviews',
    description: 'Trust in authentic reviews from verified purchasers. Our AI-powered system ensures genuine feedback only.',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export default function Services() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block text-blue-600">Smart Shopping</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to discover, rate, and share the best products with a community of millions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}