import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../../data/portfolioData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-orange-500/20 bg-stone-950/90 backdrop-blur-md"
    >
      <div className="container-width flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold text-orange-50 transition hover:text-brand-300">
          Devin Jaera
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 transition hover:text-brand-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            className="rounded-lg p-2 text-orange-100 transition hover:bg-orange-500/10 hover:text-brand-300"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-orange-500/20 bg-stone-950 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-orange-500/10 hover:text-brand-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.header>
  );
};

export default Navbar;
