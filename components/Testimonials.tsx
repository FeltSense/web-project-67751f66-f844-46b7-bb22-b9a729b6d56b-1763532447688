'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Frequent Shopper',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'RetailHub has completely changed how I discover products. The trending section helped me find items I never knew I needed!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'The rating system is incredibly accurate. I trust the community reviews more than traditional retail sites now.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fashion Blogger',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'As an influencer, RetailHub helps me stay on top of trends and share authentic recommendations with my followers.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'The social discovery feature connected me with customers I would have never reached. Game-changer for my business.',
    rating: 5,
  },
  {
    name: 'Jessica Park',
    role: 'Home Decor Enthusiast',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    quote: 'I love how easy it is to find trending home items. The app is intuitive and the community is so helpful!',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Fitness Coach',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    quote: 'Perfect for finding the best fitness gear. The verified reviews give me confidence in every purchase.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by Millions
            <span className="block text-blue-600">of Shoppers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied users who have transformed their shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-50"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}