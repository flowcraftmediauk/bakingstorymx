import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateCategory?: (category: 'All' | 'Bakery' | 'Desserts' | 'Bingsu' | 'Coffee' | 'Drinks') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    category?: 'All' | 'Bakery' | 'Desserts' | 'Bingsu' | 'Coffee'
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (category && onNavigateCategory) {
      onNavigateCategory(category);
    }
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b border-[#231B16]/8 ${
        isScrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(35,27,22,0.04)]'
          : 'bg-[#FAF6F0] py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-serif text-2xl md:text-[28px] font-semibold tracking-tight text-[#231B16] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
        >
          Baking Story
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-[14px] font-normal text-[#4E4037]"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, '#menu', 'All')}
            className="hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            Menu
          </a>
          <a
            href="#bakery"
            onClick={(e) => handleNavClick(e, '#bakery')}
            className="hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            Bakery
          </a>
          <a
            href="#desserts"
            onClick={(e) => handleNavClick(e, '#desserts')}
            className="hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            Desserts
          </a>
          <a
            href="#bingsu"
            onClick={(e) => handleNavClick(e, '#bingsu')}
            className="hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            Bingsu
          </a>
          <a
            href="#coffee"
            onClick={(e) => handleNavClick(e, '#coffee')}
            className="hidden xl:inline-block hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            Coffee
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="hidden xl:inline-block hover:text-[#231B16] underline-offset-8 hover:underline transition-colors whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
          >
            About
          </a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, '#visit')}
            className="inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-medium text-[#231B16] border border-[#231B16]/25 rounded-full hover:bg-[#3D2B22] hover:text-[#FAF6F0] hover:border-[#3D2B22] transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2B22]"
          >
            Visit Us
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[#231B16] hover:bg-[#EFE7DC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2B22]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#231B16]/10 bg-[#FAF6F0] px-6 py-6 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Menu', href: '#menu', cat: 'All' as const },
              { label: 'Bakery', href: '#bakery' },
              { label: 'Desserts', href: '#desserts' },
              { label: 'Bingsu', href: '#bingsu' },
              { label: 'Coffee', href: '#coffee' },
              { label: 'About', href: '#about' },
              { label: 'Visit Us', href: '#visit' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.cat)}
                className="py-3 px-2 text-lg font-serif text-[#231B16] hover:bg-[#EFE7DC]/60 rounded-xl transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-[#6E5849]" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
