// import React, { useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

// const NotificationToast = ({
//   showNotification,
//   notificationMessage,
//   type = 'info'
// }) => {
//   const [visible, setVisible] = React.useState(showNotification);

//   useEffect(() => {
//     setVisible(showNotification);
//     if (showNotification) {
//       const timer = setTimeout(() => setVisible(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showNotification]);

//   if (!visible) return null;

//   const bgColor = {
//     success: 'bg-green-500',
//     error: 'bg-red-500',
//     warning: 'bg-yellow-500',
//     info: 'bg-blue-500'
//   }[type];

//   return (
//     <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-4 animate-fade-in-up`}>
//       <div className="flex-1">
//         {notificationMessage}
//       </div>
//       <button
//         onClick={() => setVisible(false)}
//         className="text-white hover:text-gray-200 focus:outline-none"
//       >
//         <faTimes />
//       </button>
//     </div>
//   );
// };

// export default NotificationToast;

import React from "react";

const NotificationToast = ({ showNotification, notificationMessage }) => {
  if (!showNotification) return null;

  return (
    <div className="fixed top-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
      {notificationMessage}
    </div>
  );
};

export default NotificationToast;
