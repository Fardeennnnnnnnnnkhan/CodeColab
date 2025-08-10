"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const codeExamples = [
    `function collaborativeEdit() {
  const [code, setCode] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  
  useEffect(() => {
    // Real-time collaboration
    socket.on('code-update', (data) => {
      setCode(data.code);
    });
  }, []);
  
  return <Editor code={code} />;
}`,
    `// Real-time collaboration
class CodeEditor {
  constructor() {
    this.collaborators = new Map();
    this.code = '';
    this.history = [];
  }
  
  updateCode(newCode) {
    this.code = newCode;
    this.broadcastUpdate();
  }
}`,
    `const features = {
  realTime: 'Instant collaboration',
  syntax: 'Multi-language support',
  versioning: 'Git integration',
  sharing: 'One-click sharing',
  templates: 'Pre-built templates'
};`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStartCoding = () => {
    router.push("/playground");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Real-time collaboration for modern teams
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real-Time
              </span>
              <br />
              <span className="text-white">Code Editor</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Experience the future of collaborative coding. Write, edit, and
              debug code in real-time with your team. Lightning-fast performance
              with advanced features like syntax highlighting, version control,
              and instant collaboration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={handleStartCoding}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span>Start Coding Now</span>
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 backdrop-blur-sm flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>View Templates</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { number: "10M+", label: "Lines of Code" },
                { number: "50K+", label: "Active Users" },
                { number: "100+", label: "Languages" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Animated Code Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    collaborative-editor.js
                  </div>
                </div>
                <pre className="text-green-400 font-mono text-sm md:text-base overflow-x-auto">
                  <code>{codeExamples[currentCodeIndex]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CodeCollab
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for modern development teams with cutting-edge features and
              seamless collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Collaboration",
                description:
                  "See changes instantly as your teammates code. Multiple cursors, live chat, and presence indicators.",
                icon: "👥",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Multi-Language Support",
                description:
                  "Support for 50+ programming languages with syntax highlighting and intelligent autocomplete.",
                icon: "⚡",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Version Control",
                description:
                  "Built-in Git integration with visual diff tools and seamless branching workflows.",
                icon: "🔀",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Instant Sharing",
                description:
                  "Share your workspace with a single click. No setup required, just code and collaborate.",
                icon: "🚀",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Advanced Debugging",
                description:
                  "Integrated debugging tools with breakpoints, variable inspection, and call stack visualization.",
                icon: "🐛",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "Cloud Sync",
                description:
                  "Your code automatically syncs across all devices. Never lose your work again.",
                icon: "☁️",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section
        id="templates"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready-to-Use{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Templates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Jump-start your projects with our curated collection of templates
              for various frameworks and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "React App",
                description:
                  "Full-stack React application with authentication, database, and deployment setup.",
                icon: "⚛️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Node.js API",
                description:
                  "RESTful API template with Express, MongoDB, and JWT authentication.",
                icon: "🟢",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Next.js Full-Stack",
                description:
                  "Modern full-stack application with Next.js, Prisma, and PostgreSQL.",
                icon: "⚡",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Python Flask",
                description:
                  "Lightweight Python web application with SQLAlchemy and user management.",
                icon: "🐍",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "Vue.js SPA",
                description:
                  "Single-page application with Vue 3, Vuex, and Vue Router.",
                icon: "💚",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                title: "Mobile App",
                description:
                  "Cross-platform mobile app template with React Native and Expo.",
                icon: "📱",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((template, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${template.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {template.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {template.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {template.description}
                </p>
                <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-600 hover:to-pink-600">
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to get started and become a power user of
              CodeCollab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started",
                description:
                  "Quick setup guide and first steps to get you coding in minutes.",
                icon: "🚀",
                gradient: "from-blue-500 to-cyan-500",
                link: "#",
              },
              {
                title: "API Reference",
                description:
                  "Complete API documentation with examples and best practices.",
                icon: "📚",
                gradient: "from-purple-500 to-pink-500",
                link: "#",
              },
              {
                title: "Tutorials",
                description:
                  "Step-by-step guides for common use cases and integrations.",
                icon: "🎓",
                gradient: "from-green-500 to-emerald-500",
                link: "#",
              },
              {
                title: "Examples",
                description:
                  "Real-world examples and sample projects to learn from.",
                icon: "💡",
                gradient: "from-orange-500 to-red-500",
                link: "#",
              },
              {
                title: "Troubleshooting",
                description:
                  "Common issues and their solutions to keep you coding.",
                icon: "🔧",
                gradient: "from-yellow-500 to-orange-500",
                link: "#",
              },
              {
                title: "Community",
                description:
                  "Join our community forums and get help from other developers.",
                icon: "👥",
                gradient: "from-indigo-500 to-purple-500",
                link: "#",
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${doc.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {doc.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {doc.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {doc.description}
                </p>
                <a
                  href={doc.link}
                  className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="collaboration"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started with collaborative coding in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Workspace",
                description:
                  "Start a new project or import existing code. Choose from our pre-built templates.",
                icon: "🚀",
              },
              {
                step: "02",
                title: "Invite Team",
                description:
                  "Share a link with your team members. They can join instantly with no setup required.",
                icon: "👥",
              },
              {
                step: "03",
                title: "Code Together",
                description:
                  "Start coding in real-time. See changes instantly and collaborate seamlessly.",
                icon: "💻",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-purple-400 border-2 border-purple-500">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your team&apos;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: [
                  "Up to 3 collaborators",
                  "Basic templates",
                  "Community support",
                  "1GB storage",
                ],
                popular: false,
              },
              {
                name: "Pro",
                price: "$12",
                period: "per month",
                features: [
                  "Unlimited collaborators",
                  "Advanced templates",
                  "Priority support",
                  "50GB storage",
                  "Git integration",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "per month",
                features: [
                  "Everything in Pro",
                  "Custom integrations",
                  "Dedicated support",
                  "Unlimited storage",
                  "SLA guarantee",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border ${
                  plan.popular
                    ? "border-purple-500 shadow-2xl shadow-purple-500/25"
                    : "border-gray-700/50"
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <svg
                          className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-8 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of developers who trust CodeCollab for their
              collaborative coding needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Developer",
                company: "TechCorp",
                avatar:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
                quote:
                  "CodeCollab has transformed how our team collaborates. The real-time features are incredible.",
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                company: "StartupXYZ",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                quote:
                  "Finally, a coding platform that actually works for remote teams. Game-changer!",
              },
              {
                name: "Emily Davis",
                role: "Frontend Developer",
                company: "DesignStudio",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
                quote:
                  "The UI is beautiful and the collaboration features are seamless. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Coding Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who are already collaborating with
            CodeCollab.
          </p>
          <button
            onClick={handleStartCoding}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            Start Coding Now - It&apos;s Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CodeCollab
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The future of collaborative coding. Built for modern development
                teams who want to code together seamlessly.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 CodeCollab. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
