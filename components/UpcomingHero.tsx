import React from 'react';
import { motion } from 'framer-motion';

const UpcomingHero: React.FC = () => {
  return (
    <section id="upcoming" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/collision/1920/1080')] bg-cover bg-center">
        <div className="absolute inset-0 bg-spark-navy/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-spark-navy via-transparent to-spark-navy/50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <div className="inline-block border border-spark-gold/30 bg-spark-navy/50 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
                <span className="text-spark-gold tracking-[0.3em] text-xs font-bold uppercase animate-pulse">
                    Upcoming Event • Limited Capacity
                </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 leading-none">
              COLLISION <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spark-gold to-white">LAB</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 font-light mb-12 tracking-wide max-w-2xl mx-auto">
              Design <span className="text-spark-gold px-2">+</span> Business
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="#action"
                className="group relative px-8 py-4 bg-spark-gold text-spark-navy font-bold tracking-widest text-sm uppercase overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">Apply For Access</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 mix-blend-difference" />
              </a>
              
              <span className="text-gray-400 text-sm tracking-widest">
                Q4 2024 • LOCATION [REDACTED]
              </span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingHero;