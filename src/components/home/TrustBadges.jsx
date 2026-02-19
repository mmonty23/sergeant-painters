import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Clock, Award, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'VETERAN OWNED', color: 'text-emerald-600' },
  { icon: MapPin, label: '100% LOCAL', color: 'text-amber-500' },
  { icon: Clock, label: '30+ YEARS EXPERIENCE', color: 'text-emerald-600' },
  { icon: CheckCircle, label: 'INSURED', color: 'text-amber-500' },
  { icon: Award, label: 'LICENSED', color: 'text-emerald-600' },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <badge.icon className={`w-6 h-6 ${badge.color}`} />
              <span className="text-sm font-bold text-slate-700 tracking-wide">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}