"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { AccountNameHeader } from "../components/AccountNameHeader";

export default function Posts() {
  const [posts, setPosts] = useState<string[]>([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2-l5gtnYXBdkOObeKZyV_GbovPqsUsqTwg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNjrJldZoJmapvX1v3BFq1IUx9459_fTlrw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlSwI7zI43PK0oypQ_H3z9DmXl0vlq8Qb0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BEXx6JBYPSUJApykzcNUezS-4Hgq_DPBVw&s",
  ]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPosts([url, ...posts]);
    }
  };

  const __renderPosts = () => {
    return posts.map((post, idx) => (
      <div
        key={idx}
        className="bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-200"
      >
        <Image
          src={post}
          alt={`Post ${idx}`}
          className="w-full h-48 object-cover"
          width="200"
          height="200"
        />
      </div>
    ));
  };

  return (
    <Suspense>
      <div className="min-h-screen bg-gray-900 text-white p-6 relative">
        {/* Page Title */}

        <AccountNameHeader />
        {/* Posts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {__renderPosts()}
        </div>

        {/* Upload Button */}
        <div className="fixed bottom-8 right-8">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-5 rounded-full shadow-lg text-lg"
          >
            + Upload Post
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </div>
      </div>
    </Suspense>
  );
}
