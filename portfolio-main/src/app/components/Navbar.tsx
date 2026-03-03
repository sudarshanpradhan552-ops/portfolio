'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'services', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-orange-500/10 backdrop-blur-md border-b border-border shadow-lg' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Sudarsan Pradhan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              href="#about"
              isActive={activeSection === 'about'}
              onClick={() => scrollToSection('about')}
            >
              About
            </NavLink>
            <NavLink
              href="#skills"
              isActive={activeSection === 'skills'}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </NavLink>
            <NavLink
              href="#services"
              isActive={activeSection === 'services'}
              onClick={() => scrollToSection('services')}
            >
              Services
            </NavLink>
            <NavLink
              href="#projects"
              isActive={activeSection === 'projects'}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </NavLink>
            <NavLink
              href="#contact"
              isActive={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <MobileNavLink
                href="#about"
                isActive={activeSection === 'about'}
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                href="#skills"
                isActive={activeSection === 'skills'}
                onClick={() => {
                  scrollToSection('skills');
                  setIsMobileMenuOpen(false);
                }}
              >
                Skills
              </MobileNavLink>
              <MobileNavLink
                href="#services"
                isActive={activeSection === 'services'}
                onClick={() => {
                  scrollToSection('services');
                  setIsMobileMenuOpen(false);
                }}
              >
                Services
              </MobileNavLink>
              <MobileNavLink
                href="#projects"
                isActive={activeSection === 'projects'}
                onClick={() => {
                  scrollToSection('projects');
                  setIsMobileMenuOpen(false);
                }}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                isActive={activeSection === 'contact'}
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  isActive,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive
          ? 'text-primary'
          : 'text-muted-foreground hover:text-primary'
        }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
  isActive,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${isActive
          ? 'text-primary bg-primary/10'
          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
        }`}
    >
      {children}
    </button>
  );
} 