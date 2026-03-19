import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Baby } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass-panel" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
              <Baby className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              BabyBloom
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="px-5 py-2.5 bg-foreground text-background hover:bg-primary hover:text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary p-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-border my-2" />
              <div className="flex flex-col gap-3">
                <a
                  href="#login"
                  className="w-full text-center py-3 text-sm font-medium text-foreground/80 hover:text-primary bg-muted/50 rounded-xl"
                >
                  Log in
                </a>
                <a
                  href="#signup"
                  className="w-full text-center py-3 bg-primary text-white rounded-xl text-sm font-semibold shadow-md"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
