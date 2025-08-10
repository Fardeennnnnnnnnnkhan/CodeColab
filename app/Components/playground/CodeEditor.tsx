"use client";

import React, { useState, useEffect } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState(`// Welcome to CodeCollab!
// This is a real-time collaborative code editor

function collaborativeCodeEditor() {
  const [code, setCode] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Real-time collaboration setup
    const socket = io('ws://localhost:3000');
    
    socket.on('code-update', (data) => {
      setCode(data.code);
    });
    
    socket.on('user-joined', (user) => {
      setCollaborators(prev => [...prev, user]);
    });
    
    return () => socket.disconnect();
  }, []);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    // Broadcast changes to other users
    socket.emit('code-update', { code: newCode });
  };

  return (
    <div className="code-editor">
      <Editor 
        value={code}
        onChange={handleCodeChange}
        language="javascript"
        theme="vs-dark"
      />
    </div>
  );
}`);

  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 });
  const [isTyping, setIsTyping] = useState(false);

  // Simulate typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(!isTyping);
    }, 500);
    return () => clearInterval(interval);
  }, [isTyping]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    // Calculate cursor position
    const textBeforeCursor = e.target.value.substring(
      0,
      e.target.selectionStart
    );
    const lines = textBeforeCursor.split("\n");
    setCursorPosition({
      line: lines.length,
      column: lines[lines.length - 1].length + 1,
    });
  };

  const calculateLineNumbers = () => {
    const lines = code.split("\n");
    return lines.map((_, index) => index + 1);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      {/* Editor Header */}
      <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-300 text-sm font-medium">main.js</div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-400 text-xs">Live</span>
          </div>
          <div className="text-gray-400 text-xs">
            Ln {cursorPosition.line}, Col {cursorPosition.column}
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Line Numbers */}
        <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col text-right">
          {calculateLineNumbers().map((lineNum) => (
            <div
              key={lineNum}
              className="h-6 flex items-center justify-end px-3 text-gray-500 text-xs font-mono"
            >
              {lineNum}
            </div>
          ))}
        </div>

        {/* Code Area */}
        <div className="flex-1 flex flex-col">
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="flex-1 bg-transparent text-gray-200 font-mono text-sm leading-6 p-4 outline-none resize-none"
            spellCheck={false}
            style={{
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            }}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-8 bg-gray-800 border-t border-gray-700 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-gray-400 text-xs">JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 text-xs">UTF-8</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-gray-400 text-xs">Spaces: 2</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">
              {code.split("\n").length} lines
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
