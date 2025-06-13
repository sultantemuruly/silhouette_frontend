"use client";

import { useState } from "react";
import { Toggle } from "@/shared/components/ui/toggle";
import { Button } from "@/shared/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex h-16 items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">
              Silhouette
            </span>
          </a>

          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Toggle />
          <div className="hidden md:flex gap-3">
            <Button variant="outline">Log In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
