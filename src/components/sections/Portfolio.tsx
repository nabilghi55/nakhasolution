"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Raya Law Firm",
    description: "A professional and elegant landing page for a law firm, featuring service listings, attorney profiles, and a contact system.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    logo: "https://rayalawfirm.vercel.app/logo.png",
    link: "http://rayalawfirm.vercel.app/",
    tags: ["Legal", "Next.js"],
  },
  {
    title: "Putra Wijaya Mandiri",
    description: "Corporate website for a general contractor company, showcasing construction projects and industrial services.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    logo: "https://putrawijayamandiri.id/wp-content/uploads/2024/11/PWM-Logo.png",
    link: "https://putrawijayamandiri.id/",
    tags: ["Industrial", "Contractor"],
  },
  {
    title: "Alfajr Umroh",
    description: "A comprehensive travel and tour website specifically for Umrah services, featuring package details and booking information.",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80&w=800",
    logo: "https://alfajrumroh.co.id/wp-content/uploads/2024/05/logo-alfajr.png",
    link: "https://alfajrumroh.co.id/",
    tags: ["Travel", "Umrah"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase text-sm mb-4"
          >
            Case Studies
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight"
          >
            Our Masterpieces
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            We take pride in every project we deliver. Here are some of our most impactful collaborations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 rounded-[40px] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Project Image Header */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-8 py-3 rounded-full font-black text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl active:scale-95"
                  >
                    Launch Website <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                {/* Logo & Tags Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="relative h-12 w-12 bg-white dark:bg-white p-2 rounded-2xl shadow-sm overflow-hidden">
                    <Image
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-900 dark:text-white font-black text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    View Project <ChevronRight size={18} className="ml-1" />
                  </a>
                  <span className="text-slate-400 dark:text-slate-600 font-bold text-xs uppercase tracking-widest">
                    #{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-3xl font-black text-lg hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            View More Projects
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
