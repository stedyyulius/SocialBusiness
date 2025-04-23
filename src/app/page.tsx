"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Login from "@/app/login/page";

const socialLinks = [
  {
    label: "Instagram - Indonesia Store",
    href: "/api/redirect?account=insta1",
    icon: "📸",
  },
  {
    label: "Instagram - China Store",
    href: "/api/redirect?account=insta2",
    icon: "🛍️",
  },
  {
    label: "Instagram - Dubai Store",
    href: "/api/redirect?account=insta3",
    icon: "💻",
  },
  {
    label: "Instagram - Thailand Store",
    href: "/api/redirect?account=insta4",
    icon: "🍔",
  },
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  if (!localStorage.getItem("SESSION")) {
    return <Login />;
  }

  const filteredLinks = socialLinks.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-6 tracking-tight">
        Select a Social Media Account
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search accounts..."
        className="mb-8 w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-200 rounded-xl p-6 shadow-xl hover:scale-[1.02] border border-gray-700 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm bg-blue-500 text-white px-3 py-0.5 rounded-full font-semibold group-hover:bg-blue-400">
                  Instagram
                </span>
              </div>
              <h2 className="text-lg font-semibold">{link.label}</h2>
              <p className="text-sm text-gray-400 mt-1">Click to login</p>
            </a>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No accounts found.
          </div>
        )}
      </div>
    </div>
  );
}
