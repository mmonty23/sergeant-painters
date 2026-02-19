import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Pressure Washing',
  'Commercial Services',
  'Surface Cleaning',
  'Deck & Fence Painting',
];

const serviceAreas = [
  'Fort Myers',
  'Cape Coral',
  'Iona',
  'Fort Myers Beach',
  'Sanibel',
  'Captiva',
  'Arborwood',
  'Corkscrew',
  'Estero',
  'Bonita Springs',
  'Bonita Beach',
  'Barefoot Beach',
  'Miromar Lakes',
  'Naples',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900" id="contact">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997137b3b52a1df864f0b6d/dc002af42_image.png"
                  alt="JUST-N-TIME Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-orange-400 text-sm tracking-[0.2em] font-bold">JUST-N-TIME</span>
                <p className="text-white font-black text-xl tracking-wide -mt-0.5">PAINT & WASH</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Professional painting and pressure washing services delivering quality results every time. Your trusted local experts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:+18139704390"
                className="flex items-start gap-3 text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(813) 970-4390</span>
              </a>
              <a 
                href="mailto:justntimewash@gmail.com"
                className="flex items-start gap-3 text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>justntimewash@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Tampa Bay Area</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 7:00 AM - 11:00 PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
                />
                <Button className="bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold px-4">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="text-white font-semibold w-full sm:w-auto text-center">Service Areas:</span>
            {serviceAreas.map((area, index) => (
              <span key={area} className="text-slate-400">
                {area}
                {index < serviceAreas.length - 1 && <span className="ml-3 sm:ml-4">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <p className="text-center md:text-left">© 2024 JUST-N-TIME Paint & Pressure Wash. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}