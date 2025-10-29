import React, { useState } from 'react';
import { Code, Layers, Smartphone, Database, Wrench } from 'lucide-react';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    All: { icon: Code, color: 'cyan' },
    Frontend: { icon: Code, color: 'cyan' },
    Backend: { icon: Layers, color: 'blue' },
    Mobile: { icon: Smartphone, color: 'purple' },
    Database: { icon: Database, color: 'green' },
    Tools: { icon: Wrench, color: 'orange' }
  };

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(categories).map((category) => {
            const Icon = categories[category].icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50 scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
              </div>
              
              {/* Skill bar */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/10">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;