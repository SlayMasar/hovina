import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo-transparent.png" alt="Hovina Logo" className="h-8 w-auto" />
          <span className="font-display font-bold text-lg tracking-wide text-foreground">
            HOVINA
          </span>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Hovina. Building the African future.
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/data-deletion" className="hover:text-foreground transition-colors">Data Deletion</Link>
        </div>
      </div>
    </footer>
  );
}
