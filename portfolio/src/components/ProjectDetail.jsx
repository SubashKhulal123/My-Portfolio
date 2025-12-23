

import { useParams, Link } from 'react-router-dom';
import { Paintbrush, Shirt, School, Utensils, ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import artGallery1 from '../assets/projects/art-gallery1.png';
import artGallery2 from '../assets/projects/art-gallery2.png';
import artGallery3 from '../assets/projects/art-gallery3.png';
import artGallery4 from '../assets/projects/art-gallery4.png';
import artGallery5 from '../assets/projects/art-gallery5.png';
import babyWholesale1 from '../assets/projects/baby-wholesale1.png';
import babyWholesale2 from '../assets/projects/baby-wholesale2.png';
import babyWholesale3 from '../assets/projects/baby-wholesale3.png';
import babyWholesale4 from '../assets/projects/baby-wholesale4.png';
import babyWholesale5 from '../assets/projects/baby-wholesale5.png';
import edutek1 from '../assets/projects/edutek1.png';
import edutek2 from '../assets/projects/edutek2.png';
import edutek3 from '../assets/projects/edutek3.png';
import edutek4 from '../assets/projects/edutek4.png';
import edutek5 from '../assets/projects/edutek5.png';
import foodDelivery1 from '../assets/projects/food-delivery1.png';
import foodDelivery2 from '../assets/projects/food-delivery2.png';
import foodDelivery6 from '../assets/projects/food-delivery6.png';
import foodDelivery4 from '../assets/projects/food-delivery4.png';
import foodDelivery5 from '../assets/projects/food-delivery5.png';
import elearning1 from '../assets/projects/e-learning1.png';
import elearning2 from '../assets/projects/e-learning2.png';
import elearning3 from '../assets/projects/e-learning3.png';
import elearning4 from '../assets/projects/e-learning4.png';
import elearning5 from '../assets/projects/e-learning5.png';

export default function ProjectDetail() {
  const { id } = useParams();

  const projects = [
    {
      id: 'art-gallery',
      title: 'Online Art Gallery (Final Year Project)',
      description: 'An e-commerce platform for art sales with secure payment integration using Khalti. The platform allows artists to showcase and sell their work, with features like user authentication, artwork browsing, and a shopping cart.',
      tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Khalti Payment'],
      link: 'https://github.com/SubashKhulal123/Online-Art-Gallery-FYP',
      images: [artGallery1, artGallery2, artGallery3, artGallery4, artGallery5],
      icon: Paintbrush,
      features: [
        'User registration and login with JWT authentication.',
        'Artwork gallery with filtering by category and artist.',
        'Secure payment processing via Khalti.',
        'Responsive design for mobile and desktop.',
        'Admin dashboard for managing listings.',
      ],
      challenges: 'Integrating Khalti payment gateway securely and handling asynchronous API calls for real-time updates.',
      outcomes: 'Successfully deployed a fully functional e-commerce platform, used by local artists in Nepal to sell their work online.',
    },
    {
      id: 'baby-wholesale',
      title: 'Baby Wholesale Nepal (Clothing Store)',
      description: 'A full-stack e-commerce app for a clothing store in Itahari Janta Galli, featuring WhatsApp notifications via Twilio. The app supports product browsing, cart management, and order tracking.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Twilio'],
      link: 'https://github.com/SubashKhulal123/stockmanagement-new',
      images: [babyWholesale2, babyWholesale1, babyWholesale3, babyWholesale4, babyWholesale5],
      icon: Shirt,
      features: [
        'Product catalog with search and filter options.',
        'Real-time WhatsApp notifications for order updates.',
        'Secure user authentication and profile management.',
        'Responsive UI built with React and Tailwind CSS.',
        'Admin panel for inventory management.',
      ],
      challenges: 'Implementing Twilio for reliable WhatsApp notifications and optimizing performance for large product catalogs.',
      outcomes: 'Improved customer engagement through automated notifications, leading to a 20% increase in repeat purchases.',
    },
    {
      id: 'edutek',
      title: 'Edutek College',
      description: 'A website for an educational institution in Itahari, with backend management for courses and student data. The platform provides information about programs, faculty, and admissions.',
      tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      link: 'https://github.com/SubashKhulal123/Edutek-College', 
      images: [edutek1, edutek2, edutek3, edutek4, edutek5],
      icon: School,
      features: [
        'Course catalog with detailed descriptions.',
        'Admin dashboard for updating content.',
        'Responsive design for accessibility.',
        'Contact form for inquiries.',
        'SEO optimization for better visibility.',
      ],
      challenges: 'Ensuring fast load times for content-heavy pages and secure data management for student records.',
      outcomes: 'Increased online inquiries by 30% due to improved user experience and SEO.',
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery App',
      description: 'A delivery platform with multiple payment options (eSewa, Khalti, Stripe) and real-time order tracking. Built for the Nepali market, it supports local restaurants and fast delivery.',
      tech: ['React', 'Node.js', 'MongoDB', 'eSewa', 'Khalti', 'Stripe'],
      link: 'https://github.com/SubashKhulal123/Food-Delivery-App',
      images: [foodDelivery1, foodDelivery2, foodDelivery6, foodDelivery4, foodDelivery5],
      icon: Utensils,
      features: [
        'Real-time order tracking with WebSocket integration.',
        'Multiple payment gateways (eSewa, Khalti, Stripe).',
        'Restaurant and menu management system.',
        'User-friendly interface with React.',
        'Push notifications for order updates.',
      ],
      challenges: 'Integrating multiple payment gateways and ensuring real-time updates without performance degradation.',
      outcomes: 'Scaled to support 10+ local restaurants, with a 25% increase in user retention due to reliable payments and tracking.',
    },

    {
      id: 'e-learning platform',
      title: 'E-Learning Platform',
      description: 'A responsive E-Learning platform with multiple features, allowing users to access courses, track progress, and interact with content seamlessly.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/SubashKhulal123/E-Learning-platform',
      images: [elearning1, elearning2, elearning3, elearning4, elearning5],
      icon: BookOpen,
      features: [
        'User authentication and personalized dashboards.',
        'Course enrollment and progress tracking.',
        'Interactive quizzes and video content integration.',
        'Payment integration for premium courses via Stripe.',
        'Responsive design for mobile and desktop access.',
      ],
      challenges: 'Ensuring smooth video streaming and secure payment handling for course purchases.',
      outcomes: 'Enabled users to complete courses efficiently, resulting in high engagement and positive feedback from learners.',
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Project Not Found</h2>
          <Link
            to="/"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const Icon = project.icon;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
        <div className="flex items-center mb-8">
          <Icon className="w-10 h-10 mr-4 text-indigo-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <img
                src={project.images[0]}
                alt={`${project.title} main`}
                className="w-full h-[28rem] object-cover rounded-2xl shadow-lg border border-gray-200"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-36 object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.description}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Challenges</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.challenges}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Outcomes</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.outcomes}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-base transition-colors duration-200"
            >
              <ExternalLink className="w-6 h-6 mr-2" />
              View on GitHub
            </a>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 sticky top-24">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">
                  <strong>Title:</strong> {project.title}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Technologies:</strong> {project.tech.join(', ')}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
                  >
                    View Repository
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}