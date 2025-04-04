import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faGavel,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const PublicAccessSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Public Access Portal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Promoting transparency and accessibility in the judicial system
            through our public access features.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl text-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Case Status Tracking</h3>
            <p className="text-gray-600">
              View real-time status updates of public cases, hearing schedules,
              and court decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faGavel}
                className="text-xl text-purple-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Court Calendar</h3>
            <p className="text-gray-600">
              Access public hearing schedules, court calendars, and upcoming
              case events.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-xl text-indigo-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Document Access</h3>
            <p className="text-gray-600">
              View publicly available court documents, judgments, and case
              summaries.
            </p>
          </div>
        </div>
        <div className="bg-green-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
            Important Notice
          </h3>
          <p className="text-gray-600 text-center">
            Public access is limited to viewing non-confidential case
            information only. This ensures transparency while protecting
            sensitive data. Users can track case progress, view public
            documents, and access court schedules without the ability to modify
            any information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicAccessSection;
