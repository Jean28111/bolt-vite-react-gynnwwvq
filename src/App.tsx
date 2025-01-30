import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Hidden Form for Netlify Detection */}
      <form name="contact" method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
      </form>

      {/* ✅ Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="ml-2">
              <span className="text-xl font-bold text-[#34495E]">WhatsApp Tool</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-[#2ECC71] text-white font-semibold rounded-lg hover:bg-[#27AE60] transition-colors text-sm"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <div className="bg-gradient-to-r from-[#2ECC71]/10 to-[#34495E]/10 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simplify Guest Communication with WhatsApp
          </h1>
          <p className="text-xl text-[#34495E] mb-2">
            Join 500+ property managers already saving time and improving guest satisfaction!
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Automate guest communication, enhance your workflow, and free up hours every week.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold rounded-lg transition-colors"
            >
              Try It Free Today
            </button>
            <button 
              className="px-6 py-3 border-2 border-[#34495E] text-[#34495E] hover:bg-[#34495E] hover:text-white font-semibold rounded-lg transition-colors"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Problem/Solution Section */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-[#34495E] mb-8">
          Managing Guest Communication Can Be Overwhelming
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-red-600">Common Challenges</h3>
            <ul className="text-gray-600 space-y-2 mt-4">
              <li>Guests expect instant replies 24/7</li>
              <li>Manual messaging is time-consuming</li>
              <li>Important details get missed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">Our Solution</h3>
            <ul className="text-gray-600 space-y-2 mt-4">
              <li>Automated pre-arrival messages</li>
              <li>One-click check-in instructions</li>
              <li>Timely follow-ups and feedback requests</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Features Section */}
      <div className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#34495E] mb-8">
          Why Property Managers Love Our Tool
        </h2>
      </div>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p className="text-sm">© 2024 WhatsApp Messaging Tool. All rights reserved.</p>
      </footer>

      {/* ✅ Modal with Netlify-Compatible Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-[#34495E] mb-6">Start Your Free Trial</h3>

            {/* ✅ Netlify-Compatible Form Inside the Modal */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2ECC71] text-white font-semibold py-3 rounded-lg hover:bg-[#27AE60] transition-colors"
              >
                Start Free Trial
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
