import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { 
    name: 'Services', 
    href: '#services',
    dropdown: [
      { name: 'Interior Painting', href: '#services' },
      { name: 'Exterior Painting', href: '#services' },
      { name: 'Commercial Painting', href: '#services' },
      { name: 'Cleaning & Sealing', href: '#services' },
    ]
  },
  { name: 'Gallery', href: '#gallery' },
  { 
    name: 'Service Areas', 
    href: '#',
    dropdown: [
      { name: 'Fort Myers', href: '#' },
      { name: 'Cape Coral', href: '#' },
      { name: 'Naples', href: '#' },
      { name: 'Bonita Springs', href: '#' },
      { name: 'Estero', href: '#' },
    ]
  },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-emerald-800 font-black text-lg">SP</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-amber-400 text-xs tracking-[0.2em] font-semibold">★ SERGEANT ★</span>
                <p className="text-white font-black text-xl tracking-wide -mt-1">PAINTERS</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="px-4 py-2 text-white/90 hover:text-amber-400 font-medium text-sm tracking-wide transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[200px]"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 text-sm transition-colors"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 rounded-full">
              GET FREE QUOTE
            </Button>
            <a 
              href="tel:+18774475160"
              className="flex items-center gap-2 px-4 py-2 border-2 border-amber-400 text-amber-400 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all font-semibold"
            >
              <Phone className="w-4 h-4" />
              (877) 447-5160
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-white hover:text-amber-400 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-full">
                  GET FREE QUOTE
                </Button>
                <a 
                  href="tel:+18774475160"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-amber-400 text-amber-400 rounded-full font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  (877) 447-5160
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}