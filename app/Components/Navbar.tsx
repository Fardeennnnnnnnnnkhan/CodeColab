"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  getUser,
  isAuthenticated,
  logout as logoutUser,
} from "../utils/auth";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      const currentUser = getUser();

      setIsLoggedIn(authenticated);
      setUser(currentUser);
    };

    checkAuth();

    // Listen for storage changes (e.g., when user logs in/out in another tab)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const navItems = [
    { name: "Features", id: "features" },
    { name: "Collaboration", id: "collaboration" },
    { name: "Templates", id: "templates" },
    { name: "Docs", id: "docs" },
    { name: "Pricing", id: "pricing" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CodeCollab
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-300 text-sm">
                    Welcome, {user?.username}
                  </span>
                  <Link
                    href="/playground"
                    className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Playground
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 pb-3 border-t border-white/10">
              {isLoggedIn ? (
                <>
                  <div className="px-3 py-2 text-gray-300 text-sm border-b border-white/10">
                    Welcome, {user?.username}
                  </div>
                  <Link
                    href="/playground"
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 w-full text-left backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Playground
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 w-full text-left backdrop-blur-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 w-full text-left backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:from-purple-600 hover:to-pink-600 w-full mt-2 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
