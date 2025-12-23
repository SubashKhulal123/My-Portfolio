import { Briefcase, Book } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I'm Subash Khulal, a dedicated Node.js backend developer with a passion for creating efficient, scalable web applications. Currently, I serve as a backend developer at Abacus Digital Agency in Biratnagar, where I focus on building robust server-side solutions. Additionally, I work remotely as a backend developer at Eduvantech in Itahari, handling Node.js-based projects. With a strong foundation in full-stack development, I enjoy integrating payment gateways like Khalti and eSewa, as well as notification systems using Twilio, to deliver seamless user experiences.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Briefcase className="w-6 h-6 mr-2" /> Experience
        </h3>
        <ul className="list-disc text-lg text-gray-600 max-w-3xl mx-auto mb-8 space-y-4">
          <li>Backend Developer at Abacus Digital Agency, Kalopul, Kathmandu (Current) - Developing API endpoints and database integrations for digital projects.</li>
          <li>Remote Backend Developer at Eduvantech, Itahari (Current) - Building Node.js backends for educational tech solutions.</li>
          <li>Remote Backend Developer at Ranga Incorporated ptv.ltd, Kathmandu (2023-2024) - Assisted in full-stack development for e-commerce apps.</li>
        </ul>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Book className="w-6 h-6 mr-2" /> Education
        </h3>
        <ul className="list-disc text-lg text-gray-600 max-w-3xl mx-auto space-y-4">
          <li>+2 from Sushma College, passed out in 2078 BS (2021 AD).</li>
          <li>Bachelor's degree from IIC Itahari International College, graduated in 2024/2025.</li>
        </ul>
      </div>
    </section>
  );
}