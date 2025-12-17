import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spark-navy py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SPARK. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-spark-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-spark-gold transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-spark-gold transition-colors">Manifesto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;