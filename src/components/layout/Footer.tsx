"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Send, Camera, Share2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.png"
                  alt="Nakha Solution Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tight">
                NAKHA<span className="text-blue-500">SOLUTION</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              Providing innovative solutions for businesses to thrive in the digital age. Our commitment to excellence drives everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span>123 Business Ave, Tech City, TC 54321</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info@nakhasolution.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Nakha Solution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
