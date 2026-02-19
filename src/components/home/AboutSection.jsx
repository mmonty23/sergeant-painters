import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
                alt="Professional painter at work"
                className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            {/* Decorative elements - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-orange-400 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-20 h-20 lg:w-24 lg:h-24 border-4 border-blue-600 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-orange-500 font-semibold tracking-widest text-xs sm:text-sm">
              ABOUT US
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Quality Service,<br />
              <span className="text-blue-700">Every Time</span>
            </h2>
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                At JUST-N-TIME Paint & Pressure Wash, we're dedicated to delivering exceptional painting and pressure washing services that transform your property. Our team of skilled professionals takes pride in every project, ensuring attention to detail and customer satisfaction.
              </p>
              <p>
                Whether you need a fresh coat of paint for your home or commercial property, or powerful pressure washing to restore your surfaces, we're here to help. We use premium materials and proven techniques to deliver results that last.
              </p>
            </div>
            
            {/* Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-700">10+</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-500">300+</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-700">100%</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}