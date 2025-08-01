'use client';

import React from "react";
import FlipLink from "../ui/text-effect-flipper"
const Footer: React.FC = () => {
  return (
    <footer className="mx-auto my-12 flex flex-col gap-8 max-w-screen-xl px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-xl">
          {/* Logo placeholder as text for accessibility */}
          <FlipLink href="#" className="font-bold text-[10px]">Joynur Rahman</FlipLink>
          <p className="text-base ">
            Passionate about React, Next.js, GSAP animations, and custom UI development. I create fast, modern, and dynamic websites that stand out.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 rounded-full px-7 py-3   hover:border-2 hover:border-yellow-100 w-fit transition border-transparent">
            {/* Icon removed */}
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none font-semibold text-lg  "
            />
          </div>
          <button className="text-lg px-5 py-3 rounded-full  border border-white cursor-pointer transition-transform transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
      <hr/>
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="text-gray-600  text-base mb-2 md:mb-0">
          © 2025 jounur-rahman.com - All Rights Reserved.
        </div>
        <div className="flex flex-row gap-8  text-base">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Connect with me</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
