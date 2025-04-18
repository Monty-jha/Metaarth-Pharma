import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logoImage from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Research', path: '/research' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const playClickSound = () => {
    const audio = new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3');
    audio.volume = 0.5;
    audio.play().catch(err => console.log('Audio playback prevented:', err));
  };

  function toggleMenu() {
    playClickSound();
    setIsOpen(!isOpen);
  }

  // Toggle dark mode function
  const toggleDarkMode = () => {
    playClickSound();
    setDarkMode(!darkMode);
  };

  // Handle scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Control body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  // Load dark mode preference from localStorage on initial load
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  // Function to handle navigation click
  const handleNavClick = () => {
    toggleMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
     {/* Fixed Navigation Bar */}
<nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Replace Pill icon with your custom logo */}
          <img 
            src={logoImage} 
            alt="Metaarth Pharma Logo" 
            className="h-12 w-auto dark:invert"
          />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">Metaarth Pharma</span>
        </Link>
      </div>

      {/* Dark Mode Toggle + Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transform transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none transform transition-transform hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
  </div>
</nav>

      {/* Full Screen Mobile Menu with Video Background */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ filter: darkMode ? 'brightness(0.5)' : 'brightness(0.7)' }}
          >
            <source src="https://www.mankindpharma.com/wp-content/uploads/2024/11/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navigation Menu - Responsive layout based on screen size */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-3xl md:text-4xl font-bold text-white hover:text-blue-400 transition-all duration-500 transform ${
                  isOpen
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-full opacity-0 scale-50'
                } hover:scale-110`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;