import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[#444445]">
      <div className="container mx-auto px-4 py-5">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={30}
              height={30}
              className="w-7.5 h-7.5"
            />

            <span className="font-semibold text-lg">
              FITLOG
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-400 text-center">
            <LuCopyright className="shrink-0" size={15} />

            <span>
              2026 FitLog — Workout Library. Train hard, log honest.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;