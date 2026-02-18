"use client";
import { useState } from "react";
import { Search, Bell, Menu, X, LogOut } from "lucide-react";
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
            <Search className="h-5 w-5 text-discord-blurple text-indigo-600 hover:text-purple-700 hover:drop-shadow-[0_0_6px_hsl(270_80%_65%/0.5)]" />
            <span className="text-white font-bold text-foreground hover:text-purple-700 hover:drop-shadow-[0_0_6px_hsl(270_80%_65%/0.5)] text-xl font-bitcount">
              PartyFinder
            </span>
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-purple-700 hover:drop-shadow-[0_0_6px_hsl(270_80%_65%/0.5)] font-bitcount text-xl"
            >
              <Link href={link.href}> {link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="font-bitcount text-xl flex gap-5 items-center">
          {isLoggedIn ? (
            <>
              <button className="relative text-muted-foreground hover:text-foreground transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="h-8 w-8 rounded-full bg-[var(--discord-blurple)] flex items-center justify-center text-xs font-bold text-foreground">
                PF
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="hidden md:inline-flex bg-[var(--discord-blurple)] hover:bg-[var(--discord-blurple-hover)] text-foreground gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors "
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Login with Discord
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
