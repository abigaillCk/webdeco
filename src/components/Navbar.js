import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import menu from '../assets/menu.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(''); // Track active menu
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (menu) => {
        setActiveMenu(menu);
        setMenuOpen(false); // Close the mobile menu after selection
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-[#E42F46] shadow-md sticky top-0 z-50">
            <nav className="flex justify-between items-center px-6 py-2 h-20 max-w-screen-xl mx-auto">
                {/* Logo - Paling Kiri */}
                <div className="logo inline-block p-100">
                    <Link to="/" onClick={() => setActiveMenu('')}>
                        <img src={Logo} alt="DECO Logo" className="w-36 h-auto" />
                    </Link>
                </div>

                {/* Desktop Navigation Links - Paling Kanan */}
                <div className="hidden md:flex items-center space-x-8 ml-0">
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="/"
                                className={`font-bold px-4 py-2 ${activeMenu === 'home' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                                onClick={() => handleLinkClick('home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us"
                                className={`font-bold px-4 py-2 ${activeMenu === 'about-us' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                                onClick={() => handleLinkClick('about-us')}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={`font-bold px-4 py-2 ${activeMenu === 'services' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                                onClick={() => handleLinkClick('services')}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/project"
                                className={`font-bold px-4 py-2 ${activeMenu === 'project' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                                onClick={() => handleLinkClick('project')}
                            >
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/product"
                                className={`font-bold px-4 py-2 ${activeMenu === 'product' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                                onClick={() => handleLinkClick('product')}
                            >
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact-us"
                                className={`font-bold px-4 py-2 ${activeMenu === 'contact-us' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                                onClick={() => handleLinkClick('contact-us')}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <img src={menu} alt="Menu" className="w-8 h-8 cursor-pointer" />
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                ref={menuRef}
                className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute top-20 right-0 w-1/2 px-6 py-4`}
            >
                <ul className="space-y-4">
                    <li>
                        <Link
                            to="/"
                            className={`block font-bold px-4 py-2 ${activeMenu === 'home' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-us"
                            className={`block font-bold px-4 py-2 ${activeMenu === 'about-us' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                            onClick={() => handleLinkClick('about-us')}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={`block font-bold px-4 py-2 ${activeMenu === 'services' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                            onClick={() => handleLinkClick('services')}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/project"
                            className={`block font-bold px-4 py-2 ${activeMenu === 'project' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                            onClick={() => handleLinkClick('project')}
                        >
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/product"
                            className={`block font-bold px-4 py-2 ${activeMenu === 'product' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                            onClick={() => handleLinkClick('product')}
                        >
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact-us"
                            className={`block font-bold px-4 py-2 ${activeMenu === 'contact-us' ? 'bg-white text-[#E42F46]' : 'text-black'} hover:bg-gray-200 transition-colors`}
                            onClick={() => handleLinkClick('contact-us')}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
