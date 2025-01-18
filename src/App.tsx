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
      <div className="min-h-screen bg-gradient-to-r from-[#2ECC71]/10 to-[#34495E]/10 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#2ECC71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#34495E] mb-4">
              You're on the Waiting List! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Due to overwhelming demand, we've added you to our priority waiting list. We're experiencing high volume of new users!
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                We'll notify you as soon as we can accommodate new users. In the meantime:
              </p>
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2ECC71] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Follow us on social media for updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2ECC71] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Check your email for confirmation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2ECC71] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>We'll contact you within 48 hours</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowWaitingList(false)}
                className="inline-flex items-center px-6 py-3 bg-[#2ECC71] text-white font-semibold rounded-lg hover:bg-[#27AE60] transition-colors"
              >
                Back to Home
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </button>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-[#34495E] text-[#34495E] hover:bg-[#34495E] hover:text-white font-semibold rounded-lg transition-colors"
              >
                Follow Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[#2ECC71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold text-[#34495E]">WhatsApp Tool</span>
              </div>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2ECC71]/10 to-[#34495E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Simplify Guest Communication with WhatsApp
              </h1>
              <p className="text-xl text-[#34495E] mb-2">
                Join 500+ property managers already saving time and improving guest satisfaction!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Automate guest communication, enhance your workflow, and free up hours every week.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center px-6 py-3 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold rounded-lg transition-colors"
                >
                  Try It Free Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-6 py-3 border-2 border-[#34495E] text-[#34495E] hover:bg-[#34495E] hover:text-white font-semibold rounded-lg transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800&h=600"
                alt="WhatsApp Tool Interface"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-[#2ECC71]">Average Time Saved</p>
                <p className="text-2xl font-bold text-[#34495E]">5hrs/week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#34495E] mb-8">
              Managing Guest Communication Can Be Overwhelming
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Common Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Guests expect instant replies 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Manual messaging is time-consuming</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Important details get missed</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2ECC71] mb-4">Our Solution</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#2ECC71] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Automated pre-arrival messages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#2ECC71] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">One-click check-in instructions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#2ECC71] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Timely follow-ups and feedback requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#34495E] mb-12">
            Why Property Managers Love Our Tool
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <svg className="w-12 h-12 text-[#2ECC71] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                Automated Messaging
              </h3>
              <p className="text-gray-600">
                Pre-stay, in-stay, and post-stay messages sent automatically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <svg className="w-12 h-12 text-[#2ECC71] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                Customisable Templates
              </h3>
              <p className="text-gray-600">
                Personalise messages to match your property's tone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <svg className="w-12 h-12 text-[#2ECC71] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                WhatsApp Integration
              </h3>
              <p className="text-gray-600">
                Send messages directly without technical hassle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <svg className="w-12 h-12 text-[#2ECC71] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                Track Success
              </h3>
              <p className="text-gray-600">
                Get analytics on message delivery and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Comparison */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#34495E] mb-12">
            See The Difference
          </h2>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-[#34495E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Manual Messaging</th>
                  <th className="px-6 py-4 text-center">Our Tool</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Time Spent Daily</td>
                  <td className="px-6 py-4 text-center">2-3 hours</td>
                  <td className="px-6 py-4 text-center text-[#2ECC71] font-semibold">15 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Response Time</td>
                  <td className="px-6 py-4 text-center">Hours</td>
                  <td className="px-6 py-4 text-center text-[#2ECC71] font-semibold">Instant</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Personalization</td>
                  <td className="px-6 py-4 text-center">Manual</td>
                  <td className="px-6 py-4 text-center text-[#2ECC71] font-semibold">Automated</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Guest Satisfaction</td>
                  <td className="px-6 py-4 text-center">Varies</td>
                  <td className="px-6 py-4 text-center text-[#2ECC71] font-semibold">Consistently High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#34495E] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto grid gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                Do I need technical skills to use this tool?
              </h3>
              <p className="text-gray-600">
                Not at all! If you can use WhatsApp, you can use our tool. The interface is intuitive and user-friendly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                Does it work with Airbnb and Booking.com guests?
              </h3>
              <p className="text-gray-600">
                Yes! Our tool works with guests from any platform as long as you have their phone number.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#34495E] mb-2">
                Can I customise the message templates?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can create and customize all message templates to match your property's brand and style.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="bg-gradient-to-r from-[#34495E] to-[#2ECC71] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">See It in Action</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-white text-[#34495E] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Watch Demo Video
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-8 py-4 bg-[#F1C40F] text-[#34495E] font-semibold rounded-lg hover:bg-[#F39C12] transition-colors"
            >
              Try Live Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#34495E] mb-12">
            What Property Managers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Thompson',
                role: 'B&B Owner',
                company: 'Seaside Retreats',
                quote: 'This tool saved me hours every week! The automated messages are a game-changer.'
              },
              {
                name: 'Tom Anderson',
                role: 'Property Manager',
                company: '10+ Luxury Units',
                quote: "It's like having an assistant for guest communication. Highly recommend!"
              },
              {
                name: 'Anna Rodriguez',
                role: 'Boutique Hotel Manager',
                company: 'Urban Stays',
                quote: 'Our guests love the personal touch and quick responses. Best investment ever!'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex text-[#F1C40F] mb-4">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#34495E] rounded-full mr-3 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#34495E]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#34495E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb- 4">
            Start Saving Time Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of property managers already using our tool
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-8 py-4 bg-[#2ECC71] text-white font-semibold rounded-lg hover:bg-[#27AE60] transition-colors"
            >
              Try It Free Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-white text-[#34495E] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">WhatsApp Messaging Tool</h3>
              <p className="text-sm">
                Simplifying property management communication one message at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li>Automated Messaging</li>
                <li>Message Templates</li>
                <li>WhatsApp Integration</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 WhatsApp Messaging Tool. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sign Up Modal */}
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
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
              <p className="text-sm text-gray-500 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;