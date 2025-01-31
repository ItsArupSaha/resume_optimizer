// src/components/Header.tsx
"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, DollarSign, FileText, Star } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResumeOptimizer
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <DollarSign className="h-4 w-4" />
              Pricing
            </Link>
            <Link
              href="/#testimonials"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Star className="h-4 w-4" />
              Testimonials
            </Link>
            <Link
              href="/#analyze"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Free Analysis
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <CircleUserRound className="h-4 w-4" />
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Button
                asChild
                className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                variant="outline"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
