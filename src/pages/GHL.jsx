import React, { useState } from 'react';

export default function GHL() {
  const [view, setView] = useState('preview'); // 'preview' or 'code'
  
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JUST-N-TIME Paint & Pressure Wash</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
        }
        
        /* Navigation */
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .logo-circle {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            overflow: hidden;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-circle img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.1);
        }
        
        .logo-text {
            display: flex;
            flex-direction: column;
        }
        
        .logo-text-top {
            color: #fb923c;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            font-weight: 600;
        }
        
        .logo-text-bottom {
            color: white;
            font-size: 1.25rem;
            font-weight: 900;
            letter-spacing: 0.05em;
            margin-top: -0.25rem;
        }
        
        .nav-links {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        
        .nav-link {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            padding: 0.5rem 1rem;
            font-weight: 500;
            font-size: 0.875rem;
            letter-spacing: 0.025em;
            transition: color 0.3s;
        }
        
        .nav-link:hover {
            color: #fb923c;
        }
        
        .btn-primary {
            background: #2563eb;
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: background 0.3s;
        }
        
        .btn-primary:hover {
            background: #1d4ed8;
        }
        
        .btn-phone {
            background: #f97316;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            white-space: nowrap;
            transition: background 0.3s;
        }
        
        .btn-phone:hover {
            background: #ea580c;
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 5rem;
        }
        
        .hero-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
        }
        
        .hero-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.6));
        }
        
        .hero-container {
            position: relative;
            z-index: 10;
            max-width: 1280px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
        }
        
        .hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        @media (min-width: 1024px) {
            .hero-grid {
                grid-template-columns: 1fr 1fr;
                gap: 5rem;
            }
        }
        
        .hero-content h1 {
            font-size: 3rem;
            font-weight: 900;
            color: white;
            line-height: 1.1;
            letter-spacing: -0.025em;
        }
        
        .hero-content h1 span {
            color: #fb923c;
        }
        
        .hero-content p {
            margin-top: 1.5rem;
            font-size: 1.125rem;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.75;
            max-width: 40rem;
        }
        
        /* Quote Form */
        .quote-form {
            background: #2563eb;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .form-logo {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        
        .form-logo-circle {
            width: 96px;
            height: 96px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .form-logo-circle img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .quote-form h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            text-align: center;
            margin-bottom: 1.5rem;
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-group label {
            display: block;
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        
        .form-group label .required {
            color: #fb923c;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            background: white;
            border: none;
            height: 3rem;
            border-radius: 0.5rem;
            padding: 0 1rem;
            font-size: 1rem;
        }
        
        .form-group textarea {
            height: 100px;
            padding: 0.75rem 1rem;
            resize: none;
        }
        
        .checkbox-group {
            display: flex;
            gap: 0.75rem;
            align-items: flex-start;
            margin-bottom: 1rem;
        }
        
        .checkbox-group input[type="checkbox"] {
            margin-top: 0.25rem;
            width: auto;
            height: auto;
        }
        
        .checkbox-group label {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.875rem;
            line-height: 1.5;
        }
        
        .checkbox-group a {
            color: #fb923c;
            text-decoration: underline;
        }
        
        .submit-btn {
            width: 100%;
            height: 3.5rem;
            background: #f97316;
            color: #1e3a8a;
            font-weight: 700;
            font-size: 1.125rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .submit-btn:hover {
            background: #fb923c;
        }
        
        /* Trust Badges */
        .trust-badges {
            background: white;
            padding: 3rem 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .trust-container {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            align-items: center;
        }
        
        .trust-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: center;
        }
        
        .trust-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(to bottom right, #fb923c, #f97316);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
        }
        
        .trust-text {
            display: flex;
            flex-direction: column;
        }
        
        .trust-number {
            font-size: 1.5rem;
            font-weight: 900;
            color: #1e3a8a;
        }
        
        .trust-label {
            font-size: 0.875rem;
            color: #64748b;
        }
        
        /* Section */
        .section {
            padding: 5rem 1.5rem;
        }
        
        .section-alt {
            background: #f8fafc;
        }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        .section-header {
            text-align: center;
            max-width: 42rem;
            margin: 0 auto 4rem;
        }
        
        .section-label {
            color: #f97316;
            font-weight: 600;
            letter-spacing: 0.1em;
            font-size: 0.875rem;
        }
        
        .section-title {
            margin-top: 1rem;
            font-size: 2.5rem;
            font-weight: 900;
            color: #0f172a;
        }
        
        .section-title span {
            color: #2563eb;
        }
        
        /* Services Grid */
        .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        @media (min-width: 768px) {
            .services-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        .service-card {
            background: white;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }
        
        .service-card:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .service-image {
            position: relative;
            height: 200px;
            overflow: hidden;
        }
        
        .service-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        
        .service-card:hover .service-image img {
            transform: scale(1.1);
        }
        
        .service-image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4), transparent);
        }
        
        .service-icon {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            width: 48px;
            height: 48px;
            background: #f97316;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
        }
        
        .service-content {
            padding: 1.5rem;
        }
        
        .service-content h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 0.75rem;
            transition: color 0.3s;
        }
        
        .service-card:hover .service-content h3 {
            color: #2563eb;
        }
        
        .service-content p {
            color: #64748b;
            line-height: 1.75;
        }
        
        /* Gallery */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        
        @media (min-width: 768px) {
            .gallery-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        .gallery-item {
            aspect-ratio: 1;
            border-radius: 0.75rem;
            overflow: hidden;
            cursor: pointer;
            position: relative;
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-item-overlay {
            position: absolute;
            inset: 0;
            background: rgba(30, 58, 138, 0);
            transition: background 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .gallery-item:hover .gallery-item-overlay {
            background: rgba(30, 58, 138, 0.6);
        }
        
        /* Reviews */
        .reviews-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        @media (min-width: 768px) {
            .reviews-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1024px) {
            .reviews-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        .review-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .review-stars {
            color: #fbbf24;
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }
        
        .review-text {
            color: #64748b;
            line-height: 1.75;
            margin-bottom: 1rem;
        }
        
        .review-author {
            font-weight: 600;
            color: #0f172a;
        }
        
        /* Footer */
        .footer {
            background: #0f172a;
            color: white;
        }
        
        .footer-main {
            padding: 4rem 1.5rem;
        }
        
        .footer-grid {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        
        @media (min-width: 1024px) {
            .footer-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }
        
        .footer-logo-circle {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
        }
        
        .footer-logo-circle img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .footer-logo-text-top {
            color: #fb923c;
            font-size: 0.875rem;
            letter-spacing: 0.2em;
            font-weight: 700;
        }
        
        .footer-logo-text-bottom {
            color: white;
            font-size: 1.25rem;
            font-weight: 900;
            letter-spacing: 0.05em;
            margin-top: -0.125rem;
        }
        
        .footer-text {
            color: #94a3b8;
            line-height: 1.75;
            margin-bottom: 1.5rem;
        }
        
        .footer h3 {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.75rem;
        }
        
        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: #fb923c;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            text-align: center;
            color: #64748b;
            font-size: 0.875rem;
        }
        
        /* Responsive */
        @media (max-width: 1023px) {
            .nav-links {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .logo-text {
                display: none;
            }
            
            .hero-content h1 {
                font-size: 2rem;
            }
        }
        
        @media (min-width: 640px) {
            .logo-text {
                display: flex;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <div class="logo-container">
                <div class="logo-circle">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997137b3b52a1df864f0b6d/5374f7522_AI-Image-Editor-2026-02-19_09-56-23.png" alt="JUST-N-TIME Logo">
                </div>
                <div class="logo-text">
                    <span class="logo-text-top">JUST-N-TIME</span>
                    <p class="logo-text-bottom">PAINT & PRESSURE WASH</p>
                </div>
            </div>
            
            <div class="nav-links">
                <a href="#home" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#gallery" class="nav-link">Gallery</a>
                <a href="#reviews" class="nav-link">Reviews</a>
                <a href="#contact" class="nav-link">Contact</a>
                <a href="#quote-form" class="btn-primary">GET FREE QUOTE</a>
                <a href="tel:+18139704390" class="btn-phone">
                    📞 (813) 970-4390
                </a>
            </div>
            
            <button class="mobile-menu-btn">☰</button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80" alt="Florida House">
            <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-container">
            <div class="hero-grid">
                <div class="hero-content">
                    <h1>
                        JUST-N-TIME<br>
                        <span>PAINT & PRESSURE WASH</span>
                    </h1>
                    <p>
                        JUST-N-TIME Paint & Pressure Wash is your trusted partner for professional painting and pressure washing services. We specialize in residential and commercial projects, offering interior and exterior painting, pressure washing, and surface cleaning. With years of experience and a commitment to quality, we deliver results that exceed expectations every time.
                    </p>
                </div>
                
                <div class="quote-form" id="quote-form">
                    <div class="form-logo">
                        <div class="form-logo-circle">
                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997137b3b52a1df864f0b6d/95c894654_logo.png" alt="Logo">
                        </div>
                    </div>
                    
                    <h2>GET A FREE QUOTE</h2>
                    
                    <form id="quoteForm">
                        <div class="form-group">
                            <label>Full Name <span class="required">*</span></label>
                            <input type="text" name="fullName" placeholder="John Smith" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Phone <span class="required">*</span></label>
                            <input type="tel" name="phone" placeholder="(808) 555-1234" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Short message about your needs <span class="required">*</span></label>
                            <textarea name="message" placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**" required></textarea>
                        </div>
                        
                        <div class="checkbox-group">
                            <input type="checkbox" id="terms" name="terms" required>
                            <label for="terms">
                                I agree to <a href="#">terms & conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                            </label>
                        </div>
                        
                        <button type="submit" class="submit-btn">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Badges -->
    <section class="trust-badges">
        <div class="trust-container">
            <div class="trust-item">
                <div class="trust-icon">⭐</div>
                <div class="trust-text">
                    <div class="trust-number">10+</div>
                    <div class="trust-label">Years Experience</div>
                </div>
            </div>
            <div class="trust-item">
                <div class="trust-icon">🏆</div>
                <div class="trust-text">
                    <div class="trust-number">300+</div>
                    <div class="trust-label">Projects Done</div>
                </div>
            </div>
            <div class="trust-item">
                <div class="trust-icon">✓</div>
                <div class="trust-text">
                    <div class="trust-number">100%</div>
                    <div class="trust-label">Satisfaction</div>
                </div>
            </div>
            <div class="trust-item">
                <div class="trust-icon">🛡️</div>
                <div class="trust-text">
                    <div class="trust-number">Licensed</div>
                    <div class="trust-label">& Insured</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section section-alt" id="services">
        <div class="container">
            <div class="section-header">
                <div class="section-label">WHAT WE ARE BEST AT</div>
                <h2 class="section-title">OUR SERVICES</h2>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-image">
                        <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80" alt="Interior Painting">
                        <div class="service-image-overlay"></div>
                        <div class="service-icon">🏠</div>
                    </div>
                    <div class="service-content">
                        <h3>Interior Painting</h3>
                        <p>Transform your indoor spaces with our professional interior painting services. We deliver flawless finishes that bring new life to your rooms.</p>
                    </div>
                </div>
                
                <div class="service-card">
                    <div class="service-image">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Exterior Painting">
                        <div class="service-image-overlay"></div>
                        <div class="service-icon">🎨</div>
                    </div>
                    <div class="service-content">
                        <h3>Exterior Painting</h3>
                        <p>Enhance your property's curb appeal with our expert exterior painting. Weather-resistant coatings that protect and beautify your home or business.</p>
                    </div>
                </div>
                
                <div class="service-card">
                    <div class="service-image">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Pressure Washing">
                        <div class="service-image-overlay"></div>
                        <div class="service-icon">✨</div>
                    </div>
                    <div class="service-content">
                        <h3>Pressure Washing</h3>
                        <p>Professional pressure washing services to remove dirt, grime, and mildew. Restore your surfaces to like-new condition with our powerful cleaning.</p>
                    </div>
                </div>
                
                <div class="service-card">
                    <div class="service-image">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Commercial Services">
                        <div class="service-image-overlay"></div>
                        <div class="service-icon">🏢</div>
                    </div>
                    <div class="service-content">
                        <h3>Commercial Services</h3>
                        <p>Complete painting and pressure washing solutions for businesses. We work efficiently to minimize disruption to your operations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="section" id="gallery">
        <div class="container">
            <div class="section-header">
                <div class="section-label">SEE WHY OUR CUSTOMERS LOVE US</div>
                <h2 class="section-title">SEE OUR WORK</h2>
            </div>
            
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Gallery 1">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" alt="Gallery 2">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Gallery 3">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" alt="Gallery 4">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80" alt="Gallery 5">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80" alt="Gallery 6">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" alt="Gallery 7">
                    <div class="gallery-item-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" alt="Gallery 8">
                    <div class="gallery-item-overlay"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="section section-alt" id="reviews">
        <div class="container">
            <div class="section-header">
                <div class="section-label">WHAT OUR CUSTOMERS SAY</div>
                <h2 class="section-title">CLIENT REVIEWS</h2>
            </div>
            
            <div class="reviews-grid">
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"Andrews team did a great job painting the exterior of our house. Fair price and completed as promised on time. Would recommend if you need your house painted."</p>
                    <div class="review-author">- SPA</div>
                </div>
                
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"I used Sergeant Painters for both complete interior and exterior painting. They did a great job at a great price. Andrew was very informative, friendly, helpful and flexible throughout the process."</p>
                    <div class="review-author">- Pat Racette</div>
                </div>
                
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"Sergeant painters just completed painting the exterior of my house. The whole process from beginning to end was excellent. Andrew kept in contact with me regularly."</p>
                    <div class="review-author">- Jan Nowlan</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
        <div class="footer-main">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">
                        <div class="footer-logo-circle">
                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997137b3b52a1df864f0b6d/dc002af42_image.png" alt="Logo">
                        </div>
                        <div>
                            <div class="footer-logo-text-top">JUST-N-TIME</div>
                            <div class="footer-logo-text-bottom">PAINT & WASH</div>
                        </div>
                    </div>
                    <p class="footer-text">
                        Professional painting and pressure washing services delivering quality results every time. Your trusted local experts.
                    </p>
                </div>
                
                <div>
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3>Our Services</h3>
                    <ul class="footer-links">
                        <li><a href="#services">Interior Painting</a></li>
                        <li><a href="#services">Exterior Painting</a></li>
                        <li><a href="#services">Pressure Washing</a></li>
                        <li><a href="#services">Commercial Services</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><a href="tel:+18139704390">📞 (813) 970-4390</a></li>
                        <li><a href="mailto:justntimewash@gmail.com">📧 justntimewash@gmail.com</a></li>
                        <li>📍 Tampa Bay Area</li>
                        <li>🕐 Mon - Sat: 7:00 AM - 11:00 PM</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>© 2024 JUST-N-TIME Paint & Pressure Wash. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Form submission
        document.getElementById('quoteForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will contact you shortly.');
            this.reset();
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Controls */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">GHL HTML/JavaScript Code</h1>
              <p className="text-slate-400 text-sm">Complete standalone HTML for GoHighLevel</p>
            </div>
            
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setView('preview')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  view === 'preview' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                👁️ Preview
              </button>
              <button
                onClick={() => setView('code')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  view === 'code' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                📝 Code
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(htmlCode);
                  alert('✅ Code copied to clipboard!');
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                📋 Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {view === 'preview' ? (
        <div className="w-full h-screen">
          <iframe
            srcDoc={htmlCode}
            className="w-full h-full border-0"
            title="Website Preview"
          />
        </div>
      ) : (
        <div className="p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="bg-slate-700 px-4 py-3 flex items-center justify-between border-b border-slate-600">
                <span className="text-slate-300 font-mono text-sm">index.html</span>
                <span className="text-slate-400 text-xs">{htmlCode.length.toLocaleString()} characters</span>
              </div>
              <pre className="p-4 overflow-x-auto max-h-[calc(100vh-200px)]">
                <code className="text-green-400 text-sm font-mono whitespace-pre">
                  {htmlCode}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}