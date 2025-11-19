'use client';

import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for casual shoppers',
    features: [
      'Basic product ratings',
      'View trending items',
      'Follow up to 10 users',
      'Standard support',
      'Mobile app access',
    ],
    cta: 'Get Started',
    highlighted: false,
    stripeLink: null,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious shoppers and influencers',
    features: [
      'Unlimited ratings & reviews',
      'Advanced trending analytics',
      'Unlimited follows',
      'Priority support',
      'Ad-free experience',
      'Early access to new features',
      'Verified badge',
      'Custom profile themes',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    stripeLink: 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00',
  },
  {
    name: 'Business',
    price: 'Custom',
    description: 'For brands and retailers',
    features: [
      'Everything in Pro',
      'Business analytics dashboard',
      'Team collaboration tools',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    stripeLink: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your shopping needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center justify-center mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Sparkles className="h-4 w-4 mr-1" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mb-6 ${
                  plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check
                      className={`h-6 w-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                      }`}
                    />
                    <span
                      className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.stripeLink ? (
                <a
                  href={plan.stripeLink}
                  className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust RetailHub for their shopping needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-gray-400">BRAND</div>
              <div className="text-2xl font-bold text-gray-400">COMPANY</div>
              <div className="text-2xl font-bold text-gray-400">RETAIL</div>
              <div className="text-2xl font-bold text-gray-400">SHOP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}