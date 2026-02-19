import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const reviews = [
  {
    name: 'Michael Torres',
    text: 'JUST-N-TIME did an amazing job on our home! The painting was flawless and the team was professional from start to finish. They completed the work on schedule and the price was very reasonable. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    text: 'Excellent pressure washing service! Our driveway and patio look brand new. The team was courteous, efficient, and cleaned up perfectly after the job. Will definitely use them again!',
    rating: 5,
  },
  {
    name: 'David Martinez',
    text: 'Just had our office building painted by JUST-N-TIME. They worked around our schedule and did a fantastic job. Very professional and the quality is outstanding!',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    text: 'Great experience! They pressure washed our entire house exterior and it looks incredible. Very responsive and fair pricing. Can\'t recommend them enough!',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    text: 'Outstanding interior painting job. Attention to detail was impressive and they were very careful with our furniture. The crew was respectful and professional.',
    rating: 5,
  },
  {
    name: 'Amanda Wright',
    text: 'Phenomenal service! Quick response, great communication, and beautiful results. Our home looks brand new thanks to their amazing work!',
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === reviews.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? reviews.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 relative" id="reviews">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Florida House with Palm Trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60" />
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
            DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-white">
            REVIEWS
          </h2>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl p-8 lg:p-12 text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-blue-700" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
                    "{reviews[currentIndex].text}"
                  </p>

                  {/* Reviewer Name */}
                  <div className="mt-6">
                    <p className="font-bold text-slate-900 text-lg">
                      {reviews[currentIndex].name}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className="w-4 h-4"
                      />
                      <span className="text-slate-500 text-sm">Google Review</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-orange-400' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-orange-500 hover:bg-orange-400 text-blue-900 font-bold px-8 py-6 rounded-full text-lg">
              CONTACT US NOW
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}