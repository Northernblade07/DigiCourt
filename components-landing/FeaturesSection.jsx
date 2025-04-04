// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faFileAlt,
//   faCalendarAlt,
//   faChartLine,
//   faUsers,
//   faSearch,
//   faShieldAlt,
//   faChevronRight,
//   faLightbulb
// } from '@fortawesome/free-solid-svg-icons';

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: faFileAlt,
//       title: 'Digital Filing',
//       description: 'Submit and manage court documents electronically, reducing paper waste and streamlining the filing process.',
//       color: 'indigo'
//     },
//     {
//       icon: faCalendarAlt,
//       title: 'Case Scheduling',
//       description: 'Efficiently manage court calendars, schedule hearings, and send automated notifications to all parties.',
//       color: 'blue'
//     },
//     {
//       icon: faChartLine,
//       title: 'Analytics Dashboard',
//       description: 'Gain insights into case trends, processing times, and court performance through detailed analytics.',
//       color: 'purple'
//     },
//     {
//       icon: faUsers,
//       title: 'Stakeholder Collaboration',
//       description: 'Secure communication channels between judges, clerks, lawyers, and other case participants.',
//       color: 'teal'
//     },
//     {
//       icon: faSearch,
//       title: 'Advanced Search',
//       description: 'Powerful search functionality across case files, documents, and legal references with filters.',
//       color: 'green'
//     },
//     {
//       icon: faShieldAlt,
//       title: 'Security & Compliance',
//       description: 'Enterprise-grade security with role-based access controls and audit trails for all actions.',
//       color: 'red'
//     }
//   ];

//   return (
//     <section className="py-20 bg-white" id="features">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-indigo-900 mb-4">
//             Powerful Features for Modern Courts
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our platform offers comprehensive tools designed to streamline court operations
//             and improve access to justice for all stakeholders.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div 
//               key={index}
//               className="group p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
//             >
//               <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${feature.color}-50 transition-colors`}>
//                 <FontAwesomeIcon 
//                   icon={feature.icon} 
//                   className={`text-xl text-${feature.color}-600`} 
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//               <div className="mt-4">
//                 <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
//                   Learn more
//                   <FontAwesomeIcon 
//                     icon={faChevronRight} 
//                     className="text-xs mt-0.5" 
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-indigo-50 p-8 rounded-xl border border-indigo-100">
//           <div className="flex flex-col md:flex-row items-center gap-6">
//             <div className="flex-shrink-0">
//               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
//                 <FontAwesomeIcon 
//                   icon={faLightbulb} 
//                   className="text-2xl text-indigo-600" 
//                 />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2 text-indigo-900">Integrated Workflow Solution</h3>
//               <p className="text-gray-700">
//                 JusticeFlow seamlessly connects all aspects of case management into a unified platform, eliminating 
//                 the need for multiple disconnected systems. Our end-to-end solution covers everything from initial 
//                 filing to final disposition, with customizable workflows for different case types.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt,
  faCalendarAlt,
  faChartLine,
  faUsers,
  faSearch,
  faShieldAlt,
  faChevronRight,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const colorMap = {
    indigo: "bg-indigo-100 text-indigo-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    teal: "bg-teal-100 text-teal-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600"
  };

  const features = [
    {
      icon: faFileAlt,
      title: 'Digital Filing',
      description: 'Submit and manage court documents electronically, reducing paper waste and streamlining the filing process.',
      color: 'indigo'
    },
    {
      icon: faCalendarAlt,
      title: 'Case Scheduling',
      description: 'Efficiently manage court calendars, schedule hearings, and send automated notifications to all parties.',
      color: 'yellow'
    },
    {
      icon: faChartLine,
      title: 'Analytics Dashboard',
      description: 'Gain insights into case trends, processing times, and court performance through detailed analytics.',
      color: 'purple'
    },
    {
      icon: faUsers,
      title: 'Stakeholder Collaboration',
      description: 'Secure communication channels between judges, clerks, lawyers, and other case participants.',
      color: 'teal'
    },
    {
      icon: faSearch,
      title: 'Advanced Search',
      description: 'Powerful search functionality across case files, documents, and legal references with filters.',
      color: 'green'
    },
    {
      icon: faShieldAlt,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with role-based access controls and audit trails for all actions.',
      color: 'red'
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Powerful Features for Modern Courts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers comprehensive tools designed to streamline court operations
            and improve access to justice for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:opacity-80 transition-colors ${colorMap[feature.color]}`}>
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className="text-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <div className="mt-4">
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
                  Learn more
                  <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className="text-xs mt-0.5" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 p-8 rounded-xl border border-indigo-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faLightbulb} 
                  className="text-2xl text-indigo-600" 
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">Integrated Workflow Solution</h3>
              <p className="text-gray-700">
                JusticeFlow seamlessly connects all aspects of case management into a unified platform, eliminating 
                the need for multiple disconnected systems. Our end-to-end solution covers everything from initial 
                filing to final disposition, with customizable workflows for different case types.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
