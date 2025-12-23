import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  GitBranch,
  ArrowUp,
  Server,
  Database,
  Layout,
  CreditCard,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center">
              <User className="w-5 h-5 mr-2 text-indigo-400" />
              About Me
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Subash Khulal, a Node.js backend developer crafting scalable APIs with Express.js, MongoDB, and payment integrations.
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-indigo-400" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <Home className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#hero" className="hover:text-indigo-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <User className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#about" className="hover:text-indigo-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#skills" className="hover:text-indigo-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#projects" className="hover:text-indigo-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#contact" className="hover:text-indigo-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3: Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-3 flex items-center">
              <Code className="w-5 h-5 mr-2 text-indigo-400" />
              Tech Stack
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <Server className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  Node.js & Express.js
                </a>
              </li>
              <li className="flex items-center">
                <Database className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="https://www.mongodb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  MongoDB
                </a>
              </li>
              <li className="flex items-center">
                <Layout className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  React & Tailwind CSS
                </a>
              </li>
              <li className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-indigo-400" />
                <a
                  href="https://khalti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors duration-200"
                >
                  Khalti, eSewa, Stripe
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media, Resources, and Copyright */}
        <div className="border-t border-gray-700 pt-4 flex flex-col items-center">
          <div
            className="text-lg font-bold text-gray-100 mb-3 cursor-pointer hover:text-indigo-400 transition-colors duration-200"
            onClick={scrollToTop}
          >
            Subash Khulal
          </div>
          <div className="flex space-x-6 mb-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/subash-khulal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/subashkhulal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-all duration-200 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <div className="flex space-x-6 mb-3 text-sm text-gray-300">
            <a
              href="https://github.com/subashkhulal/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-indigo-400 transition-colors duration-200"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              Portfolio Repository
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; 2025 Subash Khulal. All rights reserved.</p>
        </div>
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}