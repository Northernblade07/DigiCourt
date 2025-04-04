import React from 'react';
// import { useNavigate } from 'react-router-dom';

const HeroSection = ({ handleLearnMore,handleGetStarted }) => {
  return (
    <div className="pt-16 relative">
      <div className="h-[600px] bg-cover bg-center relative" style={{
        backgroundImage: `url('https://public.readdy.ai/ai/img_res/a38cc5e844e3cf6fffd9222fee927419.jpg')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-indigo-900 mb-6">
                Streamline Your Court Case Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                JusticeFlow is a comprehensive digital platform that modernizes court operations,
                enabling efficient case management, seamless document handling, and improved
                communication between all stakeholders.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleGetStarted}
                  className="rounded-[5px] whitespace-nowrap px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105 transition-transform duration-200"
                >
                  Get Started
                </button>
                <button
                  onClick={handleLearnMore}
                  className="rounded-[5px] whitespace-nowrap px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-transform duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;