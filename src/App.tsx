/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Star, 
  CheckCircle, 
  Award, 
  DollarSign, 
  Users, 
  Menu, 
  X,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Product {
  id: number;
  category: string;
  image: string;
  description: string;
  brands?: string[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    category: "Ceramic Wall Tiles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO43GtoRQL8v_pdZQ8peBrJRKbg_Vh--5AiA&s=80&w=800",
    description: "Elegant wall solutions for kitchens and bathrooms.",
    brands: ["Time Ceramics", "Qiang Sheng Ceramics"]
  },
  {
    id: 2,
    category: "Ceramic Floor Tiles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiHocPIyH5gOkNWyOUKHrdl-s35MebPiJJg&s=80&w=800",
    description: "Durable and stylish flooring for high-traffic areas."
  },
  {
    id: 3,
    category: "Matt Tiles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo6SC5Kibgqs1D3p8TTKFNit5pKi6LfWrPw&s=80&w=800",
    description: "Modern non-slip finish for a sophisticated look."
  },
  {
    id: 4,
    category: "PPRC Pipes & Fittings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdwx6Us6CMzkPJtHVoEQIEDEX96ajQ6ZoYg&s=80&w=800",
    description: "High-quality water supply solutions.",
    brands: ["Minhas PPRC Water Pipe"]
  },
  {
    id: 5,
    category: "PVC Pipes & Fittings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXrocNyW1PK5aZRT8lNn-0fZXR4I1VcGhpA&s=80&w=800",
    description: "Reliable drainage and plumbing systems.",
    brands: ["Poly Fit Pipe"]
  },
  {
    id: 6,
    category: "Sanitary Ware",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoY12zfSH5am89H3WTOsmiNHSaapLCE6Hxw&s=80&w=800",
    description: "Wash Basins, Indian & English Commodes, Shower Sets.",
    brands: ["Faisal"]
  },
  {
    id: 7,
    category: "CP Fittings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6JnFye0r4sNooRKNSkwzXdjZd_smhcDshg&s=80&w=800",
    description: "Premium taps and bathroom accessories.",
    brands: ["Millat", "Faisal", "Faraz", "Polo"]
  },
  {
    id: 8,
    category: "Tile Bonds & Grouts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFe__lqNrtg3FIU7RveDdgBtnKSPcSBRQ5lQ&s=80&w=800",
    description: "Professional strength adhesives and finishes.",
    brands: ["Shabbir", "Aqua", "Sika", "Master", "Diamond"]
  }
];

const REVIEWS: Review[] = [
  { id: 1, name: "Ahmed Khan", rating: 5, text: "Best quality tiles in Pabbi. Their collection is modern and prices are very competitive." },
  { id: 2, name: "Sajid Ali", rating: 5, text: "Excellent customer service. They helped me choose the perfect sanitary ware for my new home." },
  { id: 3, name: "Zubair Shah", rating: 4, text: "Wide range of PPRC and PVC fittings. A one-stop shop for all construction needs." },
  { id: 4, name: "Kamran Malik", rating: 5, text: "The gold standard for tiles and paint in the Zyarat Stop area. Highly recommended!" },
  { id: 5, name: "Irfan Ullah", rating: 5, text: "Serving contractors with integrity. Taimur Store is my go-to for all building materials." }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-xl">T</div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
            TAIMUR <span className="text-gold">TILES</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:03161219442" 
            className="bg-gold hover:bg-gold-light text-navy px-5 py-2 rounded-full text-sm font-bold transition-all gold-glow"
          >
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-white/80 hover:text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:03161219442" 
                className="bg-gold text-navy text-center py-3 rounded-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1920" 
          alt="Showroom Background" 
          className="w-full h-[120%] object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-gold/20 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Premium Showroom in Pabbi
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Premium Tiles, Sanitary & <br />
            <span className="text-gold italic">Paint Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Providing Quality Materials for Modern Homes & Construction Projects. 
            Your trusted partner in building excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:03161219442" 
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 gold-glow"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a 
              href="https://www.google.com/maps/search/Taimur+Tiles+Sanitary+and+Paint+Store+Pabbi" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-template-columns-[1fr_1.2fr] gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Interior" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full -z-0 blur-3xl" />
            <div className="absolute -top-10 -left-10 p-8 bg-navy text-white rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold text-gold">10+</p>
              <p className="text-sm font-medium opacity-70">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-navy">
              Trusted Supplier of Building Materials in Pabbi
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Taimur Tiles Sanitary & Paint Store is a premier destination for high-quality construction materials. Located at the heart of Pabbi on Main GT Road, we have established ourselves as the most trusted supplier for contractors, builders, and homeowners alike.
              </p>
              <p>
                Our showroom features an extensive collection of quality certified brands, ensuring that every product you purchase meets international standards of durability and aesthetics. We pride ourselves on offering affordable and competitive prices without compromising on the premium feel your home deserves.
              </p>
              <p>
                With years of experience in the tiles and sanitary business, our expert team is dedicated to helping you find the perfect solutions for your modern home or commercial project.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold" />
                <span className="font-semibold text-navy">Quality Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold" />
                <span className="font-semibold text-navy">Competitive Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold" />
                <span className="font-semibold text-navy">Expert Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold" />
                <span className="font-semibold text-navy">Trusted Brands</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Premium Products</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore our wide range of high-end materials designed to elevate your living spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {product.category}
                </h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-2">
                  {product.description}
                </p>
                {product.brands && (
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map(brand => (
                      <span key={brand} className="text-[10px] px-2 py-1 bg-gold/20 text-gold rounded border border-gold/30 uppercase font-bold">
                        {brand}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Award className="w-8 h-8" />, title: "Premium Quality", desc: "We source only the finest materials from certified manufacturers." },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Trusted Brands", desc: "Partnered with industry leaders like Time Ceramics and Faisal." },
    { icon: <DollarSign className="w-8 h-8" />, title: "Affordable Prices", desc: "Premium quality at prices that fit your construction budget." },
    { icon: <Users className="w-8 h-8" />, title: "Customer Satisfaction", desc: "Dedicated support to ensure your project's success." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/20 group"
            >
              <div className="w-16 h-16 bg-navy text-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gold/10 relative"
              >
                <div className="absolute top-10 right-10 text-gold/10">
                  <Star size={100} strokeWidth={1} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(REVIEWS[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-navy/80 italic mb-8 leading-relaxed">
                  "{REVIEWS[current].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold font-bold">
                    {REVIEWS[current].name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{REVIEWS[current].name}</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-gold w-8' : 'bg-gold/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-navy">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Our Location</h4>
                  <p className="text-gray-600">Main GT Road, Zyarat Stop, Pabbi</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">0316-1219442</p>
                  <p className="text-gray-600">0321-9746881</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email Address</h4>
                  <p className="text-gray-600">taimur881.tk@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-navy rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 opacity-80">
                <div className="flex justify-between">
                  <span>Saturday - Thursday</span>
                  <span>09:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="text-gold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.203649646804!2d71.8080!3d34.0080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzI4LjgiTiA3McKwNDgnMjguOCJF!5e0!3m2!1sen!2s!4v1645685848260!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Taimur Tiles Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-xl">T</div>
              <span className="text-2xl font-bold tracking-tight">
                TAIMUR <span className="text-gold">TILES</span>
              </span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Your premier destination for high-quality tiles, sanitary ware, and paint solutions in Pabbi. We bring elegance and durability to your construction projects.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">
                <ArrowRight size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors">Our Products</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <span>Main GT Road, Pabbi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>0316-1219442</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>taimur881.tk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Taimur Tiles Sanitary & Paint Store. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:03161219442"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gold text-navy rounded-full flex items-center justify-center shadow-2xl gold-glow md:hidden"
    >
      <Phone size={28} />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
