"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use 256-bit SSL encryption for all file transfers. Your files are processed on secure servers and automatically deleted within 24 hours. We never store, share, or sell your financial data.",
  },
  {
    question: "How many banks are supported?",
    answer: "We support over 150 major banks worldwide, including Chase, Bank of America, Wells Fargo, Citi, HSBC, Barclays, and many more. Our system automatically recognizes the bank format and extracts data accordingly.",
  },
  {
    question: "Can I export to Excel?",
    answer: "Yes! You can export to multiple formats including Excel (.xlsx), CSV, QuickBooks (.qbo), and Xero. All exports maintain perfect formatting with columns for date, description, amount, and balance.",
  },
  {
    question: "Do you keep my files?",
    answer: "No. Your files are automatically and permanently deleted from our servers within 24 hours of processing. We do not retain any copies of your bank statements or extracted data.",
  },
  {
    question: "Do I need to install anything?",
    answer: "Not at all. StatementFlow works entirely in your web browser. There's no software to download, install, or update. Just upload your PDF and get your Excel file instantly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-primary-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about StatementFlow.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
