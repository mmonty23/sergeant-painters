import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import HomeButton from '@/components/HomeButton';

export default function GoogleReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a star rating');
      return;
    }
    
    // Simulate submission
    toast.success('Thank you for your review!');
    setFormData({ name: '', email: '', review: '' });
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HomeButton />
      
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <span className="text-orange-500 text-[10px] tracking-[0.15em] font-semibold block">JUST-N-TIME</span>
                <span className="text-blue-700 font-black text-sm block -mt-1">PAINT & WASH</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Leave Us a Review</h1>
          <p className="text-lg text-slate-600">We'd love to hear about your experience!</p>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Star Rating */}
            <div className="text-center">
              <label className="block text-lg font-semibold text-slate-900 mb-4">
                How would you rate our service?
              </label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-12 w-12 ${
                        star <= (hoverRating || rating)
                          ? 'fill-orange-500 text-orange-500'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="mt-3 text-slate-600">
                  {rating === 5 && "Excellent! 🌟"}
                  {rating === 4 && "Great! 😊"}
                  {rating === 3 && "Good! 👍"}
                  {rating === 2 && "Fair 😐"}
                  {rating === 1 && "Poor 😞"}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name *
              </label>
              <Input
                required
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="h-12"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email *
              </label>
              <Input
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="h-12"
              />
            </div>

            {/* Review */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Review *
              </label>
              <Textarea
                required
                rows={6}
                placeholder="Tell us about your experience..."
                value={formData.review}
                onChange={(e) => setFormData({...formData, review: e.target.value})}
                className="resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg"
            >
              SUBMIT REVIEW
            </Button>
          </form>
        </div>

        {/* Google Link */}
        <div className="text-center mt-8">
          <p className="text-slate-600 mb-4">Or leave a review directly on</p>
          <a 
            href="https://www.google.com/search?q=just-n-time+paint+%26+pressure+wash" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
            Reviews
          </a>
        </div>
      </div>
    </div>
  );
}