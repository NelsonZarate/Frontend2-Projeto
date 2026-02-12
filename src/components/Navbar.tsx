"use client";
import { useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import GlitchText from "./GlitchText";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse parties", href: "/browse" },
  { label: "About", href: "/about" },
];
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky z-50 top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div>
          <a href="/" className="flex items-center gap-2">
            <Search className="h-5 w-5 text-discord-blurple text-indigo-600" />
            <span className="text-lg text-white font-bold text-foreground">
              <GlitchText
                speed={1}
                enableShadows
                enableOnHover={false}
                className="custom-class"
              >
                PartyFinder
              </GlitchText>
            </span>
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-purple-700 hover:drop-shadow-[0_0_6px_hsl(270_80%_65%/0.5)]"
            >
              <Link href={link.href}> {link.label}</Link>
            </li>
          ))}
        </ul>
        <div>Discord link</div>
      </div>
    </nav>
  );
};

export default Navbar;
