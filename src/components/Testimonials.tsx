"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Senior Accountant at FinanceHub",
    avatar: "SM",
    content: "StatementFlow has saved me countless hours. What used to take me an entire day now takes minutes. The accuracy is incredible.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Bookkeeper & Small Business Owner",
    avatar: "MC",
    content: "I was skeptical at first, but the results speak for themselves. Perfect formatting every time. This tool is a game-changer.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Analyst at GlobalBank",
    avatar: "ER",
    content: "The best investment I've made for my workflow. No more manual data entry errors. My team loves how easy it is to use.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Loved by{" "}
            <span className="gradient-text">Professionals</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what accountants and finance teams are saying about StatementFlow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
