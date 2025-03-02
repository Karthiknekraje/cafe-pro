import React from 'react';
import Layout from '../components/Layout';

function Gallery() {
  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">OUR GALLERY</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Gaming Setup" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">Premium Gaming Stations</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Gaming Tournament" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">Esports Tournaments</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Gaming Lounge" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">Comfortable Lounge Area</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="VR Gaming" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">VR Gaming Experience</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Gaming Cafe" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">Cafe & Refreshments</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Console Gaming" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-bold">Console Gaming Area</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Gallery;