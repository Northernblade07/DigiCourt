// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faUserTie,
//   faGavel,
//   faEnvelope,
//   faLock,
//   faKey,
//   faShieldAlt,
//   faBolt,
//   faMobileAlt,
//   faUserPlus,
//   faInfoCircle,
//   faQuestionCircle,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegistrationPage = () => {
//   const [userType, setuserType] = useState("public");
//   const [registrationForm, setRegistrationForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     secretKey: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const navigate = useNavigate();

//   const handleAccountTypeChange = (type) => {
//     setuserType(type);
//     // Reset form when changing account type
//     setRegistrationForm({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       secretKey: "",
//     });
//     setFormErrors({});
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (userType !== "public" && !registrationForm.name) {
//       errors.name = "Full name is required";
//     }

//     if (!registrationForm.email) {
//       errors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registrationForm.email)) {
//       errors.email = "Please enter a valid email";
//     }

//     if (!registrationForm.password) {
//       errors.password = "Password is required";
//     } else if (registrationForm.password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }

//     if (registrationForm.password !== registrationForm.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     if (
//       (userType === "clerk" || userType === "judge") &&
//       !registrationForm.secretKey
//     ) {
//       errors.secretKey = "Secret key is required";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmitRegistration = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Registration submitted:", {
//         accountType: userType,
//         ...registrationForm,
//       });
//       showSuccessToast('Account created successfully!');
//       navigate("/");
//     }
//   };

//   const showSuccessToast = (message) => {
//     // You can implement a toast notification here
//     setToastMessage(message);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//     alert(message); // Temporary solution - replace with your toast component
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-5">
//             {/* Left side - Image and info */}
//             <div className="col-span-2 bg-indigo-700 text-white p-10 flex flex-col justify-between relative overflow-hidden">
//               <div className="absolute inset-0 opacity-20">
//                 <img
//                   src="https://public.readdy.ai/ai/img_res/0e5296bfbf9d6614db50edb09a71b3ff.jpg"
//                   alt="Justice Technology"
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               <div className="relative z-10">
//                 <h2 className="text-3xl font-bold mb-6">Join NyayaSetu</h2>
//                 <p className="text-indigo-100 mb-8">
//                   Create your account to access India's premier digital justice
//                   platform. Streamlined court processes, transparent case
//                   tracking, and improved access to justice.
//                 </p>

//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
//                       <FontAwesomeIcon
//                         icon={faShieldAlt}
//                         className="text-white"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg">Secure Access</h3>
//                       <p className="text-indigo-200 text-sm">
//                         Role-based authentication ensures data security and
//                         privacy
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
//                       <FontAwesomeIcon icon={faBolt} className="text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg">Instant Updates</h3>
//                       <p className="text-indigo-200 text-sm">
//                         Real-time notifications on case status and hearing
//                         schedules
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
//                       <FontAwesomeIcon
//                         icon={faMobileAlt}
//                         className="text-white"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg">Mobile Access</h3>
//                       <p className="text-indigo-200 text-sm">
//                         Access your case information anytime, anywhere
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative z-10 mt-12">
//                 <p className="text-sm text-indigo-200">
//                   Already have an account?{" "}
//                   <button
//                     className="text-white hover:underline font-medium"
//                     onClick={() => navigate("/")}
//                   >
//                     Sign in
//                   </button>
//                 </p>
//               </div>
//             </div>

//             {/* Right side - Registration form */}
//             <div className="col-span-3 p-10">
//               <div className="max-w-lg mx-auto">
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     Create Your Account
//                   </h2>
//                   <button
//                     onClick={() => navigate("/")}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <FontAwesomeIcon icon={faTimes} size="lg" />
//                   </button>
//                 </div>

//                 <div className="mb-8">
//                   <h4 className="text-sm font-medium text-gray-700 mb-3">
//                     Select Account Type
//                   </h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                     <button
//                       className={`rounded-lg whitespace-nowrap p-4 flex flex-col items-center justify-center border-2 transition-all ${
//                         userType === "public"
//                           ? "border-indigo-600 bg-indigo-50 text-indigo-700"
//                           : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
//                       }`}
//                       onClick={() => handleAccountTypeChange("public")}
//                     >
//                       <FontAwesomeIcon icon={faUser} className="text-xl mb-2" />
//                       <span>Public User</span>
//                     </button>
//                     <button
//                       className={`rounded-lg whitespace-nowrap p-4 flex flex-col items-center justify-center border-2 transition-all ${
//                         userType === "clerk"
//                           ? "border-indigo-600 bg-indigo-50 text-indigo-700"
//                           : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
//                       }`}
//                       onClick={() => handleAccountTypeChange("clerk")}
//                     >
//                       <FontAwesomeIcon
//                         icon={faUserTie}
//                         className="text-xl mb-2"
//                       />
//                       <span>Court Clerk</span>
//                     </button>
//                     <button
//                       className={`rounded-lg whitespace-nowrap p-4 flex flex-col items-center justify-center border-2 transition-all ${
//                         userType === "judge"
//                           ? "border-indigo-600 bg-indigo-50 text-indigo-700"
//                           : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
//                       }`}
//                       onClick={() => handleAccountTypeChange("judge")}
//                     >
//                       <FontAwesomeIcon
//                         icon={faGavel}
//                         className="text-xl mb-2"
//                       />
//                       <span>Judge</span>
//                     </button>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmitRegistration} className="space-y-5">
//                   {(userType === "clerk" ||
//                     userType === "judge") && (
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         <FontAwesomeIcon
//                           icon={faUser}
//                           className="mr-2 text-indigo-600"
//                         />
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         className={`w-full px-4 py-3 border-2 ${
//                           formErrors.name ? "border-red-300" : "border-gray-200"
//                         } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
//                         placeholder="Enter your full name"
//                         value={registrationForm.name}
//                         onChange={(e) =>
//                           setRegistrationForm({
//                             ...registrationForm,
//                             name: e.target.value,
//                           })
//                         }
//                       />
//                       {formErrors.name && (
//                         <p className="mt-1 text-sm text-red-500">
//                           {formErrors.name}
//                         </p>
//                       )}
//                     </div>
//                   )}

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FontAwesomeIcon
//                         icon={faEnvelope}
//                         className="mr-2 text-indigo-600"
//                       />
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       className={`w-full px-4 py-3 border-2 ${
//                         formErrors.email ? "border-red-300" : "border-gray-200"
//                       } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
//                       placeholder="Enter your email"
//                       value={registrationForm.email}
//                       onChange={(e) =>
//                         setRegistrationForm({
//                           ...registrationForm,
//                           email: e.target.value,
//                         })
//                       }
//                     />
//                     {formErrors.email && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {formErrors.email}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FontAwesomeIcon
//                         icon={faLock}
//                         className="mr-2 text-indigo-600"
//                       />
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className={`w-full px-4 py-3 border-2 ${
//                         formErrors.password
//                           ? "border-red-300"
//                           : "border-gray-200"
//                       } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
//                       placeholder="Create a password (min. 8 characters)"
//                       value={registrationForm.password}
//                       onChange={(e) =>
//                         setRegistrationForm({
//                           ...registrationForm,
//                           password: e.target.value,
//                         })
//                       }
//                     />
//                     {formErrors.password && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {formErrors.password}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <FontAwesomeIcon
//                         icon={faLock}
//                         className="mr-2 text-indigo-600"
//                       />
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       className={`w-full px-4 py-3 border-2 ${
//                         formErrors.confirmPassword
//                           ? "border-red-300"
//                           : "border-gray-200"
//                       } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
//                       placeholder="Confirm your password"
//                       value={registrationForm.confirmPassword}
//                       onChange={(e) =>
//                         setRegistrationForm({
//                           ...registrationForm,
//                           confirmPassword: e.target.value,
//                         })
//                       }
//                     />
//                     {formErrors.confirmPassword && (
//                       <p className="mt-1 text-sm text-red-500">
//                         {formErrors.confirmPassword}
//                       </p>
//                     )}
//                   </div>

//                   {(userType === "clerk" ||
//                     userType === "judge") && (
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         <FontAwesomeIcon
//                           icon={faKey}
//                           className="mr-2 text-indigo-600"
//                         />
//                         Secret Key
//                       </label>
//                       <input
//                         type="password"
//                         className={`w-full px-4 py-3 border-2 ${
//                           formErrors.secretKey
//                             ? "border-red-300"
//                             : "border-gray-200"
//                         } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
//                         placeholder="Enter your authorized secret key"
//                         value={registrationForm.secretKey}
//                         onChange={(e) =>
//                           setRegistrationForm({
//                             ...registrationForm,
//                             secretKey: e.target.value,
//                           })
//                         }
//                       />
//                       {formErrors.secretKey && (
//                         <p className="mt-1 text-sm text-red-500">
//                           {formErrors.secretKey}
//                         </p>
//                       )}
//                       <p className="mt-1 text-xs text-gray-500">
//                         <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
//                         Secret keys are provided by the court administration to
//                         authorized personnel only.
//                       </p>
//                     </div>
//                   )}

//                   <div className="mt-2">
//                     <label className="flex items-center gap-2 cursor-pointer group">
//                       <input
//                         type="checkbox"
//                         required
//                         className="w-4 h-4 rounded text-indigo-600 border-2 border-gray-300 focus:ring-indigo-500"
//                       />
//                       <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
//                         I agree to the{" "}
//                         <a href="#" className="text-indigo-600 hover:underline">
//                           Terms of Service
//                         </a>{" "}
//                         and{" "}
//                         <a href="#" className="text-indigo-600 hover:underline">
//                           Privacy Policy
//                         </a>
//                       </span>
//                     </label>
//                   </div>

//                   <div className="mt-8">
//                     <button
//                       type="submit"
//                       className="w-full rounded-lg whitespace-nowrap px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-[1.02] transition-all duration-200 font-medium text-lg"
//                       // onClick={() => navigate('/')}
//                     >
//                       <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
//                       Create Account
//                     </button>
//                   </div>
//                 </form>

//                 <div className="mt-8 pt-6 border-t border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm text-gray-500">
//                       <FontAwesomeIcon icon={faShieldAlt} className="mr-1" />
//                       Your data is encrypted and secure
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       <FontAwesomeIcon
//                         icon={faQuestionCircle}
//                         className="mr-1"
//                       />
//                       <a href="#" className="text-indigo-600 hover:underline">
//                         Need help?
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserTie,
  faGavel,
  faEnvelope,
  faLock,
  faKey,
  faShieldAlt,
  faBolt,
  faMobileAlt,
  faUserPlus,
  faInfoCircle,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";

const RegistrationPage = ({setLoginType}) => {
  const { showLoginModal, loginType } = useSelector((state) => state);
    const dispatch = useDispatch();
  // const [userType, setuserType] = useState("user");
  // const [registrationForm, setRegistrationForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   secretKey: "",
  // });
  const router = useRouter();
  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAccountTypeChange = (type) => {
    setUserType(type);
    // setRegistrationForm({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   secretKey: "",
    // });
    setFormErrors({});
  };
  const validateForm = () => {
    const errors = {};
    let isValid = true;
  
    if ((userType === "clerk" || userType === "judge") && !username.trim()) {
      errors.name = "Full name is required";
      isValid = false;
    }
  
    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }
  
    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter";
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one number";
      isValid = false;
    }
  
    if (password !== confirmpassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }
  
    if ((userType === "clerk" || userType === "judge") && !secretCode.trim()) {
      errors.secretKey = "Secret key is required";
      isValid = false;
    }
  
    setFormErrors(errors);
    return isValid;
  };
  
  const handleLogin = (type) => {
    dispatch({ type: 'SET_LOGIN_TYPE', payload: type });
    dispatch({ type: 'SHOW_LOGIN_MODAL' }); 
    // setLoginType(type);
    // setShowLoginModal(true);
};

// Simulate API call
// await new Promise(resolve => setTimeout(resolve, 1500));



// toast.success("Account created successfully! Redirecting...", {
  //   position: "top-right",
  //   autoClose: 3000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// });

// // Reset form
// setRegistrationForm({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   secretKey: "",
  // });
  
// // Redirect after delay
// setTimeout(() => {
//   navigate("/")
//   handleLogin(userType)

  

// }, 1000);
const handleSubmitRegistration = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    toast.error("Please fix all form errors before submitting", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }

  if (password !== confirmpassword) {
    setError("Passwords do not match");
    toast.error("❌ Passwords do not match", {
      position: "top-right",
      autoClose: 4000,
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch(`/api/auth/${userType}-signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, secretCode }),
    });

    const data = await res.json();
      console.log(data)
    if (!res.ok) {
      setError(data.error || "Registration failed");
      toast.error(`❌ ${data.error || "Registration failed"}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    toast.success("✅ Account created successfully!", {
      position: "top-right",
      autoClose: 4000,
    });

    // Optional: reset fields or navigate
    // resetForm();
    router.push("/"); // or based on userType
  } catch (error) {
    console.error(error);
    toast.error("❌ Failed to create account. Please try again later.", {
      position: "top-right",
      autoClose: 5000,
    });
  } finally {
    setIsSubmitting(false);
  }
};


return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left side - Image and info */}
            <div className="col-span-2 bg-indigo-700 text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://public.readdy.ai/ai/img_res/0e5296bfbf9d6614db50edb09a71b3ff.jpg"
                  alt="Justice Technology"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Join NyayaSetu</h2>
                <p className="text-indigo-100 mb-8">
                  Create your account to access India's premier digital justice
                  platform. Streamlined court processes, transparent case
                  tracking, and improved access to justice.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <FontAwesomeIcon
                        icon={faShieldAlt}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Secure Access</h3>
                      <p className="text-indigo-200 text-sm">
                        Role-based authentication ensures data security and
                        privacy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <FontAwesomeIcon icon={faBolt} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Instant Updates</h3>
                      <p className="text-indigo-200 text-sm">
                        Real-time notifications on case status and hearing
                        schedules
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Mobile Access</h3>
                      <p className="text-indigo-200 text-sm">
                        Access your case information anytime, anywhere
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <p className="text-sm text-indigo-200">
                  Already have an account?{" "}
                  <button
                    className="text-white hover:underline font-medium"
                    onClick={() => navigate("/")}
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>

            {/* Right side - Registration form */}
            <div className="col-span-3 p-10">
              <div className="max-w-lg mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Create Your Account
                  </h2>
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Select Account Type
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      className={`rounded-lg whitespace-nowrap p-4 flex flex-col items-center justify-center border-2 transition-all ${
                        userType === "user"
                          ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                      onClick={() => setUserType("User")}
                    >
                      <FontAwesomeIcon icon={faUser} className="text-xl mb-2" />
                      <span>Public User</span>
                    </button>
                    <button
                      className={`rounded-lg whitespace-nowrap p-4 flex flex-col items-center justify-center border-2 transition-all ${
                        userType === "Clerk"
                          ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                      onClick={() =>setUserType("Clerk")}
                    >
                      <FontAwesomeIcon
                        icon={faUserTie}
                        className="text-xl mb-2"
                      />
                      <span>Court Clerk</span>
                    </button>
                    <button
                      className={`rounded-lg whitespace-nowrap p-4 flex flex-col items-center justify-center border-2 transition-all ${
                        userType === "judge"
                          ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                      onClick={() => setUserType("Judge")}
                    >
                      <FontAwesomeIcon
                        icon={faGavel}
                        className="text-xl mb-2"
                      />
                      <span>Judge</span>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmitRegistration} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="mr-2 text-indigo-600"
                        />
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 border-2 ${
                          formErrors.name ? "border-red-300" : "border-gray-200"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter your full name"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)
                        }}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="mr-2 text-indigo-600"
                      />
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 border-2 ${
                        formErrors.email ? "border-red-300" : "border-gray-200"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(
                          e.target.value)
                      }
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="mr-2 text-indigo-600"
                      />
                      Password
                    </label>
                    <input
                      type="password"
                      className={`w-full px-4 py-3 border-2 ${
                        formErrors.password
                          ? "border-red-300"
                          : "border-gray-200"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                      placeholder="Create a password (min. 8 characters)"
                      value={password}
                      onChange={(e) =>
                        setPassword(
                           e.target.value
                        )
                      }
                    />
                    {formErrors.password && (
                      <p className="mt-1 text-sm text-red-500">
                        {formErrors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="mr-2 text-indigo-600"
                      />
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className={`w-full px-4 py-3 border-2 ${
                        formErrors.confirmPassword
                          ? "border-red-300"
                          : "border-gray-200"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                      placeholder="Confirm your password"
                      value={confirmpassword}
                      onChange={(e) =>
                        setConfirmpassword(e.target.value)
                      }
                    />
                    {formErrors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-500">
                        {formErrors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {(userType === "Clerk" ||
                    userType === "Judge") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FontAwesomeIcon
                          icon={faKey}
                          className="mr-2 text-indigo-600"
                        />
                        Secret Key
                      </label>
                      <input
                        type="password"
                        className={`w-full px-4 py-3 border-2 ${
                          formErrors.secretKey
                            ? "border-red-300"
                            : "border-gray-200"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                        placeholder="Enter your authorized secret key"
                        value={secretCode }
                        onChange={(e) =>
                          setSecretCode(e.target.value)
                        }
                      />
                      {formErrors.secretKey && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.secretKey}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                        Secret keys are provided by the court administration to
                        authorized personnel only.
                      </p>
                    </div>
                  )}

                  <div className="mt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 rounded text-indigo-600 border-2 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                        I agree to the{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full rounded-lg whitespace-nowrap px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-[1.02] transition-all duration-200 font-medium text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Creating Account..."
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                          Create Account
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      <FontAwesomeIcon icon={faShieldAlt} className="mr-1" />
                      Your data is encrypted and secure
                    </p>
                    <p className="text-sm text-gray-500">
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="mr-1"
                      />
                      <a href="#" className="text-indigo-600 hover:underline">
                        Need help?
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;