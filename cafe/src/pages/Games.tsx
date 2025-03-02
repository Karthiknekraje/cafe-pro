import React from 'react';
import Layout from '../components/Layout';
import { Gamepad2, Monitor, Joystick, Cpu } from 'lucide-react';

function Games() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">OUR GAMES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Explore our extensive library of the latest and greatest games across multiple platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Games Section */}
            <div className="col-span-full mb-12">
              <h3 className="text-2xl font-bold mb-8 text-white">Featured Games</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Cyberpunk Game" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white">Cyberpunk 2077</h4>
                    <p className="text-cyan-400">Action RPG</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Racing Game" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white">Forza Horizon 5</h4>
                    <p className="text-cyan-400">Racing</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="FPS Game" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white">Call of Duty: Warzone</h4>
                    <p className="text-cyan-400">FPS</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Game Categories */}
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-4 mb-6">
                <Gamepad2 className="h-10 w-10 text-purple-500" />
                <h3 className="text-2xl font-bold text-white">Console Games</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Experience the latest titles on PlayStation 5, Xbox Series X, and Nintendo Switch.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">PlayStation 5 Pro Stations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Xbox Series X Setups</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Nintendo Switch Stations</span>
                </li>
              </ul>
              <Link to="/events" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105">
                View Tournaments
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="h-10 w-10 text-purple-500" />
                <h3 className="text-2xl font-bold text-white">PC Gaming</h3>
              </div>
              <p className="text-gray-300 mb-6">
                High-end gaming PCs with RTX 4090 GPUs, 32GB RAM, and 240Hz monitors for the ultimate experience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Latest AAA Titles</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Competitive Esports Games</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Steam, Epic, Battle.net Access</span>
                </li>
              </ul>
              <Link to="/events" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105">
                Join PC Tournaments
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-4 mb-6">
                <Monitor className="h-10 w-10 text-purple-500" />
                <h3 className="text-2xl font-bold text-white">VR Gaming</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Immersive virtual reality experiences with the latest VR headsets and full-body tracking.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Meta Quest 3 Headsets</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Valve Index Full Kit</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Dedicated VR Rooms</span>
                </li>
              </ul>
              <Link to="/events" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105">
                Book VR Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Games;

// Add the missing import for Link
import { Link } from 'react-router-dom';