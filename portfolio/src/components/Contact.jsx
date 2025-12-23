

// import { useState } from 'react';
// import { Mail, Phone } from 'lucide-react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validate form inputs
//     if (!formData.name.trim()) {
//       toast.error('Name is required', { position: 'top-right', autoClose: 3000 });
//       setIsSubmitting(false);
//       return;
//     }
//     if (!formData.email.trim()) {
//       toast.error('Email is required', { position: 'top-right', autoClose: 3000 });
//       setIsSubmitting(false);
//       return;
//     }
//     if (!validateEmail(formData.email)) {
//       toast.error('Please enter a valid email', { position: 'top-right', autoClose: 3000 });
//       setIsSubmitting(false);
//       return;
//     }
//     if (!formData.message.trim()) {
//       toast.error('Message is required', { position: 'top-right', autoClose: 3000 });
//       setIsSubmitting(false);
//       return;
//     }

//     // Simulate backend API call
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock 1s delay
//       // Replace with actual API call later, e.g.:
//       // const response = await fetch('http://localhost:5000/contact', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(formData),
//       // });
//       // if (!response.ok) throw new Error('Server error');

//       toast.success('Message sent successfully!', { position: 'top-right', autoClose: 3000 });
//       setFormData({ name: '', email: '', message: '' }); // Reset form
//     } catch (error) {
//       toast.error('Failed to send message. Try again later.', { position: 'top-right', autoClose: 3000 });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Contact Me</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
//             <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your Message"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 text-sm md:text-base"
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200 text-sm md:text-base disabled:bg-indigo-400 cursor-pointer"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>
//           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-center">
//             <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h3>
//             <div className="space-y-4 text-center text-gray-700 text-sm md:text-base">
//               <p className="flex items-center justify-center">
//                 <Mail className="w-5 h-5 mr-2 text-indigo-600 cursor-pointer" />
//                 khulalsubash18@gmail.com
//               </p>
//               <p className="flex items-center justify-center">
//                 <Phone className="w-5 h-5 mr-2 text-indigo-600 cursor-pointer" />
//                 9806343506
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// }


import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim()) {
      toast.error('Name is required', { position: 'top-right', autoClose: 3000 });
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.trim()) {
      toast.error('Email is required', { position: 'top-right', autoClose: 3000 });
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email', { position: 'top-right', autoClose: 3000 });
      setIsSubmitting(false);
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Message is required', { position: 'top-right', autoClose: 3000 });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully!', { position: 'top-right', autoClose: 3000 });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Try again later.', { position: 'top-right', autoClose: 3000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 text-sm md:text-base"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200 text-sm md:text-base disabled:bg-indigo-400 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h3>
            <div className="space-y-4 text-center text-gray-700 text-sm md:text-base">
              <p className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-600 cursor-pointer" />
                khulalsubash18@gmail.com
              </p>
              <p className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-600 cursor-pointer" />
                9806343506
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}