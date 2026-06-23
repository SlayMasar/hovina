import React from "react";
import { Link } from "wouter";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo-transparent.png"
            alt="Hovina Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-display font-bold text-xl tracking-wide hidden sm:block text-foreground">
            HOVINA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#stats" className="hover:text-foreground transition-colors">Impact</a>
        </nav>
      </div>
    </header>
  );
}
