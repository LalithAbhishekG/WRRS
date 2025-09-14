import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 Import Link
import Logo from "../../Assets/Shared/Logo.png";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-8xl mx-auto md:px-20 px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-1 flex mt-16">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-36 self-start drop-shadow-md"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 font-medium text-sm text-pink-900 hover:text-pink-700"
                            >
                                About Us <ChevronDown size={16} />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 w-48 border border-gray-100">
                                    <Link
                                        to="/about"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Our Mission
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Our Vision
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Meet the Team
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/our-impact"
                            className="font-medium text-sm text-pink-900 hover:text-pink-700"
                        >
                            Our Impact
                        </Link>
                        <Link
                            to="/get-involved"
                            className="font-medium text-sm text-pink-900 hover:text-pink-700"
                        >
                            Get Involved
                        </Link>
                        <Link
                            to="/news-events"
                            className="font-medium text-sm text-pink-900 hover:text-pink-700"
                        >
                            News & Events
                        </Link>
                    </nav>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X size={28} className="text-pink-900" />
                        ) : (
                            <Menu size={28} className="text-pink-900" />
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-6 py-20 space-y-4">
                        <Link
                            to="/about"
                            className="block font-medium text-sm text-pink-900 hover:text-pink-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/our-impact"
                            className="block font-medium text-sm text-pink-900 hover:text-pink-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Impact
                        </Link>
                        <Link
                            to="/get-involved"
                            className="block font-medium text-sm text-pink-900 hover:text-pink-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Involved
                        </Link>
                        <Link
                            to="/news-events"
                            className="block font-medium text-sm text-pink-900 hover:text-pink-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            News & Events
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}