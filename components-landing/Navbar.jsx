import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = ({ activeSection, setActiveSection, handleLogin, scrollToSection }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-9xl mx-1 px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBalanceScale}
              className="text-2xl text-indigo-900 animate-bounce"
            />
            <span className="text-xl font-semibold text-indigo-900">
              NyayaSetu
            </span>
          </div>
          <div className="flex items-center gap-8">
            <button
              className={`text-gray-600 hover:text-indigo-900 ${
                activeSection === "home" ? "text-indigo-900" : ""
              }`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection("home");
              }}
            >
              Home
            </button>
            <button
              className={`text-gray-600 hover:text-indigo-900 ${
                activeSection === "features" ? "text-indigo-900" : ""
              }`}
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button
              className={`text-gray-600 hover:text-indigo-900 ${
                activeSection === "about" ? "text-indigo-900" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <div className="flex items-center gap-3">
             
             {/* <Link href={'/user-signup'}> */}
             <button
                className="rounded-[5px] px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
                onClick={() =>{ handleLogin("public")}}
              >
                Public Access
              </button>
                  {/* </Link>  */}
           {/* <Link  href={'/clerk-signup'}> */}
             <button
                className="rounded-[5px] px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                onClick={() => handleLogin("clerk")}
                >
                Registration as a Clerk
              </button>
                {/* </Link>  */}
             {/* <Link href={'/judge-signup'}> */}
              <button
                className="rounded-[5px] px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200"
                onClick={() => handleLogin("judge")}
                >
               Register as a Judge
              </button>
                {/* </Link> */}

                <button
                className="rounded-[5px] px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                // onClick={() => handleLogin("clerk")}
                >
                Clerk dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;