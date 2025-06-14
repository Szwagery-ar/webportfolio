"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = ["home", "about", "projects", "contact"]
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-[#00DBD8] ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b-2 border-[#00DBD8]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-mono text-xl font-bold tracking-tighter">
            <a href="#home" className="hover:text-primary flex items-center">
              <div className="w-4 h-4 bg- mr-2 bg-[#00DBD8]"></div>
               PORTFOLIO
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-mono text-sm tracking-widest hover:text-primary transition-colors relative ${
                  activeSection === item.href.substring(1) ? "text-primary" : ""
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00DBD8]"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-primary">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t-2 border-[#00DBD8]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-sm tracking-widest py-2 hover:text-primary transition-colors ${
                  activeSection === item.href.substring(1) ? "text-primary" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="font-mono text-sm tracking-widest py-2 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
