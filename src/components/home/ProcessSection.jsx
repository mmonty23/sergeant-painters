import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ClipboardCheck, Paintbrush, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Contact Us',
    description: 'Reach out for a free consultation and quote',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Get Estimate',
    description: 'We provide detailed, transparent pricing',
  },
  {
    icon: Paintbrush,
    number: '03',
    title: 'We Paint',
    description: 'Our expert team completes your project',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'You Love It',
    description: 'Enjoy your beautifully transformed space',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-orange-400 font-semibold tracking-widest text-sm">
            OUR PROCESS
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-white">
            Simple Steps to Your<br />Perfect Project
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-orange-400/30" />
              )}

              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-blue-900 font-black text-sm px-4 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mt-4">
                  <step.icon className="w-8 h-8 text-blue-700" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}