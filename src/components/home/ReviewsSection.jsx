import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: 'Pat Racette',
    text: 'I used Sergeant Painters for both complete interior and exterior painting. They did a great job at a great price. Andrew was very informative, friendly, helpful and flexible throughout the process. The painting crews were excellent and professional. I highly recommend using Sergeants Painters!',
    rating: 5,
  },
  {
    name: 'Jan Nowlan',
    text: 'Sergeant painters just completed painting the exterior of my house. The whole process from beginning to end was excellent. Andrew kept in contact with me regularly. They began the next day after hiring. The three fellows who did the job were meticulous, taking their time to make sure everything was right.',
    rating: 5,
  },
  {
    name: 'Debbie V',
    text: 'Sergeant Painters did a fabulous job on the exterior of our house. They took time to make sure it was done right! On time and courteous. Highly recommend!!!',
    rating: 5,
  },
  {
    name: 'Jared Fischer',
    text: 'Andrew was a pleasure to work with and he did an excellent job sealing our pavers. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Elizabeth Saucedo',
    text: 'Beautiful work at an affordable price!!!! You can\'t go wrong with Sergeant Painters!!!!',
    rating: 5,
  },
  {
    name: 'Taylor Ochoa',
    text: 'I have nothing but praise for this man and his company. He is beyond professional and a kind man for sure. I wanted our house all done up and painted for my family who was coming into town and with a tight timeline he made sure it was done perfectly.',
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
    <section className="py-20 lg:py-28 bg-slate-900" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber-400 font-semibold tracking-widest text-sm">
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
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-emerald-700" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
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
                      ? 'w-8 bg-amber-400' 
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
          <Button className="bg-amber-500 hover:bg-amber-400 text-emerald-900 font-bold px-8 py-6 rounded-full text-lg">
            CONTACT US NOW
          </Button>
        </motion.div>
      </div>
    </section>
  );
}