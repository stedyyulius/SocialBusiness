"use client";

import { Suspense, useState } from "react";
import { AccountNameHeader } from "../components/AccountNameHeader";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Can you send details of the product?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: "user", text: input },
    ]);
    setInput("");
  };

  return (
    <Suspense>
      <div className="flex flex-col h-screen bg-gray-950 text-white">
        {/* Header */}
        <header className="p-4 bg-gray-900 shadow-md text-lg font-semibold">
          <AccountNameHeader />
        </header>

        {/* Chat Body */}
        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === "user" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </main>

        {/* Input */}
        <footer className="p-4 bg-gray-900 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
          >
            Send
          </button>
        </footer>
      </div>
    </Suspense>
  );
}
