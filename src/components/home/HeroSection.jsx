import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      toast.error('Please agree to the terms & conditions');
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Thank you! We\'ll contact you shortly.');
    setFormData({ fullName: '', phone: '', message: '', agreed: false });
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              JUST-N-TIME<br />
              <span className="text-orange-400">PAINT & PRESSURE WASH</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              JUST-N-TIME Paint & Pressure Wash is your trusted partner for professional painting and pressure washing services. We specialize in residential and commercial projects, offering interior and exterior painting, pressure washing, and surface cleaning. With years of experience and a commitment to quality, we deliver results that exceed expectations every time.
            </p>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quote-form"
          >
            <div className="bg-blue-700 rounded-2xl p-8 shadow-2xl">
              {/* Form Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997137b3b52a1df864f0b6d/95c894654_logo.png" 
                    alt="JUST-N-TIME Paint & Wash Logo"
                    className="w-full h-full object-contain"
                    style={{ filter: 'hue-rotate(-10deg) saturate(1.2)' }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white text-center mb-6">
                GET A FREE QUOTE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name <span className="text-orange-400">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-white border-0 h-12 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone <span className="text-orange-400">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="(808) 555-1234"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-0 h-12 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Short message about your needs <span className="text-orange-400">*</span>
                  </label>
                  <Textarea
                    placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-0 rounded-lg min-h-[100px] resize-none"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked })}
                    className="mt-1 border-white data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  />
                  <label htmlFor="terms" className="text-white/90 text-sm leading-relaxed">
                    I agree to <a href="#" className="text-orange-400 underline hover:no-underline">terms & conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-orange-500 hover:bg-orange-400 text-blue-900 font-bold text-lg rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'SEND'
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}