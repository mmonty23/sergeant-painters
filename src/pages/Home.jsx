import React, { useState } from 'react';
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