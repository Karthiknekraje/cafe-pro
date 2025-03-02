import React from 'react';
import Layout from '../components/Layout';
import { Coffee, Utensils, Wifi, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

function Cafe() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">OUR CAFÉ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Refuel and recharge with our selection of gamer-friendly food and beverages while you play.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative rounded-xl overflow-hidden mb-16 h-96">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
              alt="Gaming Cafe" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Neon Café</h3>
                <p className="text-xl text-cyan-400">Where gamers refuel</p>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 text-center">
              <Coffee className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Coffee</h3>
              <p className="text-gray-300">Specialty coffee to keep you energized during long gaming sessions.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 text-center">
              <Utensils className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Gamer Menu</h3>
              <p className="text-gray-300">Quick, delicious meals and snacks designed for one-handed eating while gaming.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 text-center">
              <Wifi className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Free Wi-Fi</h3>
              <p className="text-gray-300">High-speed internet access for all café customers.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 text-center">
              <CreditCard className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Tab System</h3>
              <p className="text-gray-300">Order from your gaming station and pay when you're done.</p>
            </div>
          </div>
          
          {/* Menu Preview */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Menu Highlights</h3>
              <div className="space-y-6">
                <div className="border-b border-purple-500/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-cyan-400">Energy Drinks</h4>
                    <span className="text-purple-400">$4 - $6</span>
                  </div>
                  <p className="text-gray-300">Monster, Red Bull, G Fuel, and our signature Neon Boost energy drink.</p>
                </div>
                
                <div className="border-b border-purple-500/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-cyan-400">Gaming Combos</h4>
                    <span className="text-purple-400">$12 - $18</span>
                  </div>
                  <p className="text-gray-300">Burger or pizza with fries and a drink, designed for easy eating while gaming.</p>
                </div>
                
                <div className="border-b border-purple-500/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-cyan-400">Specialty Coffee</h4>
                    <span className="text-purple-400">$3 - $7</span>
                  </div>
                  <p className="text-gray-300">Espresso, lattes, cold brew, and our signature Gamer's Mocha with extra caffeine.</p>
                </div>
                
                <div className="border-b border-purple-500/30 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-cyan-400">Snack Platters</h4>
                    <span className="text-purple-400">$8 - $15</span>
                  </div>
                  <p className="text-gray-300">Shareable platters with nachos, wings, mozzarella sticks, and more.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/events" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 inline-block">
                  View Full Menu
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" 
                alt="Cafe Food" 
                className="rounded-xl w-full h-auto relative z-10 border border-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cafe;