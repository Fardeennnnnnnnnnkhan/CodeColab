"use client";

import React from "react";
import BackgroundEffects from "../Components/ui/BackgroundEffects";
import SignupForm from "../Components/auth/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      <BackgroundEffects />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
