"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Login from "./login/page";

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
  const [query, setQuery] = useState("");

  const router = useRouter();

  if (typeof window !== "undefined" && !localStorage.getItem("SESSION")) {
    return <Login />;
  }

  const deletePrivateData = async () => {
    try {
      await axios.get("/api/dataDeletion?sign_request=mock");

      alert("all data deleted");
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const filteredLinks = socialLinks.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-start p-6 relative">
      {/* Top Right Button */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-gray-700 text-sm px-4 py-2 rounded-md hover:bg-gray-600 transition"
          onClick={() => deletePrivateData()}
        >
          Data Deletion
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-6 tracking-tight">
        Select a Social Media Account
      </h1>

      <input
        type="text"
        placeholder="Search accounts..."
        className="mb-8 w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((link, idx) => (
            <div
              key={idx}
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-200 rounded-xl p-6 shadow-xl hover:scale-[1.02] border border-gray-700 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm bg-blue-500 text-white px-3 py-0.5 rounded-full font-semibold group-hover:bg-blue-400">
                  Instagram
                </span>
              </div>

              <h2 className="text-lg font-semibold mb-4">{link.label}</h2>

              {/* Icons */}
              <div className="flex gap-3">
                <button
                  className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg text-sm cursor-pointer"
                  onClick={() => router.push(`/chat?${link.label}`)}
                >
                  💬 Chat
                </button>
                <button
                  className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg text-sm cursor-pointer"
                  onClick={() => router.push(`/posts?${link.label}`)}
                >
                  🖼️ Pictures
                </button>
              </div>
            </div>
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
