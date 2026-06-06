"use client";

import { Monitor, Smartphone, Cloud, Shield, Database, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance and scale.",
    icon: <Monitor size={32} />,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Mobile Solutions",
    description: "Intuitive and powerful native or cross-platform mobile apps that provide seamless user experiences.",
    icon: <Smartphone size={32} />,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure and scalable cloud services to optimize your business operations and reduce overhead.",
    icon: <Cloud size={32} />,
    color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Cyber Security",
    description: "Comprehensive security audits and implementation to protect your valuable business data and assets.",
    icon: <Shield size={32} />,
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  },
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics and BI solutions.",
    icon: <Database size={32} />,
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Digital Marketing",
    description: "Results-driven digital strategies to increase your online presence and reach your target audience.",
    icon: <Globe size={32} />,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Comprehensive Solutions For Every Need
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We offer a wide range of services designed to help businesses thrive in today's competitive landscape. Our team of experts is ready to take your project to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-20 -mt-20 opacity-50"></div>
          
          <div className="relative z-10 text-center lg:text-left mb-8 lg:mb-0 lg:max-w-xl">
            <h4 className="text-3xl font-bold text-white mb-4">Ready to start your next project?</h4>
            <p className="text-blue-100 text-lg">
              Contact us today for a free consultation and let's discuss how we can help your business grow.
            </p>
          </div>
          <div className="relative z-10">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 dark:text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
