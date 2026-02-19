import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const galleryImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
];

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-widest text-sm">
            SEE WHY OUR CUSTOMERS LOVE US
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900">
            SEE OUR WORK
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#gallery">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full text-lg">
              SEE ALL PHOTOS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}