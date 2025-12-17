import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#111b2e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-spark-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Voices from the Lab</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-white">The Aftermath</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-spark-navy p-8 rounded-xl border border-white/5 relative group hover:border-spark-gold/30 transition-all duration-300"
            >
              <Quote className="text-spark-gold/20 w-10 h-10 mb-6 group-hover:text-spark-gold transition-colors" />
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-spark-gold to-spark-goldDim flex items-center justify-center text-spark-navy font-bold">
                    {t.author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">{t.author}</h4>
                    <p className="text-spark-gold text-xs uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;