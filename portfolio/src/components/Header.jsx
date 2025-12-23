import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 cursor-pointer">Subash Khulal</div>
        <ul className="flex space-x-6">
          <li className="flex items-center">
            <Home className="w-5 h-5 mr-1 text-gray-600 cursor-pointer" />
            <a href="#hero" className="text-gray-600 hover:text-gray-900">Home</a>
          </li>
          <li className="flex items-center">
            <User className="w-5 h-5 mr-1 text-gray-600 cursor-pointer" />
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          </li>
          <li className="flex items-center">
            <Code className="w-5 h-5 mr-1 text-gray-600 cursor-pointer" />
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          </li>
          <li className="flex items-center">
            <Briefcase className="w-5 h-5 mr-1 text-gray-600 cursor-pointer" />
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          </li>
          <li className="flex items-center">
            <Mail className="w-5 h-5 mr-1 text-gray-600 cursor-pointer" />
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}