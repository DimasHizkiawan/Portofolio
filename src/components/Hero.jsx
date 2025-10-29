import React from 'react';
import { ArrowDown, Github, Instagram } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated greeting */}
          <div className="inline-block mb-4 animate-slideDown">
            <span className="text-cyan-400 font-mono text-sm md:text-base tracking-wider">Hi there!</span>
          </div>

          {/* Main heading with stagger animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slideUp">
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient">
              {data.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {data.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            {data.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12 animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-block text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;