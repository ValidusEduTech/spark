import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-spark-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="p-2 bg-spark-gold rounded-sm group-hover:rotate-12 transition-transform">
            <Sparkles className="text-spark-navy w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-widest text-white">SPARK</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-semibold tracking-premium text-gray-300 hover:text-spark-gold transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
          <button 
             onClick={() => handleNavClick('#action')}
             className="px-6 py-2 border border-spark-gold text-spark-gold font-bold text-xs uppercase tracking-widest hover:bg-spark-gold hover:text-spark-navy transition-all duration-300"
          >
            Enter The Lab
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-spark-gold" /> : <Menu className="text-spark-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-spark-navy border-t border-gray-800 p-6 flex flex-col gap-6 shadow-2xl">
           {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-lg font-medium text-white hover:text-spark-gold"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;