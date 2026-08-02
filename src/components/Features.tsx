"use client";

import { motion } from "framer-motion";
import { 
  Upload, 
  Wand2, 
  FileSpreadsheet, 
  Shield, 
  Zap, 
  Cloud 
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload PDF",
    description: "Drag and drop your bank statements. We support all major banks worldwide.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wand2,
    title: "Automatic Extraction",
    description: "Our AI extracts every transaction automatically with 98% accuracy.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Multiple Formats",
    description: "Export to Excel, CSV, QuickBooks, or Xero with perfect formatting.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level encryption. Files are automatically deleted after processing.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Most statements are processed in under 30 seconds.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Cloud,
    title: "No Installation",
    description: "Works directly in your browser. No software to install or update.",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Automate</span> Data Entry
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful features designed for accountants, bookkeepers, and finance professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
