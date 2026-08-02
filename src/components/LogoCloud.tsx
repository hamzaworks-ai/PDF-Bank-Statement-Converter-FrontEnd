"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp", "GlobalBank", "FinanceHub", "AccountPro", "BookkeepCo", 
  "AuditFlow", "TaxMaster", "LedgerPlus", "PayTrack", "WealthWise"
];

export default function LogoCloud() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 font-medium mb-8"
        >
          Trusted by thousands of accountants and finance professionals
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="h-8 md:h-10 px-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-xs md:text-sm font-semibold text-slate-400">{logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
