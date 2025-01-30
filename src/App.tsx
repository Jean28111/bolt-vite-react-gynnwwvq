import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showWaitingList, setShowWaitingList] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setShowWaitingList(true);
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (showWaitingList) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-[#34495E] mb-4">
            You're on the Waiting List! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you! We'll notify you when we’re ready.
          </p>
          <button
            onClick={() => setShowWaitingList(false)}
            className="px-6 py-3 bg-[#2ECC71] text-white font-semibold rounded-lg hover:bg-[#27AE60] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center px-4 py-2 bg-[#2ECC71] text-white font-semibold rounded-lg hover:bg-[#27AE60] transition-colors text-sm"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <div className="bg-gradient-to-r from-[#2ECC71]/10 to-[#34495E]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simplify Guest Communication with WhatsApp
          </h1>
          <p className="text-xl text-[#34495E] mb-6">
            Join 500+ property managers already saving time and improving guest satisfaction!
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-6 py-3 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold rounded-lg transition-colors"
          >
            Try It Free Today
          </button>
        </div>
      </div>

      {/* ✅ Features Section (Ensure this stays intact) */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#34495E] mb-8">
            Why Property Managers Love Our Tool
          </h2>
          <p className="text-lg text-gray-600">
            Automate guest communication, enhance your workflow, and free up hours every week.
          </p>
        </div>
      </div>

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
