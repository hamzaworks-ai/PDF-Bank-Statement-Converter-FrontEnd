"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook,
  Mail,
  FileText,
  Shield,
  HelpCircle
} from "lucide-react";

const footerLinks = {
  Product: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#security", label: "Security" },
    { href: "#faq", label: "FAQ" },
  ],
  Company: [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Press" },
  ],
  Resources: [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Help Center" },
    { href: "#", label: "API Reference" },
    { href: "#", label: "Status" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
    { href: "#", label: "GDPR" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">SF</span>
              </div>
              <span className="text-2xl font-bold text-white">StatementFlow</span>
            </Link>
            
            <p className="text-slate-400 mb-6 max-w-xs">
              Convert bank statements into Excel in seconds. Trusted by thousands of finance professionals worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} StatementFlow. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="#" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 text-sm">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 text-sm">
                <FileText className="w-4 h-4" />
                <span>Status</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>Support</span>
              </Link>
              <Link href="mailto:support@statementflow.com" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 text-sm">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
