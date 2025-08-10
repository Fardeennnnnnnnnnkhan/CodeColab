"use client";

import React, { useState } from "react";

interface RightSidebarProps {
  onToggle: () => void;
}

const RightSidebar = ({ onToggle }: RightSidebarProps) => {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      message: "Hey everyone! I'm working on the authentication feature.",
      timestamp: "2:30 PM",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      message: "Great! I'll help you with the UI components.",
      timestamp: "2:32 PM",
    },
    {
      id: 3,
      user: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      message: "I'm reviewing the code you just pushed.",
      timestamp: "2:35 PM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: "You",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const terminalOutput = [
    {
      type: "command",
      content: "$ npm install react-syntax-highlighter",
      timestamp: "2:30 PM",
    },
    {
      type: "output",
      content: "added 1 package, and audited 1 package in 1s",
      timestamp: "2:30 PM",
    },
    {
      type: "output",
      content: "found 0 vulnerabilities",
      timestamp: "2:30 PM",
    },
    { type: "command", content: "$ npm start", timestamp: "2:31 PM" },
    { type: "output", content: "Compiled successfully!", timestamp: "2:31 PM" },
    {
      type: "output",
      content: "You can now view codecollab in the browser.",
      timestamp: "2:31 PM",
    },
  ];

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
      {/* Header */}
      <div className="h-12 border-b border-gray-700 flex items-center justify-between px-4">
        <h2 className="text-white font-semibold">Collaboration</h2>
        <button
          onClick={onToggle}
          className="text-gray-400 hover:text-white transition-colors duration-200"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
            activeTab === "chat"
              ? "text-white border-b-2 border-purple-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab("terminal")}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
            activeTab === "terminal"
              ? "text-white border-b-2 border-purple-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Terminal
        </button>
        <button
          onClick={() => setActiveTab("issues")}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
            activeTab === "issues"
              ? "text-white border-b-2 border-purple-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Issues
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "chat" && (
          <div className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-3">
                  <img
                    src={message.avatar}
                    alt={message.user}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium">
                        {message.user}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {message.timestamp}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">
                      {message.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "terminal" && (
          <div className="h-full flex flex-col">
            {/* Terminal Header */}
            <div className="px-4 py-2 border-b border-gray-700 flex items-center justify-between">
              <span className="text-white text-sm font-medium">Terminal</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-900 font-mono text-sm">
              {terminalOutput.map((item, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    item.type === "command" ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  <span className="text-gray-500">[{item.timestamp}] </span>
                  {item.content}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  placeholder="Enter command..."
                  className="flex-1 bg-transparent text-white text-sm outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "issues" && (
          <div className="p-4">
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Authentication Bug</h3>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    High
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">
                  Users are experiencing login issues on mobile devices.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Created by John Doe</span>
                  <span>2 hours ago</span>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">UI Responsiveness</h3>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Medium
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">
                  Sidebar needs better mobile responsiveness.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Created by Jane Smith</span>
                  <span>1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
