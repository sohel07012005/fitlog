"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Workout from "@/types/workoutType";
import { WorkoutContext } from "@/context/WorkoutContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { plan, savedWorkouts } = useContext(WorkoutContext) as {
    plan: Workout[];
    savedWorkouts: Workout[];
  };

  return (
    <nav className="bg-black border-b border-[#444445] sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
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

            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <Image src={logo} alt="FITLOG Logo" width={30} height={30} />

              <span>FITLOG</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 font-medium">
            <Link
              href="/"
              className={`transition ${
                pathname === "/"
                  ? "text-[#c2f800]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`transition ${
                pathname === "/my-plan"
                  ? "text-[#c2f800]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 px-3 py-2 text-gray-300 transition hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#c2f800] px-1.5 text-xs font-bold text-black">
                {plan.length}
              </span>
            </Link>
            <Link
              href="/my-plan"
              className="flex items-center gap-2 px-3 py-2 text-gray-300 transition hover:text-white"
            >
              <span>Saved</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-500 px-1 text-xs font-semibold text-gray-300">
                {savedWorkouts.length}
              </span>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#333] py-3">
            <div className="flex flex-col">
              <Link
                href="/"
                className={`transition ${
                  pathname === "/"
                    ? "text-[#c2f800]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                className={`transition ${
                  pathname === "/my-plan"
                    ? "text-[#c2f800]"
                    : "text-gray-300 hover:text-white"
                }`}
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
