import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">PRICING PLANS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Choose the perfect plan for your gaming needs. All plans include access to our premium gaming stations and high-speed internet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 -rotate-45 transform translate-x-12 -translate-y-12 opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <h3 className="text-2xl font-bold mb-2 text-white">Hourly Pass</h3>
              <div className="text-3xl font-bold mb-6 text-cyan-400">$5<span className="text-lg text-gray-400">/hour</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Standard gaming station</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Access to all games</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Basic refreshments</span>
                </li>
              </ul>
              <Link to="/contact" className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105">
                Get Started
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border-2 border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all relative overflow-hidden group transform scale-105 z-10">
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-cyan-500 text-white text-xs font-bold py-1 px-4 rounded-full rotate-12">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Day Pass</h3>
              <div className="text-3xl font-bold mb-6 text-cyan-400">$25<span className="text-lg text-gray-400">/day</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Premium gaming station</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Access to all games</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Free snacks & drinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Priority seating</span>
                </li>
              </ul>
              <Link to="/contact" className="block w-full py-3 text-center bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Get Started
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 -rotate-45 transform translate-x-12 -translate-y-12 opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <h3 className="text-2xl font-bold mb-2 text-white">Monthly Pass</h3>
              <div className="text-3xl font-bold mb-6 text-cyan-400">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">VIP gaming station</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Unlimited access</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Free food & drinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Tournament entry</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Exclusive events</span>
                </li>
              </ul>
              <Link to="/contact" className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Pricing;