import React from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

function Contact() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">CONTACT US</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions about our services or want to book a gaming session? 
                Reach out to us and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-cyan-400">Location</h4>
                    <p className="text-gray-300">123 Gaming Street, Cyber City, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-cyan-400">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-cyan-400">Email</h4>
                    <p className="text-gray-300">info@neongaming.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-bold text-cyan-400">Hours</h4>
                    <p className="text-gray-300">Open 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-black p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;