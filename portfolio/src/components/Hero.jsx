import profile from '../assets/profile.jpeg'; 

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src={profile} alt="Subash Khulal" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
        <h1 className="text-4xl font-bold mb-2">Hello, I'm Subash Khulal</h1>
        <p className="text-xl mb-6">Node.js Backend Software Developer | Building scalable apps with modern tech</p>
        <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Get in Touch</a>
      </div>
    </section>
  );
}