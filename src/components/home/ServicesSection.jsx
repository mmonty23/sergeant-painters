import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Paintbrush, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: 'Interior Painting',
    description: 'Transform your indoor spaces with our professional interior painting services. We deliver flawless finishes that bring new life to your rooms.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
  },
  {
    icon: Paintbrush,
    title: 'Exterior Painting',
    description: 'Enhance your property\'s curb appeal with our expert exterior painting. Weather-resistant coatings that protect and beautify your home or business.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    icon: Sparkles,
    title: 'Pressure Washing',
    description: 'Professional pressure washing services to remove dirt, grime, and mildew. Restore your surfaces to like-new condition with our powerful cleaning.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Building2,
    title: 'Commercial Services',
    description: 'Complete painting and pressure washing solutions for businesses. We work efficiently to minimize disruption to your operations.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-widest text-sm">
            WHAT WE ARE BEST AT
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900">
            OUR SERVICES
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="mt-4 p-0 text-blue-700 hover:text-blue-800 font-semibold group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}