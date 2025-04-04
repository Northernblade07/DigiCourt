"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faLock,
  faKey,
  faSignInAlt,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
// import React from "react";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useNotification } from "../components/Notification";
// import Link from "next/link";


const LoginModal = ({ 
  showLoginModal,
  setShowLoginModal,  
  loginType,
  loginForm,
  setLoginForm,
  handleSubmitLogin
}) => {
  if (!showLoginModal) return null;

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [SecretCode, setSecretCode] = useState('');
    const router = useRouter();

 const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(result)
    if (!result || !result.ok) {
      // You can log the actual error or show it to the user
      console.error("Login failed:", result?.error);
      router.push('/error'); // or show a toast instead
    } else {
      const session = await getSession();

      const userId = session?.user?.id;
      const role = session?.user?.role;
  
      if (!userId || !role) {
        router.push("/error");
        return;
      }
  
      // Redirect to dynamic dashboard
      router.push(`/${role.toLowerCase()}/${userId}`);
    }
  };


  const getLoginTitle = () => {
    switch(loginType) {
      case 'Clerk': return 'Court Staff Login';
      case 'Judge': return 'Judicial Login';
      default: return 'User Login';
    }
  };

  const handleClose = () => {
    // Clear the form when closing
    setLoginForm({ email: '', password: '' });
    setShowLoginModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[480px] p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-900">
              {getLoginTitle()}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Please enter your credentials to continue
            </p>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-indigo-600" />
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2 text-indigo-600" />
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {(loginType === 'clerk' || loginType === 'judge') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FontAwesomeIcon icon={faKey} className="mr-2 text-indigo-600" />
                Secret Key
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Enter your secret key"
                value={SecretCode}
                onChange={(e)=>setSecretCode(e.target.value)}
              />
            </div>
          )}

          <div className="flex items-center justify-between py-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded text-indigo-600 border-2 border-gray-300 focus:ring-indigo-500" 
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                Remember me
              </span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
              Forgot password?
            </a>
          </div>

        {/* <div className="mt-8"> */}
          <button type='submit'
            className="w-full !rounded-button whitespace-nowrap px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-[1.02] transition-all duration-200 font-medium text-lg"
            // onClick={handleSubmitLogin}
            >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Sign In
          </button>
        {/* </div> */}
            </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Need help? Contact{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline">
            technical support
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;