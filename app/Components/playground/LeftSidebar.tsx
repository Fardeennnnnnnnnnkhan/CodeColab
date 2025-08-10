"use client";

import React, { useState } from "react";

interface LeftSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const LeftSidebar = ({ isOpen, onToggle }: LeftSidebarProps) => {
  const [activeTab, setActiveTab] = useState("files");
  const [expandedFolders, setExpandedFolders] = useState(["src", "public"]);

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const fileStructure = [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "components", type: "folder", children: [
          { name: "Button.tsx", type: "file", language: "typescript" },
          { name: "Card.tsx", type: "file", language: "typescript" },
          { name: "Navbar.tsx", type: "file", language: "typescript" }
        ]},
        { name: "pages", type: "folder", children: [
          { name: "index.tsx", type: "file", language: "typescript" },
          { name: "about.tsx", type: "file", language: "typescript" }
        ]},
        { name: "styles", type: "folder", children: [
          { name: "globals.css", type: "file", language: "css" }
        ]},
        { name: "App.tsx", type: "file", language: "typescript" }
      ]
    },
    {
      name: "public",
      type: "folder",
      children: [
        { name: "index.html", type: "file", language: "html" },
        { name: "favicon.ico", type: "file", language: "image" }
      ]
    },
    { name: "package.json", type: "file", language: "json" },
    { name: "README.md", type: "file", language: "markdown" }
  ];

  const collaborators = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      status: "online",
      role: "Owner",
      lastSeen: "2 min ago"
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      status: "online",
      role: "Editor",
      lastSeen: "1 min ago"
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "away",
      role: "Viewer",
      lastSeen: "5 min ago"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      status: "offline",
      role: "Editor",
      lastSeen: "1 hour ago"
    }
  ];

  const renderFileTree = (files: any[], level = 0) => {
    return files.map((item, index) => (
      <div key={index} style={{ paddingLeft: `${level * 16}px` }}>
        <div 
          className={`flex items-center py-1 px-2 rounded cursor-pointer hover:bg-gray-700 transition-colors duration-200 ${
            item.type === "file" ? "text-gray-300" : "text-gray-200 font-medium"
          }`}
          onClick={() => item.type === "folder" && toggleFolder(item.name)}
        >
          {item.type === "folder" ? (
            <svg 
              className={`w-4 h-4 mr-2 transition-transform duration-200 ${
                expandedFolders.includes(item.name) ? "rotate-90" : ""
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <div className="w-4 h-4 mr-2 flex-shrink-0">
              {item.language === "typescript" && (
                <div className="w-full h-full bg-blue-500 rounded"></div>
              )}
              {item.language === "css" && (
                <div className="w-full h-full bg-purple-500 rounded"></div>
              )}
              {item.language === "html" && (
                <div className="w-full h-full bg-orange-500 rounded"></div>
              )}
              {item.language === "json" && (
                <div className="w-full h-full bg-yellow-500 rounded"></div>
              )}
              {item.language === "markdown" && (
                <div className="w-full h-full bg-gray-500 rounded"></div>
              )}
            </div>
          )}
          <span className="truncate">{item.name}</span>
        </div>
        {item.type === "folder" && expandedFolders.includes(item.name) && item.children && (
          renderFileTree(item.children, level + 1)
        )}
      </div>
    ));
  };

  return (
    <div className={`bg-gray-800 border-r border-gray-700 flex flex-col transition-all duration-300 ${
      isOpen ? "w-80" : "w-12"
    }`}>
      {isOpen ? (
        <>
          {/* Header */}
          <div className="h-12 border-b border-gray-700 flex items-center justify-between px-4">
            <h2 className="text-white font-semibold">Explorer</h2>
            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab("files")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === "files" 
                  ? "text-white border-b-2 border-purple-500" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Files
            </button>
            <button
              onClick={() => setActiveTab("collaborators")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === "collaborators" 
                  ? "text-white border-b-2 border-purple-500" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Collaborators
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "files" && (
              <div className="p-4">
                {renderFileTree(fileStructure)}
              </div>
            )}
            
            {activeTab === "collaborators" && (
              <div className="p-4 space-y-4">
                {collaborators.map((collaborator) => (
                  <div key={collaborator.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <div className="relative">
                      <img
                        src={collaborator.avatar}
                        alt={collaborator.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                        collaborator.status === "online" ? "bg-green-500" :
                        collaborator.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-sm font-medium truncate">{collaborator.name}</p>
                        <span className={`text-xs px-2 py-1 rounded ${
                          collaborator.role === "Owner" ? "bg-purple-500 text-white" :
                          collaborator.role === "Editor" ? "bg-blue-500 text-white" :
                          "bg-gray-600 text-gray-300"
                        }`}>
                          {collaborator.role}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">{collaborator.lastSeen}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center py-4">
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
