'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleSayHello = () => {
    // WhatsApp API URL with your phone number
    window.open('https://wa.me/919633531411', '_blank');
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('/assets/azmin2024.pdf', '_blank');
  };

  return (
    <header className="w-full py-8">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-16 h-16 relative">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            onClick={handleResumeClick}
            className="text-base font-medium hover:text-base-blue"
          >
            Resume
          </Link>
          <Button 
            variant="outline" 
            className="text-base-blue text-base border-primary font-[500] hover:bg-base-blue hover:text-white rounded-full border-2 border-base-blue px-5 py-5"
            onClick={handleSayHello}
          >
            Say Hello
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-8 py-4">
          <Link
            href="#"
            onClick={handleResumeClick}
            className="text-base font-medium h rounded-full  border-2 bg-base-blue text-white px-6 py-2"
          >
            Resume
          </Link>
          <Button 
            variant="outline" 
            className="text-base-blue text-base border-primary font-[500] hover:bg-base-blue hover:text-white rounded-full border-2 border-base-blue px-5 py-5"
            onClick={handleSayHello}
          >
            Say Hello
          </Button>
        </nav>
      )}
    </header>
  )
}

