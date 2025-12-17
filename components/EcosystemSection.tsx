import React from 'react';
import { Users, Mic } from 'lucide-react';

const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-white text-spark-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-spark-navy text-sm font-bold tracking-[0.2em] uppercase mb-4">The Ecosystem</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Stop observing.<br/>Start impacting.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We build the high-pressure environments where talent collides. Whether you want to enter the lab as a participant or shape the experiment as a lead, this is your entry point.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gray-50 border border-gray-100 hover:border-spark-navy/20 hover:shadow-lg transition-all duration-300 group">
              <Users className="w-8 h-8 text-spark-goldDim mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-xl mb-2">Join the Collision</h4>
              <p className="text-sm text-gray-500 mb-4">Apply for the next cohort. Strictly vetted for diverse perspectives.</p>
              <a href="#action" className="text-xs font-bold uppercase tracking-widest text-spark-navy underline decoration-spark-gold/50 hover:decoration-spark-gold">Apply Now</a>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-100 hover:border-spark-navy/20 hover:shadow-lg transition-all duration-300 group">
              <Mic className="w-8 h-8 text-spark-goldDim mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-xl mb-2">Lead a Session</h4>
              <p className="text-sm text-gray-500 mb-4">Have a methodology to share? Facilitate a lab session.</p>
              <a href="#action" className="text-xs font-bold uppercase tracking-widest text-spark-navy underline decoration-spark-gold/50 hover:decoration-spark-gold">Propose Topic</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;