import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, X, Quote } from 'lucide-react';
import { PAST_EVENTS } from '../constants';

const EvidenceSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  const selectedEvent = PAST_EVENTS.find(e => e.id === selectedId);

  return (
    <section id="evidence" className="py-24 bg-[#152238] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-spark-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">The Evidence</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Evolution of Impact</h3>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button onClick={scrollLeft} className="p-3 rounded-full border border-gray-600 hover:border-spark-gold text-white hover:text-spark-gold transition-all">
            <ArrowRight className="rotate-180 w-5 h-5" />
          </button>
          <button onClick={scrollRight} className="p-3 rounded-full border border-gray-600 hover:border-spark-gold text-white hover:text-spark-gold transition-all">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards List */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory no-scrollbar"
      >
        {PAST_EVENTS.map((event) => (
          <motion.div 
            layoutId={`card-${event.id}`}
            key={event.id}
            onClick={() => setSelectedId(event.id)}
            className="flex-none w-[85vw] md:w-[450px] snap-center cursor-pointer group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-spark-gold/50 transition-colors"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
               <motion.div layoutId={`image-container-${event.id}`} className="w-full h-full">
                  <div className="absolute inset-0 bg-spark-navy/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img 
                    layoutId={`image-${event.id}`}
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
               </motion.div>
              <div className="absolute top-4 left-4 z-20 bg-spark-navy/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-spark-gold tracking-widest border border-spark-gold/20">
                {event.year}
              </div>
            </div>

            <div className="p-6 md:p-8 relative">
              <div className="flex items-center gap-2 text-gray-400 mb-2 text-xs uppercase tracking-wider">
                <MapPin className="w-3 h-3 text-spark-gold" />
                {event.location}
              </div>
              <motion.h4 layoutId={`title-${event.id}`} className="text-2xl font-bold text-white mb-3">{event.title}</motion.h4>
              <motion.p layoutId={`type-${event.id}`} className="text-spark-gold/90 font-medium italic font-serif text-lg truncate">
                "{event.collisionType}"
              </motion.p>
            </div>
            
            {/* Click Hint */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-spark-gold text-spark-navy p-2 rounded-full">
                    <ArrowRight size={16} />
                </div>
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder for "More" */}
        <div className="flex-none w-[200px] flex items-center justify-center snap-center">
            <div className="text-center">
                <p className="text-gray-500 mb-2">And 9 more...</p>
                <button className="text-spark-gold underline text-sm tracking-widest uppercase">View Archive</button>
            </div>
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-spark-navy/90 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-4xl bg-[#152238] rounded-2xl overflow-hidden shadow-2xl border border-spark-gold/20 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-spark-gold hover:text-spark-navy transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 relative h-64 md:h-auto shrink-0">
                 <motion.div layoutId={`image-container-${selectedId}`} className="w-full h-full">
                    <motion.img 
                      layoutId={`image-${selectedId}`}
                      src={selectedEvent.imageUrl} 
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                 </motion.div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#152238] to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                 <div className="mb-6 flex items-center gap-2 text-spark-gold tracking-widest text-xs font-bold uppercase">
                    <MapPin size={14} /> {selectedEvent.location} • {selectedEvent.year}
                 </div>
                 
                 <motion.h4 layoutId={`title-${selectedId}`} className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    {selectedEvent.title}
                 </motion.h4>

                 <div className="relative mb-8">
                    <Quote className="absolute -top-6 -left-4 text-spark-gold/10 w-16 h-16" />
                    <motion.p layoutId={`type-${selectedId}`} className="text-2xl md:text-3xl text-spark-gold font-serif italic leading-tight relative z-10">
                      "{selectedEvent.quote || selectedEvent.collisionType}"
                    </motion.p>
                 </div>
                 
                 <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {selectedEvent.fullDescription || "A pivotal moment where disciplines collided."}
                    </p>
                    <button className="mt-6 text-spark-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                        View Full Report <ArrowRight size={12} />
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EvidenceSection;