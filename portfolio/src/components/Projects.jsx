

import { Link } from 'react-router-dom';
import { ExternalLink, Paintbrush, Shirt, School, Utensils, BookOpen} from 'lucide-react';
import artGallery1 from '../assets/projects/art-gallery1.png';
import babyWholesale2 from '../assets/projects/baby-wholesale2.png';
import edutek1 from '../assets/projects/edutek1.png';
import foodDelivery1 from '../assets/projects/food-delivery1.png';
import elearning1 from '../assets/projects/e-learning1.png';

export default function Projects() {
  const projects = [
    {
      id: 'art-gallery',
      title: 'Online Art Gallery (Final Year Project)',
      description: 'An e-commerce platform for art sales with payment integration.',
      tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Khalti Payment'],
      link: 'https://github.com/SubashKhulal123/Online-Art-Gallery-FYP',
      image: artGallery1,
      icon: Paintbrush,
    },
    {
      id: 'baby-wholesale',
      title: 'Baby Wholesale Nepal (Clothing Store)',
      description: 'A full-stack clothing store app with WhatsApp notifications, located in Itahari Janta Galli.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Twilio'],
       link: 'https://github.com/SubashKhulal123/stockmanagement-new',
      image: babyWholesale2,
      icon: Shirt,
    },
    {
      id: 'edutek',
      title: 'Edutek College',
      description: 'A website for an educational institution with backend management.',
      tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      link: 'https://github.com/SubashKhulal123/Edutek-College', 
      image: edutek1,
      icon: School,
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery App',
      description: 'A delivery platform with multiple payment options and real-time features.',
      tech: ['React', 'Node.js', 'MongoDB', 'eSewa', 'Khalti', 'Stripe'],
      link: 'https://github.com/SubashKhulal123/Food-Delivery-App',
      image: foodDelivery1,
      icon: Utensils,
    },

    {
      id: 'e-learning platform',
      title: 'E-learning Platform',
      description: 'A responsive E-Learning platform with multiple features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/SubashKhulal123/E-Learning-platform', 
      image: elearning1,
      icon: BookOpen,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 md:mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <Link
                key={proj.id}
                to={`/project/${proj.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 block"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 mr-2 text-indigo-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{proj.title}</h3>
                </div>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View on GitHub
                  </a>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">
                    View Details
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}