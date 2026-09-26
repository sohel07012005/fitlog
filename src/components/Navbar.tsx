"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-[#444445] sticky top-0 z-50">
      <div className="container mx-auto">

        <div className="h-16 flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">

            {/* Hamburger - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-[#222] rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <Image
                src={logo}
                alt="FITLOG Logo"
                width={30}
                height={30}
              />

              <span>FITLOG</span>
            </Link>
          </div>


          {/* CENTER NAVIGATION - Desktop */}
          <div className="hidden lg:flex items-center gap-6">

            <Link
              href="/"
              className="text-gray-300 hover:text-white transition"
            >
              Workouts
            </Link>

            <Link
              href="/My-plan"
              className="text-gray-300 hover:text-white transition"
            >
              My Plan
            </Link>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            <Link
              href="/plan"
              className="text-gray-300 hover:text-white px-3 py-2 transition"
            >
              Plan
            </Link>

            <Link
              href="/saved"
              className="text-gray-300 hover:text-white px-3 py-2 transition"
            >
              Saved
            </Link>

          </div>

        </div>


        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#333] py-3">

            <div className="flex flex-col">

              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-[#1a1a1a] px-3 py-3 rounded-md transition"
              >
                Workouts
              </Link>

              <Link
                href="/My-plan"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-[#1a1a1a] px-3 py-3 rounded-md transition"
              >
                My Plan
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;