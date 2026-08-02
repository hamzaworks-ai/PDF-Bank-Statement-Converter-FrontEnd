"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Target, Building, Cloud, UserCheck } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Save hours of manual work every week" },
  { icon: Target, text: "Eliminate copy-paste mistakes completely" },
  { icon: Building, text: "Compatible with all major accounting software" },
  { icon: UserCheck, text: "Works for individuals and businesses" },
  { icon: Cloud, text: "Secure cloud processing you can trust" },
  { icon: CheckCircle, text: "No spreadsheet skills required" },
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400/30 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/30 rounded-full blur-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Time Saved</p>
                      <p className="text-white font-bold text-2xl">~15 hours/month</p>
                    </div>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="h-full bg-accent-400 rounded-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-white mb-1">98%</p>
                    <p className="text-white/70 text-sm">Accuracy</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-white mb-1">30s</p>
                    <p className="text-white/70 text-sm">Avg. Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Professionals{" "}
              <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of accountants and finance teams who have transformed their workflow.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
