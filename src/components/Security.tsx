"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Trash2, Server, FileCheck } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Encrypted Uploads", description: "256-bit SSL encryption for all file transfers" },
  { icon: Trash2, title: "Automatic Deletion", description: "Files are permanently deleted after 24 hours" },
  { icon: Server, title: "Secure Servers", description: "Hosted on enterprise-grade infrastructure" },
  { icon: FileCheck, title: "GDPR-Ready", description: "Fully compliant with data protection regulations" },
  { icon: Shield, title: "Private Processing", description: "Your data is never shared or sold" },
];

export default function Security() {
  return (
    <section id="security" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-emerald-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Financial Data Stays{" "}
            <span className="text-accent-400">Private</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Bank-level security measures to protect your sensitive information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-accent-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
            <Lock className="w-5 h-5 text-accent-400" />
            <span className="text-slate-300 font-medium">256-bit SSL Encrypted & GDPR Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
