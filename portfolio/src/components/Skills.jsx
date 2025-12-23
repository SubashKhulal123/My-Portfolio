


import {
  Code,
  Server,
  Database,
  Code2,
  FileCode,
  Layout,
  Phone,
  CreditCard,
  Network,
  Box,
  Github,
} from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      name: 'Node.js',
      link: 'https://nodejs.org/',
      icon: Server,
    },
    {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/',
      icon: Database,
    },
    {
      name: 'React',
      link: 'https://react.dev/',
      icon: Code2,
    },
    {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      icon: Code,
    },
    {
      name: 'HTML/CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      icon: FileCode,
    },
    {
      name: 'Tailwind CSS',
      link: 'https://tailwindcss.com/',
      icon: Layout,
    },
    {
      name: 'Twilio',
      link: 'https://www.twilio.com/',
      icon: Phone,
    },
    {
      name: 'Stripe',
      link: 'https://stripe.com/',
      icon: CreditCard,
    },
    {
      name: 'Khalti',
      link: 'https://docs.khalti.com/',
      icon: CreditCard,
    },
    {
      name: 'eSewa',
      link: 'https://esewa.com.np/',
      icon: CreditCard,
    },
    {
      name: 'Git',
      link: 'https://github.com/',
      icon: Github,
    },
    {
      name: 'RESTful APIs',
      link: 'https://restfulapi.net/',
      icon: Network,
    },
    {
      name: 'Express.js',
      link: 'https://expressjs.com/',
      icon: Box,
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 md:mb-12 text-center">My Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <li key={index}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {skill.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}