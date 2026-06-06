"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Team collaboration"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Modern office"
                  width={300}
                  height={200}
                  className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
                />
              </div>
              <div className="pt-8 space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Technology meeting"
                  width={300}
                  height={200}
                  className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Business strategy"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-8 rounded-2xl shadow-xl text-center hidden md:block">
              <span className="text-4xl font-bold block">10+</span>
              <span className="text-sm font-medium uppercase tracking-wider">Years of Excellence</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">About Nakha Solution</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              We Are More Than Just A Tech Company
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Founded on the principles of innovation and integrity, Nakha Solution has grown into a leader in the technology sector. We believe that technology should be an enabler, not a barrier. Our mission is to simplify the complex and deliver results that matter.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm text-blue-600 dark:text-blue-400">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h4>
                  <p className="text-slate-600 dark:text-slate-400">To deliver high-quality, innovative technology solutions that empower businesses to achieve their full potential.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm text-blue-600 dark:text-blue-400">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h4>
                  <p className="text-slate-600 dark:text-slate-400">To be the most trusted partner for digital transformation, recognized for our creativity and excellence.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm text-blue-600 dark:text-blue-400">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Culture</h4>
                  <p className="text-slate-600 dark:text-slate-400">A diverse team of passionate experts dedicated to continuous learning and customer success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
