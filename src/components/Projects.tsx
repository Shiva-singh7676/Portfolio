import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Weather Forecasting',
    description: 'Built a responsive web app using OpenWeatherMap API to display real-time weather data including temperature, humidity, and a forecast.',
    image: '/pj1.jpg',
    tags: ['HTML','CSS', 'Node.js'],
    github: 'https://github.com/Shiva-singh7676/WeatherNow',
    demo: 'https://r0y15.github.io/WeatherNow/'
  },
  {
    title: 'Travel Management',
    description: 'Developed a web application to manage bookings, destinations, and user itineraries.',
    image: '/pj2.jpg',
    tags: ['HTML','CSS', 'Node.js','MYSQL','PHP'],
    github: 'https://github.com/Shiva-singh7676/DRIWAKE',
    demo: 'https://shiva-singh7676.github.io/DRIWAKE/'
  }
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-dark rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark/50 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
