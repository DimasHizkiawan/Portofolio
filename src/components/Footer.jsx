import React from 'react';
import { Github, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: data.github, label: 'GitHub' },
    { icon: Instagram, url: data.instagram, label: 'Instagram' },
    { icon: Linkedin, url: data.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: data.twitter, label: 'Twitter' }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {data.name}<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              {data.title}
            </p>
            <p className="text-gray-500 text-sm">
              {data.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${data.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              {data.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {data.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-cyan-400 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
