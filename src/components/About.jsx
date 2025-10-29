import React from 'react';
import { User, GraduationCap } from 'lucide-react';

const About = ({ data, education }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <User className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {data.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                <span className="text-gray-400 text-sm">📍 {data.location}</span>
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                <span className="text-gray-400 text-sm">✨ {data.availability}</span>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-400/10 rounded-lg">
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-cyan-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;