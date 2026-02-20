import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Star, Shield, MapPin, Clock, Award, Users, CheckCircle, ArrowRight, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import GallerySection from '@/components/home/GallerySection';
import ReviewsSection from '@/components/home/ReviewsSection';
import Footer from '@/components/home/Footer';
import Navigation from '@/components/home/Navigation';

export default function Home() {
  useEffect(() => {
    // Remove any existing scripts first
    const existingScripts = document.querySelectorAll('script[src*="leadconnectorhq.com"]');
    existingScripts.forEach(s => s.remove());

    // Add the script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '6998c13f2473549c509c8631');
    
    // Log when script loads
    script.onload = () => console.log('GHL widget script loaded');
    script.onerror = () => console.error('GHL widget script failed to load');
    
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src*="leadconnectorhq.com"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}