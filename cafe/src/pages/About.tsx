import React from 'react';
import Layout from '../components/Layout';
import { Gamepad2, Coffee, Clock, Users } from 'lucide-react';

function About() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">ABOUT US</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-300">
                Welcome to Neon Gaming Cafe, where passion for gaming meets cutting-edge technology. 
                Established in 2023, we've created the ultimate gaming haven for casual players and esports enthusiasts alike.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Our state-of-the-art facility features top-tier gaming rigs, comfortable seating, and a vibrant atmosphere 
                that keeps our community coming back. Whether you're looking to compete in tournaments or just hang out with friends, 
                Neon Gaming Cafe is your destination.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="h-10 w-10 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-cyan-400">Premium Stations</h3>
                    <p className="text-gray-400">High-end gaming rigs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="h-10 w-10 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-cyan-400">Cafe & Snacks</h3>
                    <p className="text-gray-400">Refreshments available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-10 w-10 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-cyan-400">24/7 Access</h3>
                    <p className="text-gray-400">Game anytime</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-10 w-10 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-cyan-400">Community</h3>
                    <p className="text-gray-400">Events & tournaments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="Gaming Setup" 
                className="rounded-xl w-full h-auto relative z-10 border border-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;