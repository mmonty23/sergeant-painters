import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-emerald-600 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-amber-500 font-semibold tracking-widest text-sm">
              ABOUT US
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Painting Excellence,<br />
              <span className="text-emerald-700">Military Precision</span>
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                At Sergeant Painters, we proudly combine over three decades of painting experience with the values instilled during our time in the military. Our journey started in service, and now we're dedicated to serving our community with high-quality painting and cleaning services.
              </p>
              <p>
                We ensure a job well done on every project, from homes to commercial spaces. Our team brings the same discipline, attention to detail, and commitment to excellence that defined our military service to every painting job we undertake.
              </p>
            </div>
            
            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-700">30+</div>
                <div className="text-sm text-slate-500 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-500">500+</div>
                <div className="text-sm text-slate-500 mt-1">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-700">100%</div>
                <div className="text-sm text-slate-500 mt-1">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}