import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Network, Zap, FlaskConical } from 'lucide-react';
import { TIMELINE_ITEMS } from '../constants';
import { TimelineItem } from '../types';

const icons: Record<string, any> = {
  network: Network,
  spark: Zap,
  lab: FlaskConical
};

const NarrativeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="narrative" ref={containerRef} className="relative py-32 bg-spark-navy overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-spark-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-spark-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-8">
            Your Spark, Your Journey
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            We don't do "Networking".<br />
            We engineer <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-spark-gold to-white">collisions</span>.
          </h3>
        </motion.div>

        {/* Journey Path Container */}
        <div className="relative">
          {/* Central Line Base */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />
          
          {/* Central Line Active Progress */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-spark-gold via-spark-goldDim to-transparent md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_20px_rgba(249,217,120,0.4)]" 
          />

          <div className="space-y-24 md:space-y-32">
            {TIMELINE_ITEMS.map((item, index) => {
              const Icon = icons[item.icon];
              const isEven = index % 2 === 0;

              return (
                <TimelineCard 
                  key={item.id} 
                  item={item} 
                  Icon={Icon} 
                  isEven={isEven} 
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  Icon: any;
  isEven: boolean;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, Icon, isEven, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Node on the Line */}
      {/* Mobile: Node is left aligned. Desktop: Node is centered. */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 mt-6 md:mt-0">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-spark-navy border-4 border-spark-gold shadow-[0_0_30px_rgba(249,217,120,0.2)] flex items-center justify-center relative group">
           <div className="absolute inset-0 bg-spark-gold/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <Icon className="text-spark-gold w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
        <div className="relative group p-6 md:p-8 rounded-xl bg-spark-navy/50 md:bg-transparent md:backdrop-blur-none border border-white/5 md:border-none backdrop-blur-sm transition-all duration-300 hover:bg-spark-navy/80 hover:border-spark-gold/20">
          
          {/* Background Number */}
          <h4 className={`text-6xl md:text-8xl font-black text-white/5 absolute -top-4 md:-top-10 select-none pointer-events-none transition-colors duration-500 group-hover:text-white/10 ${isEven ? 'right-4 md:right-0' : 'left-4 md:left-0'}`}>
            0{index + 1}
          </h4>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 group-hover:text-spark-gold transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed relative z-10 font-light">
            {item.description}
          </p>
        </div>
      </div>
      
      {/* Empty Spacer Side for Desktop layout balance */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export default NarrativeSection;