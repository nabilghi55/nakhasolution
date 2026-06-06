"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Have a question or a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-2xl text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">info@nakhasolution.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-2xl text-white shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-2xl text-white shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Visit Us</h4>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">123 Business Ave, Tech City, TC 54321</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Partnership</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
