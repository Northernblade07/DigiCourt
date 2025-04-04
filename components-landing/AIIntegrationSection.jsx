import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain,
  faLightbulb,
  faChartLine // Alternative if faChartNetwork isn't available
} from '@fortawesome/free-solid-svg-icons'; // or free-solid-svg-icons if using free version

const AIIntegrationSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            AI-Powered Justice Delivery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced AI integration revolutionizes the judicial process, making it faster, more accurate, and more accessible.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://public.readdy.ai/ai/img_res/0ddb35bbd29aecfbb21849c556a08a64.jpg"
              alt="AI Integration"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBrain} className="text-xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Case Analysis Automation</h3>
              </div>
              <p className="text-gray-600">
                AI algorithms analyze case documents, precedents, and legal texts to provide quick insights and recommendations to judges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Predictive Analytics</h3>
              </div>
              <p className="text-gray-600">
                Machine learning models predict case outcomes and timelines, helping in better resource allocation and case prioritization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Smart Judicial Suggestions</h3>
              </div>
              <p className="text-gray-600">
                AI-powered system provides intelligent recommendations for case precedents, relevant statutes, and similar case histories to assist judicial decision-making.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center text-indigo-900 mb-8">AI Impact on Justice Delivery</h3>
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Faster Case Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Accuracy in Predictions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Reduced Backlog</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationSection;