"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, CheckCircle, FileSpreadsheet, FileText } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "Secure Upload" },
  { icon: Zap, text: "Fast Conversion" },
  { icon: CheckCircle, text: "No Credit Card" },
];

const floatingCards = [
  { icon: FileSpreadsheet, label: "Excel Export", color: "from-green-500 to-emerald-600" },
  { icon: FileText, label: "CSV Export", color: "from-blue-500 to-cyan-600" },
  { icon: CheckCircle, label: "QuickBooks", color: "from-purple-500 to-pink-600" },
  { icon: CheckCircle, label: "Xero", color: "from-orange-500 to-red-600" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden gradient-bg">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Convert Bank Statements Into{" "}
              <span className="gradient-text">Excel</span> in Seconds
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              Upload your PDF bank statement and receive a perfectly formatted Excel or CSV file in seconds. No manual data entry required.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full shadow-xl shadow-primary-500/30 hover:shadow-primary-500/40 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Start Free
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border-2 border-slate-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
              >
                Watch Demo
              </motion.button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm"
                >
                  <badge.icon className="w-4 h-4 text-accent-500" />
                  <span className="text-sm font-medium text-slate-600">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Content - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Browser Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 text-center">
                    statementflow.com
                  </div>
                </div>
              </div>
              
              {/* Browser Content */}
              <div className="p-6 md:p-8">
                {/* Upload State */}
                <div className="border-2 border-dashed border-primary-300 rounded-xl p-8 text-center bg-primary-50/50 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary-500" />
                  </div>
                  <p className="font-semibold text-slate-700 mb-1">Upload PDF Statement</p>
                  <p className="text-sm text-slate-500">Drag & drop or click to browse</p>
                </div>
                
                {/* Processing Arrow */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
                  </motion.div>
                </div>
                
                {/* Result State */}
                <div className="bg-gradient-to-br from-accent-50 to-green-50 rounded-xl p-6 border border-accent-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <FileSpreadsheet className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Ready for Download</p>
                      <p className="text-sm text-slate-500">statement_dec_2024.xlsx</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-accent-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg"
                  >
                    Download Excel
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{ 
                  delay: 0.8 + index * 0.15,
                  y: { repeat: Infinity, duration: 3, delay: index * 0.5 }
                }}
                className={`absolute hidden md:block bg-white rounded-xl shadow-xl border border-slate-100 p-3 ${
                  index === 0 ? '-top-4 -left-8' : 
                  index === 1 ? '-bottom-4 -left-8' : 
                  index === 2 ? '-top-4 -right-8' : '-bottom-4 -right-8'
                }`}
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-2`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold text-slate-700">{card.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
