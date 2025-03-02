// import React from 'react';
// import Layout from '../components/Layout';
// import { Calendar, Trophy, Users, Clock } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function Events() {
//   return (
//     <Layout>
//       <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">EVENTS & TOURNAMENTS</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
//             <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
//               Join our community events and competitive tournaments with amazing prizes and unforgettable experiences.
//             </p>
//           </div>
          
//           {/* Featured Event */}
//           <div className="relative rounded-xl overflow-hidden mb-16">
//             <img 
//               src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
//               alt="Gaming Tournament" 
//               className="w-full h-96 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
//               <div className="p-8 w-full">
//                 <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white text-sm font-bold mb-4">
//                   FEATURED EVENT
//                 </div>
//                 <h3 className="text-3xl font-bold text-white mb-2">Neon Championship Series</h3>
//                 <p className="text-xl text-cyan-400 mb-4">$5,000 Prize Pool • June 15-16, 2025</p>
//                 <div className="flex flex-wrap gap-4 mb-6">
//                   <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
//                     <Trophy className="h-4 w-4 text-purple-500" />
//                     <span className="text-gray-300 text-sm">Competitive</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
//                     <Users className="h-4 w-4 text-purple-500" />
//                     <span className="text-gray-300 text-sm">Teams of 5</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
//                     <Clock className="h-4 w-4 text-purple-500" />
//                     <span className="text-gray-300 text-sm">48 Hours</span>
//                   </div>
//                 </div>
//                 <Link to="/events" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 inline-block">
//                   Register Now
//                 </Link>
//               </div>
//             </div>
//           </div>
          
//           {/* Upcoming Events */}
//           <h3 className="text-2xl font-bold mb-8 text-white">Upcoming Events</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
//               <div className="flex items-center gap-3 mb-4">
//                 <Calendar className="h-6 w-6 text-purple-500" />
//                 <span className="text-cyan-400 font-bold">May 28, 2025</span>
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">Fortnite Friday Night</h4>
//               <p className="text-gray-300 mb-4">Weekly casual tournament with prizes for top performers.</p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">Battle Royale</span>
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">Solo</span>
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">$200 Prize</span>
//               </div>
//               <Link to="/events" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold flex items-center gap-2">
//                 Learn More
//                 <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
//               <div className="flex items-center gap-3 mb-4">
//                 <Calendar className="h-6 w-6 text-purple-500" />
//                 <span className="text-cyan-400 font-bold">June 5, 2025</span>
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">League of Legends Tournament</h4>
//               <p className="text-gray-300 mb-4">Monthly 5v5 tournament with coaching from pro players.</p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">MOBA</span>
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">Team</span>
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">$500 Prize</span>
//               </div>
//               <Link to="/events" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold flex items-center gap-2">
//                 Learn More
//                 <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
//               <div className="flex items-center gap-3 mb-4">
//                 <Calendar className="h-6 w-6 text-purple-500" />
//                 <span className="text-cyan-400 font-bold">June 12, 2025</span>
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">VR Experience Night</h4>
//               <p className="text-gray-300 mb-4">Special event featuring the latest VR games and experiences.</p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">Virtual Reality</span>
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">All Ages</span>
//                 <span className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">Free Entry</span>
//               </div>
//               <Link to="/events" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold flex items-center gap-2">
//                 Learn More
//                 <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
          
//           {/* Private Events */}
//           <div className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-xl border border-purple-500/30">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-white">Host Your Private Event</h3>
//                 <p className="text-gray-300 mb-6">
//                   Looking for a unique venue for your next birthday party, corporate event, or team building activity?
//                   Book our gaming cafe for a private event tailored to your needs.
//                 </p>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-center gap-2">
//                     <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-300">Exclusive access to the entire facility</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-300">Custom tournament organization</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-300">Catering options available</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-300">Professional event coordination</span>
//                   </li>
//                 </ul>
//                 <Link to="/events" className="px-8 py
//   )
// }
import React from 'react';
import Layout from '../components/Layout';
import { Calendar, Trophy, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              EVENTS & TOURNAMENTS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Join our community events and competitive tournaments with amazing prizes and unforgettable experiences.
            </p>
          </div>

          {/* Featured Event */}
          <div className="relative rounded-xl overflow-hidden mb-16">
            <img 
              src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
              alt="Gaming Tournament" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
              <div className="p-8 w-full">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white text-sm font-bold mb-4">
                  FEATURED EVENT
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Neon Championship Series</h3>
                <p className="text-xl text-cyan-400 mb-4">$5,000 Prize Pool • June 15-16, 2025</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-300 text-sm">Competitive</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-300 text-sm">Teams of 5</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-300 text-sm">48 Hours</span>
                  </div>
                </div>
                <Link 
                  to="/events" 
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 inline-block"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <h3 className="text-2xl font-bold mb-8 text-white">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                date: 'May 28, 2025',
                title: 'Fortnite Friday Night',
                description: 'Weekly casual tournament with prizes for top performers.',
                tags: ['Battle Royale', 'Solo', '$200 Prize']
              },
              {
                date: 'June 5, 2025',
                title: 'League of Legends Tournament',
                description: 'Monthly 5v5 tournament with coaching from pro players.',
                tags: ['MOBA', 'Team', '$500 Prize']
              },
              {
                date: 'June 12, 2025',
                title: 'VR Experience Night',
                description: 'Special event featuring the latest VR games and experiences.',
                tags: ['Virtual Reality', 'All Ages', 'Free Entry']
              }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-purple-500" />
                  <span className="text-cyan-400 font-bold">{event.date}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-purple-900/50 text-xs px-2 py-1 rounded text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/events" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold flex items-center gap-2">
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Private Events */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">Host Your Private Event</h3>
            <p className="text-gray-300 mb-6">
              Looking for a unique venue for your next birthday party, corporate event, or team-building activity?
              Book our gaming cafe for a private event tailored to your needs.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Exclusive access to the entire facility',
                'Custom tournament organization',
                'Catering options available',
                'Professional event coordination'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link 
              to="/events" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Events;
