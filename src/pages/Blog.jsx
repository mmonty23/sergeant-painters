import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { createPageUrl } from '../utils';
import HomeButton from '@/components/HomeButton';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Paint Colors for Your Home in 2026',
    excerpt: 'Discover the trending paint colors that will transform your living space this year. From calming neutrals to bold statement walls.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    author: 'JUST-N-TIME Team',
    date: 'February 15, 2026',
    readTime: '5 min read',
    category: 'Interior Design',
  },
  {
    id: 2,
    title: 'How Often Should You Pressure Wash Your Home?',
    excerpt: 'Learn the best practices for maintaining your home\'s exterior with regular pressure washing and when to schedule professional services.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    author: 'JUST-N-TIME Team',
    date: 'February 10, 2026',
    readTime: '4 min read',
    category: 'Maintenance',
  },
  {
    id: 3,
    title: 'Exterior vs Interior Paint: What\'s the Difference?',
    excerpt: 'Understanding the differences between exterior and interior paints can help you make the right choice for your project.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    author: 'JUST-N-TIME Team',
    date: 'February 5, 2026',
    readTime: '6 min read',
    category: 'Education',
  },
  {
    id: 4,
    title: 'Preparing Your Home for a Professional Paint Job',
    excerpt: 'Essential tips to prepare your space before our team arrives, ensuring a smooth and efficient painting process.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    author: 'JUST-N-TIME Team',
    date: 'January 28, 2026',
    readTime: '5 min read',
    category: 'Tips & Tricks',
  },
  {
    id: 5,
    title: 'The Benefits of Pressure Washing Before Painting',
    excerpt: 'Why pressure washing is a crucial first step before any exterior painting project and how it ensures better results.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    author: 'JUST-N-TIME Team',
    date: 'January 20, 2026',
    readTime: '4 min read',
    category: 'Best Practices',
  },
  {
    id: 6,
    title: 'Commercial Painting: What to Expect',
    excerpt: 'A comprehensive guide to commercial painting services, timelines, and how we minimize disruption to your business.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    author: 'JUST-N-TIME Team',
    date: 'January 15, 2026',
    readTime: '7 min read',
    category: 'Commercial',
  },
];

const categories = ['All', 'Interior Design', 'Maintenance', 'Education', 'Tips & Tricks', 'Best Practices', 'Commercial'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <HomeButton />
      {/* Navigation */}
      <nav className="bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Our <span className="text-orange-400">Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tips, tricks, and insights about painting and pressure washing from the experts at JUST-N-TIME
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="link"
                    className="p-0 text-blue-600 hover:text-blue-800 font-semibold group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get your free quote today and see why customers choose JUST-N-TIME
          </p>
          <Link to={createPageUrl('Home') + '#quote-form'}>
            <Button className="bg-orange-500 hover:bg-orange-400 text-blue-900 font-bold px-8 py-6 rounded-full text-lg">
              GET FREE QUOTE
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">© 2026 JUST-N-TIME Paint & Pressure Wash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}