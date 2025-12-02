'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';
import EmployerRegisterPopup from './EmployerRegisterPopup';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userType, setUserType] = useState(null);
  const [loggedUser, setLoggedUser] = useState<any>(null); // store user from localStorage

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setLoggedUser(JSON.parse(stored));
      } catch {
        console.error("Invalid JSON in localStorage");
      }
    }
  }, []);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const openRegister = (type) => {
    setUserType(type);
    setShowLogin(false);
    setShowRegister(true);
  };

  const closePopups = () => {
    setShowLogin(false);
    setShowRegister(false);
    setUserType(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setLoggedUser(null);
    window.location.href = "/";
  };

  return (
    <>
      <nav className="w-full border-b border-gray-200 bg-gradient-to-b from-[#E2F4FA] via-white to-[#E2F4FA] antialiased">
        <div className="mx-auto p-[10px] md:p-[50px] py-4 flex items-center justify-between">

          <div className="text-2xl font-semibold tracking-tight">
            <span className="text-black">nexttechie.</span>
          </div>

          {loggedUser ? (
            <div className="flex items-center gap-4">
              <p>{loggedUser.firstName || loggedUser.username || "User"}</p>
              <Link
                href={
                  loggedUser.user_role_name === "employer"
                    ? "/employer/jobs"
                    : loggedUser.user_role_name === "admin" || loggedUser.user_role_name === "super admin"
                    ? "/master/jobs"
                    : "/profilepages"
                }
              >
                <p className="px-4 py-2 text-white bg-blue-500 rounded-md">Dashboard</p>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center md:space-x-4">
              <a
                href="#"
                onClick={openLogin}
                className="text-gray-600 hover:text-black font-medium text-[12px] md:text-[18px] leading-[20px] md:leading-[26px]"
              >
                Sign in / Register
              </a>

              <button className="px-[5px] py-[3px] md:px-4 md:py-2 bg-black text-white text-[12px] md:text-[18px] leading-[20px] md:leading-[26px] rounded-full hover:bg-gray-800 transition">
                Post a job
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Popups */}
      {showLogin && <LoginPopup onClose={closePopups} onRegister={openRegister} />}
      {showRegister && userType === 'candidate' && <RegisterPopup onClose={closePopups} onLogin={openLogin} />}
      {showRegister && userType === 'employer' && <EmployerRegisterPopup onClose={closePopups} onLogin={openLogin} />}
    </>
  );
}
