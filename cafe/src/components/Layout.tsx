import React, { ReactNode } from 'react';
import { Gamepad2, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">NEON GAMING</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-purple-400 hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/games" className="text-purple-400 hover:text-cyan-400 transition-colors">Games</Link>
            <Link to="/cafe" className="text-purple-400 hover:text-cyan-400 transition-colors">Café</Link>
            <Link to="/events" className="text-purple-400 hover:text-cyan-400 transition-colors">Events</Link>
          </nav>
          <button className="md:hidden text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="h-8 w-8 text-purple-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">NEON GAMING</span>
              </div>
              <p className="text-gray-400 mb-6">
                The ultimate gaming experience with high-end equipment and a vibrant community.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/games" className="text-gray-400 hover:text-cyan-400 transition-colors">Games</Link></li>
                <li><Link to="/cafe" className="text-gray-400 hover:text-cyan-400 transition-colors">Café</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-cyan-400 transition-colors">Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">PC Gaming</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Console Gaming</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">VR Experience</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Tournaments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Private Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-black/50 border border-purple-500/30 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors w-full"
                />
                <button className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-r-lg px-4 text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-900/30 mt-12 pt-6 text-center text-gray-500">
            <p>&copy; 2025 Neon Gaming Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;