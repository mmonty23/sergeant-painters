import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const reviews = [
  {
    name: "SPA",
    rating: 5,
    text: "Andrews team did a great job painting the exterior of our house. Fair price and completed as promised on time. Would recommend if you need your house painted.",
    platform: "Google"
  },
  {
    name: "Pat Racette",
    rating: 5,
    text: "I used Sergeant Painters for both complete interior and exterior painting. They did a great job at a great price. Andrew was very informative, friendly, helpful and flexible throughout the process. The painting crews were excellent and professional. I highly recommend using Sergeants Painters!",
    platform: "Google"
  },
  {
    name: "Jan Nowlan",
    rating: 5,
    text: "Sergeant painters just completed painting the exterior of my house. The whole process from beginning to end was excellent. Andrew kept in contact with me regularly. They began the next day after hiring. The three fellows who did the job were meticulous, taking their time to make sure everything was right.",
    platform: "Google"
  },
  {
    name: "Taylor Ochoa",
    rating: 5,
    text: "I have nothing but praise for this man and his company. He is beyond professional and a kind man for sure. I wanted our house all done up and painted for my family who was coming into town and with a tight timeline he made sure it was all done. Our house went from a trashy looking box to a top tier beautiful home!",
    platform: "Google"
  },
  {
    name: "Debbie V",
    rating: 5,
    text: "Sergeant Painters did a fabulous job on the exterior of our house. They took time to make sure it was done right! On time and courteous. Highly recommend!!!",
    platform: "Google"
  },
  {
    name: "Elizabeth Saucedo",
    rating: 5,
    text: "Beautiful work at an affordable price!!!! You can't go wrong with Seargant Painters!!!!",
    platform: "Google"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out for a free consultation"
  },
  {
    number: "02",
    title: "Get a Quote",
    description: "Receive your personalized estimate"
  },
  {
    number: "03",
    title: "Schedule Service",
    description: "Choose a convenient time"
  },
  {
    number: "04",
    title: "Enjoy Results",
    description: "Relax with your transformed space"
  }
];

const serviceAreas = [
  'Fort Myers', 'Cape Coral', 'Iona', 'Fort Myers Beach',
  'Sanibel', 'Captiva', 'Arborwood', 'Corkscrew',
  'Estero', 'Bonita Springs', 'Bonita Beach', 'Barefoot Beach',
  'Miromar Lakes', 'Naples'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            CONTACT US
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get in touch with any questions or comments and we'll be happy to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <span className="text-orange-400 text-3xl">↓</span>
              <span className="text-orange-400 text-3xl hidden sm:block">↓</span>
              <span className="text-orange-400 text-3xl hidden sm:block">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Contact Us For a Free Quote
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Contact us by filling in the form or by using any of the methods below and we'll get back to you within 24 hours
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Email:</p>
                    <a href="mailto:justntimewash@gmail.com" className="text-blue-600 hover:underline">
                      justntimewash@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone:</p>
                    <a href="tel:+18139704390" className="text-blue-600 hover:underline text-lg">
                      (813) 970-4390
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" 
                  alt="Painting Service" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8" id="quote-form">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">GET A FREE QUOTE</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full"
                  />
                </div>

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
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked})}
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-lg"
                  disabled={!formData.agreeToTerms}
                >
                  SEND
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-2">DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US</p>
            <h2 className="text-4xl font-bold text-slate-900">REVIEWS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 line-clamp-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <span className="text-xs text-slate-500">{review.platform}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
              REVIEW US ON GOOGLE
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-lg text-slate-600">Our process is simple and only contains a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proudly Serving These Areas</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-slate-700">{area}</span>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451822.8276432614!2d-82.04280537768033!3d26.44066828356324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db4e9d24ca8771%3A0x8ea3e2fbc9f9b6dd!2sFort%20Myers%2C%20FL!5e0!3m2!1sen!2sus!4v1645564356789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Service Areas Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">READY TO TAKE THE NEXT STEP?</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-8">GET A FREE QUOTE TODAY!</h3>
          <a href="#quote-form">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 text-lg rounded-full">
              GET FREE QUOTE
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}